---
id: node_monitoring
title: Мониторинг Ноды
---

import useBaseUrl from '@docusaurus/useBaseUrl'; 

В этой главе мы проведем вас через настройку локального мониторинга для вашей Ноды валидатора.

## Предпосылки {#prerequisites}

У вас должна быть запущена [Нода колатора](/collator_setup).
Это руководство было протестировано на версии Ubuntu 20.04 LTS.

## Установка Prometheus {#prometheus-setup}

На первом этапе мы настроим сервер Prometheus.

### Пользователь и Каталоги {#user-and-directories}

Мы создаем пользователя только для целей мониторинга, у которого нет домашнего каталога и который не может использоваться для входа в систему.

```shell script
$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus
```

Затем мы создаем каталоги для исполняемого файла и файла конфигурации.

```shell script
$ sudo mkdir /etc/prometheus
$ sudo mkdir /var/lib/prometheus
```

Измените владельца каталогов, чтобы разрешить доступ к ним нашему новому пользователю мониторинга.

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus
$ sudo chown -R prometheus:prometheus /var/lib/prometheus
```

### Установим Prometheus {#install-prometheus}

Проверьте номер последней версии Prometheus на [странице проекта в GitHub](https://github.com/prometheus/prometheus/releases/).
На момент написания данной стать актуальная версия v2.25.2. Вставьте ссылку с последней версией в следующие команды.
```shell script
# скачайте prometheus
$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz

# распакуйте архив с бинарными файлами
$ tar xfz prometheus-*.tar.gz

# войдите в распакованную директорию
$ cd prometheus-2.25.2.linux-amd64
```

Теперь скопируйте двоичные файлы в локальную папку.

```shell script
$ sudo cp ./prometheus /usr/local/bin/
$ sudo cp ./promtool /usr/local/bin/
```

Теперь нам нужно назначить эти двоичные файлы нашему только что созданному пользователю.

```shell script
$ sudo chown prometheus:prometheus /usr/local/bin/prometheus
$ sudo chown prometheus:prometheus /usr/local/bin/promtool
```

Далее мы скопируем веб-интерфейс и предустановки конфигурации.

```shell script
$ sudo cp -r ./consoles /etc/prometheus
$ sudo cp -r ./console_libraries /etc/prometheus
```

Возможно, вы уже догадались, но мы также меняем владельца этих каталогов.

```shell script
$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles
$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries
```

Теперь у нас есть все, что нам нужно из загруженного архива, поэтому мы вернемся на шаг назад и проведем некоторую чистку.

```shell script
$ cd .. && rm -rf prometheus*
```

Давайте создадим файл конфигурации YAML для Prometheus с помощью редактора по вашему выбору (nano / vim / pico).

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

Наш конфигурационный файл разделен на три раздела:

* `global`: устанавливает значения по умолчанию для `scrape_interval` и интервала выполнения правила с `evaluation_interval`
* `rule_files`: указывает файлы правил, которые должен загружать сервер Prometheus
* `scrape_configs`: здесь вы устанавливаете ресурсы для мониторинга

Он будет у нас очень простым и в итоге получим что-то вроде этого:

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

Первое задание по очистке экспортирует данные самого Prometheus, второе - метрики узла HydraDX. Мы скорректировали `scrape_interval` обоих заданий, чтобы получить более подробную статистику. Это переопределит глобальные значения. Параметр `targets` в `static_configs` устанавливает, на каком порту запускаются экспортеры, здесь мы придерживаемся значений по умолчанию.

После сохранения конфигурации мы снова сменим владельца.

```shell script
$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml
```

### Запуск Prometheus {#starting-prometheus}

Чтобы Prometheus запускался автоматически и работал в фоновом режиме, мы будем использовать `systemd`. Создайте новую конфигурацию (опять же с выбранным вами редактором):

````shell script
$ sudo nano /etc/systemd/system/prometheus.service
````

Вставьте следующую конфигурацию и сохраните файл.

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

Далее мы выполним следующие три шага: 
`systemctl deamon-reload` загружает новые конфигурации и обновляет существующие 
`systemctl enable` активирует нашу новую службу 
`systemctl start` запускает выполнение службы.

Вы можете выполнить описанные выше шаги одной командой, выполнив:

```shell script
$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus
```

Теперь у вас должен быть доступ к веб-интерфейсу Prometheus по адресу http://localhost:9090/.

## Node Exporter {#node-exporter}

Мы установим Node Exporter для очистки метрик сервера, которые будут использоваться в панели инструментов.
Пожалуйста, проверьте номер версии последнего выпуска [здесь](https://github.com/prometheus/node_exporter/releases/) и обновите команду.
На момент написания последней версии была `1.1.2`.

### Установка Node Exporter {#install-node-exporter}

Загрузите последнюю версию.

```shell script
$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz
```

Распакуйте только что скачанный архив. Это создаст папку с именем `node_exporter-1.1.2.linux-amd64`.

```shell script
$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz
```

Затем мы копируем двоичный файл в наш локальный каталог приложения и назначаем его нашему пользователю мониторинга.

```shell script
# copy binary
$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin

