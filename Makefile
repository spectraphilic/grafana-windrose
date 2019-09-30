.PHONY: h b w

ROLLUP=./node_modules/.bin/rollup

h: ## show this help
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | sed -e 's/\\$$//' | sed -e 's/##//'

b: ## build the source files, output to dist folder
	$(ROLLUP) --config

w: ## run watch server, for automatic build on source changes
	$(ROLLUP) --config -w
