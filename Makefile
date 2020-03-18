.PHONY: h b w

ROLLUP=./node_modules/.bin/rollup

build: ## build the source files, output to dist folder
	$(ROLLUP) --config

watch: ## run watch server, for automatic build on source changes
	while true; do find src/ | entr -d make; done

help: ## show this help
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'
