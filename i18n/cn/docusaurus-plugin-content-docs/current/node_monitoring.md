---
id: node_monitoring
title: 节点监控
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 

在本节中，我们将引导您完成整理节点的本地监控。

## 前提条件 {#prerequisites}

<<<<<<< Updated upstream
您必须启动并运行 **[验证节点](/node_setup)** 。
=======
您必须启动并运行 **[整理节点](/collator_setup)** 。
>>>>>>> Stashed changes

本指南已在 Ubuntu 20.04 LTS 系统，进行了测试。  


## Prometheus 设置 {#prometheus-setup}

在第一步中，我们将设置 Prometheus 服务器。

### 用户和目录 {#user-and-directories}

我们创建一个仅用于监控的用户，该用户没有根目录，无法用于登录：

```shell script
$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus
```

然后，我们为可执行文件和配置文件创建目录：

```shell script
$ sudo mkdir /etc/prometheus
$ sudo mkdir /var/lib/prometheus
```

更改目录的所有权，以将其限制为我们的新监控用户：

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus
$ sudo chown -R prometheus:prometheus /var/lib/prometheus
```

### 安装 Prometheus {#install-prometheus}

在 **[GitHub 发布页面](https://github.com/prometheus/prometheus/releases/)** 上检查 Prometheus 的最新版本。 
在撰写本文时，版本是 v2.25.2。 
在以下命令中插入最新发行的版本：

```shell script
# download prometheus
$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz

# unpack the binaries
$ tar xfz prometheus-*.tar.gz

# enter the unpacked directory
$ cd prometheus-2.25.2.linux-amd64
```

现在，将编译文件复制到本地文件夹中：

```shell script
$ sudo cp ./prometheus /usr/local/bin/
$ sudo cp ./promtool /usr/local/bin/
```

现在，我们需要将这些编译文件分配给我们新创建的用户：

```shell script
$ sudo chown prometheus:prometheus /usr/local/bin/prometheus
$ sudo chown prometheus:prometheus /usr/local/bin/promtool
```

接下来，我们将复制 Web 界面和配置预设：

```shell script
$ sudo cp -r ./consoles /etc/prometheus
$ sudo cp -r ./console_libraries /etc/prometheus
```

您可能已经猜到了，我们也要更改这些目录的所有权：

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles
$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries
```

现在，我们已从下载的软件包中获取了所需的一切，因此我们将退后一步并进行一些清理：

```shell script
$ cd .. && rm -rf prometheus*
```

让我们使用您选择的编辑器（nano / vim / pico）为 Prometheus 创建一个 `YAML` 配置文件：

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

我们的配置分为三个部分：

* `global`: 设置 `scrape_interval` 默认值及带有 `evaluation_interval` 的规则执行间隔 
* `rule_files`: 指定 Prometheus 服务器应加载的规则文件
* `scrape_configs`: 在这里设置监视资源

我们将其设置得非常简单，并以这样的方式结束：

```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:
  # - "weHaveNo.rules"

scrape_configs:
  - job_name: "prometheus"
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:9090"]
  - job_name: "substrate_node"
    scrape_interval: 5s
    static_configs:
      - targets: ["localhost:9615"]
```

第一个抓取作业导出 Prometheus 本身的数据，第二个抓取作业导出 HydraDX 节点指标。 我们调整了两个作业的 `scrape_interval` 以获得更详细的统计信息。 这将覆盖全局值。 `static_configs` 中的 `target` 设置导出程序运行的位置，这里我们使用默认端口。

保存配置后，我们将再次更改所有权：

```shell script
$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml
```

### 启动 Prometheus {#starting-prometheus}

为了使 Prometheus 自动启动并在后台运行，我们将使用 `systemd` 。创建一个新的配置（同样使用您选择的编辑器）：

````shell script
$ sudo nano /etc/systemd/system/prometheus.service
````

粘贴以下配置并保存文件：

```
[Unit]
  Description=Prometheus Monitoring
  Wants=network-online.target
  After=network-online.target

[Service]
  User=prometheus
  Group=prometheus
  Type=simple
  ExecStart=/usr/local/bin/prometheus \
  --config.file /etc/prometheus/prometheus.yml \
  --storage.tsdb.path /var/lib/prometheus/ \
  --web.console.templates=/etc/prometheus/consoles \
  --web.console.libraries=/etc/prometheus/console_libraries
  ExecReload=/bin/kill -HUP $MAINPID

[Install]
  WantedBy=multi-user.target
```