# set ownership
$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter
```

Теперь мы можем выполнить некоторую очистку и удалить загруженный и распакованный пакет.

```shell script
$ rm -rf node_exporter*
```

### Создание службы Systemd {#create-a-systemd-service}

Как и в случае с prometheus, мы хотим, чтобы Node Exporter работал в качестве службы.
Создайте службу systemd с помощью выбранного вами редактора.

```shell script
$ sudo nano /etc/systemd/system/node_exporter.service
```

И вставьте в него следующую конфигурацию.

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

Теперь мы активируем и запустим службу командой в одну строку.

```shell script
$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter
```

### Добавление задания очистки для Node Exporter {#add-scrape-job-for-node-exporter}

Теперь Node Exporter запущен и работает, но нам нужно сказать Prometheus, чтобы он очистил свои данные.
Мы снова откроем файл конфигурации с помощью выбранного редактора.

```shell script
$ sudo nano /etc/prometheus/prometheus.yml
```

А в самом низу файла мы добавим еще один конфиг для очистки.
Вставьте следующее содержимое и сохраните файл.

```yaml
  - job_name: 'node_exporter'
    scrape_interval: 5s
    static_configs:
      - targets: ['localhost:9100']
```

Для применения конфигурации изменений требуется перезапуск службы Prometheus.

```shell script
$ sudo systemctl restart prometheus.service 
```

Метрики вашего сервера теперь очищены и могут быть найдены в веб-интерфейсе Prometheus.
Они нам понадобятся позже для нашей панели.

## Установка Grafana {#grafana-setup}

Мы можем видеть наши метрики в веб-интерфейсе, но не так, как мы хотим их отслеживать.
Мы хотим, чтобы это было красиво и лаконично. Вот где в игру вступает Grafana.

### Установим Grafana {#install-grafana}

Пожалуйста, проверьте последнюю версию Grafana [по этой ссылке](https://grafana.com/grafana/download?platform=linux).
Вы можете изменить номер версии в следующих командах или скопировать команды установки прямо из ссылки.
На момент написания последней версии была `7.5.1`.

```shell script
$ sudo apt-get install -y adduser libfontconfig1
$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb
$ sudo dpkg -i grafana_7.5.1_amd64.deb
```

Пакет поставляется со встроенной службой systemd, которую мы настроим и запустим так же, как службу Prometheus.

```shell script
$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server
```

### Доступ к веб-интерфейсу Grafana {#accessing-the-web-interface}

Мы сможем открыть веб-интерфейс Grafana по адресу http://localhost:3000/.
Логин Grafana по умолчанию:
Пользователь: `admin`
Пароль: `admin`

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-home.png')} />
</div>

### Configuring the Datasource {#configuring-the-datasource}


Пожалуйста, нажмите на значок настроек в меню и выберите источники данных.
В следующем окне вы нажимаете "Add Datasource" и выбираете "Prometheus".

В следующей форме вам не нужно ничего менять, кроме URL-адреса.
Установите `http://localhost:9090/` и нажмите `Save and Test`.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-datasource.png')} />
</div>

### Настройка источника данных {#importing-the-dashboard}

Нажмите кнопку `Plus` на главной панели навигации и выберите `import`.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import.png')} />
</div>  

Мы будем использовать [панель управления HydraDX](https://grafana.com/grafana/dashboards/14158), и для ее загрузки вы просто вводите идентификатор `14158` и нажимаете кнопку `Load`.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-import-options.png')} />
</div>  

Здесь вам не нужно много настраивать, просто убедитесь, что Prometheus используется в качестве источника данных.
Теперь вы можете завершить импорт.

<div style={{textAlign: 'center'}}>
  <img src={useBaseUrl('/node-monitoring/grafana-dashboard.png')} />
</div>  

Теперь вы должны сразу увидеть свою панель управления.
Если некоторые панели пусты, убедитесь, что ваш выбор над панелями выглядит следующим образом:
* `Chain Metrics`: Substrate  
* `Chain Instance`: localhost:9615  
* `Server Job`: node_exporter  
* `Server Host`: localhost:9100  
