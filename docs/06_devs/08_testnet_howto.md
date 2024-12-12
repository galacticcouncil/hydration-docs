# Design and Automation of our Tesnet Deployment at Hydration

In this article, we are going to show you how we designed and automated our pipeline to be able to deploy a new testnet (Parachain + Relaychain) within minutes using Kubernetes (EKS Fargate), AWS ACM, Route53, Terraform and Github Actions.

## The choice of EKS with Fargate
### Why EKS with Fargate?
Our Parachain and Relaychain images are based on two separate images, which need one or more containers to run for each. Kubernetes being the standard of container automation and scaling in the industry today, we naturally made this choice (Docker Swarm has some serious scaling issues that we might talk about in a separate article, if interest be.)

Now, since our infrastructure is partially based on AWS, we had the choice between having either EKS with EC2 instances running under the hood, or using Fargate. The difference between the two is that, with EC2, you have less flexibility as far as controlling the resources is concerned; if you have no idea about the number of pods you need to be running in the future, you most likely will have to overestimate the capacity (CPU / RAM power as well as the number) of your instances, which may result in useless capacity lost and higher bills. Another reason is that these EC2 instances need to be administrated, which needs time and resources.

For these reasons, we came to the conclusion that the usage of Fargate might be a better solution for dealing with our deployments and to be able to scale (either up or down) them correctly. In Fargate, you don't need to worry about instances or servers, all you have to do (in a nutshell) is to write your Kubernetes Manifests, apply those, and AWS will take care of the rest; i.e. provisioning the servers, planning the pods, etc.

To create a Kubernetes Instance in AWS, you can either use EKSCTL or Terraform. Nothing fancy here. Here is an example for creating a Fargate Cluster (from the documentation):

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: fargate-cluster
  region: ap-northeast-1

nodeGroups:
  - name: ng-1
    instanceType: m5.large
    desiredCapacity: 1

fargateProfiles:
  - name: fp-default
    selectors:
      # All workloads in the "default" Kubernetes namespace will be
      # scheduled onto Fargate:
      - namespace: default
      # All workloads in the "kube-system" Kubernetes namespace will be
      # scheduled onto Fargate:
      - namespace: kube-system
  - name: fp-dev
    selectors:
      # All workloads in the "dev" Kubernetes namespace matching the following
      # label selectors will be scheduled onto Fargate:
      - namespace: dev
        labels:
          env: dev
          checks: passed
```

Once done, all we had to do is to create and apply our Kubernetes Objects.

### Deployment of our Relaychain
#### Deployment Example:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: YOUR_NAMESPACE
  name: relaychain-alice-deployment
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: relaychain-alice
  replicas: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: relaychain-alice
    spec:
      containers:
      - image: YOUR-IMAGE-HERE
        imagePullPolicy: Always
        name: relaychain-alice
        command: ["/polkadot/polkadot"]
        args: ["--chain", "/polkadot/config.json", ..."]
        ports:
        - containerPort: 9944
        - containerPort: 30333
```

In this manifest, we choose the name of our node, the ports to expose, the command and its argument (please check Hydration docs) as well as the number of replicas. This parameter is important as we only want one replica per node, to avoid sync issues. Note that you can have as many nodes as necessary.

#### Service Example
We use the Service object in Kubernetes for at least two purposes here:
1. First, so nodes can communicate with each other, please check [this link for more info](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/)
2. To be able to expose the service to the outside world, if necessary, using an ingress controller.

Nothing fancy, just yet another basic service:

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: YOUR_NAMESPACE
  name: SVC_NAME
spec:
  ports:
    - port: 9944
      name: websocket
      targetPort: 9944
      protocol: TCP
    - port: 30333
      name: custom-port
      targetPort: 30333
      protocol: TCP
  type: NodePort
  selector:
    app.kubernetes.io/name: relaychain-alice