接下来，我们将执行以下三个步骤：`systemctl deamon-reload` 加载新配置并更新现有配置 `systemctl enable` 激活我们的新服务 `systemctl start` 触发服务执行

您可以通过执行以下命令，完成以上步骤：

```shell script
$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus
```

现在，您应该可以在 http：// localhost：9090 / 上访问 Prometheus 的 Web 界面。

## Node Exporter（节点导出器） {#node-exporter}

我们将安装 Node Exporter（节点导出器），来抓取将在仪表盘中使用的服务器指标。 
请在 **[此处](https://github.com/prometheus/node_exporter/releases/)** 检查最新版本的版本号并更新命令。 
在撰写本文时，最新版本为 `1.1.2` 。

### 安装 Node Exporter {#install-node-exporter}

下载最新版本：

```shell script
$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz
```

解压缩刚刚下载的软件包。这将创建一个名为 `node_exporter-1.1.2.linux-amd64` 的文件夹：

```shell script
$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz
```

接下来，我们将编译文件复制到本地应用程序目录中，并将其分配给我们的监视用户：

```shell script
# copy binary
$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin

# set ownership
$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter
```

现在，我们可以进行一些清理，并删除下载并解压软件包：

```shell script
$ rm -rf node_exporter*
```

### 创建系统服务 {#create-a-systemd-service}

与 prometheus 相似，我们希望 Node Exporter 也能作为服务运行。
使用您选择的编辑器创建系统服务：

```shell script
$ sudo nano /etc/systemd/system/node_exporter.service
```

并将以下配置粘贴进去：

```
[Unit]
Description=Node Exporter
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target
```

现在，我们将单线激活并启动该服务：

```shell script
$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter
```

### 为 Node Exporter 添加抓取作业 {#add-scrape-job-for-node-exporter}

Node Exporter 现在已启动并正在运行，但是我们需要授予 Prometheus 权限。 
我们将使用所选的编辑器再次打开配置文件：

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

并且在文件的最底部，我们将追加一个 scrape config。 
粘贴以下内容并保存文件：

```yaml
  - job_name: 'node_exporter'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9100']
```

应用更改配置，需要重新启动 Prometheus 服务：

```shell script
$ sudo systemctl restart prometheus.service 
```

现在，您的服务器指标已被抓取，可以在 Prometheus Web 界面中找到。 
我们稍后将需要它们用于仪表盘。

## Grafana 设置 {#grafana-setup}

我们可以在 Web 界面中查看指标，但这不是我们想要的监视方式。 
我们希望它好看又简洁， Grafana 能帮我们做到这些。

### 安装 Grafana {#install-grafana}

请通过 **[此链接](https://grafana.com/grafana/download?platform=linux)** 检查最新的 Grafana 版本。 
您可以在以下命令中更改版本号，也可以直接从链接复制安装命令。
在撰写本文时，最新版本为 `7.5.1` 。

```shell script
$ sudo apt-get install -y adduser libfontconfig1
$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb
$ sudo dpkg -i grafana_7.5.1_amd64.deb
```

该软件包带有内置的 `systemd`-service ，我们将像 Prometheus 服务一样配置和启动：

```shell script
$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server
```

### 访问 Web 界面 {#accessing-the-web-interface}

我们将能够在 http://localhost:3000/ 上打开 Grafana Web 界面。 
默认登录 Grafana 为：  
User: `admin`  
Password: `admin`  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-home.png')} />
</div>

### 配置数据源 {#configuring-the-datasource}

请点击菜单中的设置（齿轮按钮），然后选择数据源。  
在下一个窗口中，单击 "Add Datasource" ，然后选择 "Prometheus" 。  

在下表中，您无需更改 URL。 
设置 `http://localhost:9090/`，然后单击 `Save and Test`。

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-datasource.png')} />
</div>

### 导入仪表盘 {#importing-the-dashboard}

请单击主导航中的 `Plus` 按钮，然后选择 `import`： 

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import.png')} />
</div>  

我们将使用 **[HydraDX Dashboard（仪表盘）](https://grafana.com/grafana/dashboards/14158)** 进行加载，您只需输入id `14158` 并点击 `Load` 按钮即可加载它：

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import-options.png')} />
</div>  

您在这里不需要太多配置，只需确保将 Prometheus 用作数据源即可。 
您现在可以完成导入：  

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-dashboard.png')} />
</div>  

现在，您应该立即看到仪表盘。  
如果某些面板是空的，请确保您在面板上方的选择是这样的：    
* `Chain Metrics`: Substrate  
* `Chain Instance`: localhost:9615  
* `Server Job`: node_exporter  
* `Server Host`: localhost:9100  
