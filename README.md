This Grafana plugin looks like:

![Image of Windrose Grafana plugin](windrose-light.png)


# Disclaimer

This plugin has been tested with Grafana 6.4, 7.x and 8.x but there's still
work to do before submitting to Grafana. New versions may require changes to
the query or configuration.

# Usage

Install:

```sh
$ sudo su -
# cd /var/lib/grafana/plugins
# git clone https://github.com/spectraphilic/grafana-windrose.git
```

Allow loading this plugin, in ``/etc/grafana/grafana.ini``:

```
[plugins]
allow_loading_unsigned_plugins = spectraphilic-windrose-panel
```

Restart Grafana service.

## PostgreSQL

Example query for PostgreSQL:

```sql
SELECT
  time,
  field1 AS speed,
  field2 AS direction
FROM table
WHERE $__unixEpochFilter("time")
ORDER BY time
```

## ClickHouse

Example for ClickHouse:

```sql
SELECT
  $timeSeries as time,
  field1 AS speed,
  field2 AS direction
FROM table
WHERE $timeFilter
ORDER BY time
```

## Prometheus

This is valid as well for prometheus-compatible data sources such as
VictoriaMetrics.

Set a query for speed:

- Metrics browser: ``meteo_ws_mean{location="$location"}``
- Legend: ``speed``

Set another query for direction:

- Metrics browser: ``meteo_wd_mean{location="$location"}``
- Legend: ``direction``

This information was provided by @newrushbolt ; for further details see
https://github.com/spectraphilic/grafana-windrose/issues/18#issuecomment-1007648330


# Development

Install:

```sh
$ npm install
```

To run the watch server (automatic build on source changes) we use entr,
because the rollup watch server does not handle changes to html or css files.

Use make:

```sh
$ make help
build:  build the source files, output to dist folder
watch:  run watch server, for automatic build on source changes
help:  show this help
```