```

Please note that, if you wish to expose the service to the outside world, the `selector` parameter becomes crucial.

And voilà ! That's it. Now one last step is when we want to expose a Service (related to a given Deployment) to the outside world. For this, we use what we call an Ingress Object:

#### Ingress Example:

```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  namespace: YOUR_NAMESPACE
  name: INGRESS_OBJECT_NAME
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/group.name: wstgroup2
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=4000
    alb.ingress.kubernetes.io/auth-session-timeout: '86400'
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP":443}, {"HTTPS":443}]'
    alb.ingress.kubernetes.io/healthcheck-path: /
    alb.ingress.kubernetes.io/healthcheck-port: '80'
    alb.ingress.kubernetes.io/target-group-attributes: stickiness.enabled=true,stickiness.lb_cookie.duration_seconds=600
    alb.ingress.kubernetes.io/certificate-arn: YOUR_ARN
  labels:
    app: relaychain
spec:
  rules:
    - host: relaychain.hydration.cloud
      http:
        paths:
          - path: /ws/
            backend:
              serviceName: relaychain-bob-svc
              servicePort: 80

```

This object, namely `Ingress`, is used so our service can be accessible from the outside world using the host address `relaychain.hydration.cloud`. For this, we use the ALB Controller Service of AWS [More information here](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html)

Parameters of this Ingress are pretty much basic, and can be kept as is [for more info, please check this link](https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/guide/ingress/annotations/). The most important value to change, is the one of `alb.ingress.kubernetes.io/certificate-arn`, which is the identifier of the ACM Certificate you get when you create an entry in [ACM](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html) for your `host`. More details later on in this article.

### Deployment of our Parachain

Since the steps are pretty much the same, here are simply samples for each object we used to deploy our Parachain:

#### Deployment Example (collator):
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: YOUR_NAMESPACE
  name: parachain-coll-01-deployment
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: parachain-coll-01
  replicas: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: parachain-coll-01
    spec:
      containers:
      - image: YOUR_IMAGE
        imagePullPolicy: Always
        name: parachain-coll-01
        volumeMounts:
          - mountPath: /tmp
            name: persistent-storage
        command: ["/basilisk/basilisk"]
        args: ["--chain", "local", "--parachain-id", "", "--alice", "--base-path", "/basilisk/", "--node-key", "", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--", "--chain", "/tmp/rococo-local-raw.json", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--base-path", "/basilisk/", "--execution=wasm"]
        ports:
        - containerPort: 9944
        - containerPort: 9933
        - containerPort: 30333
      volumes:
        - name: persistent-storage
          persistentVolumeClaim:
            claimName: efs-pv  
```
#### Service Example:

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: NAMESPACE
  name: coll-01-svc
spec:
  ports:
    - port: 9944
      name: websocket
      targetPort: 9944
      protocol: TCP
    - port: 30333
      name: custom-port
      targetPort: 30333
      protocol: TCP
    - port: 9933
      name: rpc-port
      targetPort: 9933  
  type: NodePort
  selector:
    app.kubernetes.io/name: parachain-coll-01
```

#### Public RPC Service:
```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: NAMESPACE
  name: public-rpc-svc
spec:
  ports:
    - port: 80
      name: websocket
      targetPort: 9944
      protocol: TCP
  type: NodePort    
  selector:
    app.kubernetes.io/name: public-rpc
```
#### Ingress:
Ingress Manifest remains exactly the same.
### What are the challenges we faced?
Apart from the choice that we had to make between EC2 and Fargate instances, we had an issue that wasn't that easy to be dealt with: namely, the **volumes**. During our deployment, we found out that we had to pass a configuration to our Basilisk Command, which could not be stored in a `config-map`, since the configuration was more than 4MB in size, whereas config-maps can only store up to 1MB. Now the problem is that, this is something pretty straight forward to do in Kubernetes (create a Volume, put a file or folder inside and use it from other pods) with EC2, the task isn't so simple with Fargate. In Fargate, Volumes were not supported until August 2020, and the feature is still not mature. So if you have to heavily use volumes in your Kubernetes Deployment, please take this into account. We could however solve this issue following this [documentation, with AWS EFS](https://aws.amazon.com/blogs/aws/new-aws-fargate-for-amazon-eks-now-supports-amazon-efs/). This link will save your ass if you have to use volumes with Fargate, trust me.


## ACM and Route53
If you need to expose your node to the outside world, with a nice and secured URL, you can use AWS ACM. Basically, all you need to do is to create a certificate with the name of your URL, validate it (via DNS), and get the result ARN. Then add it as a value of the `alb.ingress.kubernetes.io/certificate-arn` parameter in your Ingress Manifest file, and voilà !

## Terraform for Automated Deployment
Of course, the creation of your certificate can be done through Terraform, if you want to automate it in your CI (we didn't make this choice, but we will probably deploy it later). However, this .tf file might be of a great help to you:
```
provider "aws" {
  region = "eu-west-1"
}

