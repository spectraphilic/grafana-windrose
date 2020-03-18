# Disclaimer

This plugin has been tested with Grafana 6.4 but there's still work to do
before submitting to Grafana. New versions may require changes to the query or
configuration.

# Usage

Install:

```sh
$ sudo su -
# cd /var/lib/grafana/plugins
# git clone https://github.com/spectraphilic/grafana-windrose.git
```

Restart Grafana service.

Example query:

```sql
SELECT
  time,
  field1 AS speed,
  field2 AS direction
FROM
  table
WHERE
  $__unixEpochFilter("time")
ORDER BY time
```

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