# DNS Zone Name: hydraction.cloud
variable "dns_zone" {
  description = "Specific to your setup, pick a domain you have in route53"
  default = "hydration.cloud"
}
# subdomain name
variable "domain_dns_name" {
  description = "domainname"
  default     = "YOUR_SUBDOMAIN"
}


# On crée une datasource à partir du nom de la zone DNS
data "aws_route53_zone" "public" {
  name         = "${var.dns_zone}"
  private_zone = false
}
resource "aws_acm_certificate" "myapp-cert" {
  domain_name       = "${var.domain_dns_name}.${data.aws_route53_zone.public.name}"
  #subject_alternative_names = ["${var.alternate_dns_name}.${data.aws_route53_zone.public.name}"]
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.myapp-cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }
  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.public.id
}
# This tells terraform to cause the route53 validation to happen
resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.myapp-cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

output "acm-arn" {
  value = aws_acm_certificate.myapp-cert.arn
}

```

The output value of this TF is the ARN to be used in your `Ingress` Manifest file.
## Github Actions to wrap it all

Of course, you can just write your manifest files, and deploy your Kubernetes Objects using `kubectl apply`, but you might as well want to do it through a CI-CD. We use Github Actions, and it's pretty straightforward:

```yaml
name: deploy app to k8s and expose
on:
  push: 
    branches:
      - main

jobs:
  deploy-prod:
    name: deploy
    runs-on: ubuntu-latest
    env:
      ACTIONS_ALLOW_UNSECURE_COMMANDS: true
      AWS_ACCESS_KEY_ID: ${{ secrets.K8S_AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.K8S_AWS_SECRET_KEY_ID }}
      AWS_REGION: ${{ secrets.AWS_REGION }}
      NAMESPACE: validators_namespace
      APPNAME1: validator1
      APPNAME2: validator2
      DOMAIN: hydration.cloud
      SUBDOMAIN: validator1
      IMAGENAME: YOUR_IMAGE
      CERTIFICATE_ARN: _CERTIFICATEARN_
    
    steps:
      - name: checkout code
        uses: actions/checkout@v2.1.0
      
      - name: run-everything
        run: |
          curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
          chmod +x ./kubectl
          sudo mv ./kubectl /usr/local/bin/kubectl
          export AWS_ACCESS_KEY_ID=${{ env.AWS_ACCESS_KEY_ID }}
          export AWS_SECRET_ACCESS_KEY=${{ env.AWS_SECRET_ACCESS_KEY }}
          curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
          sudo mv /tmp/eksctl /usr/local/bin
          eksctl version
          aws eks --region eu-west-1 update-kubeconfig --name CLUSTER_NAME
          kubectl delete all --all -n ${{ env.NAMESPACE }}
          eksctl create fargateprofile --cluster CLUSTER_NAME --region ${{ env.AWS_REGION }} --name ${{ env.NAMESPACE }} --namespace ${{ env.NAMESPACE }}
          sed -i 's/_NAMESPACE_/${{ env.NAMESPACE }}/g' components.yaml
          kubectl apply -f components.yaml
```
This workflow basically creates the fargate profile as well as depoys your manifest file containing all your Kubernetes Objects to your chosen Cluster. Of course, make sure you give the right access and secret keys :).

Good luck!
