run:
	@echo 'Starting server ...'
	@npm run dev
build: 
	@npm run build
lint:
	@echo 'Formatting source code ...'
	@npx prettier --write --list-different ./pages/* ./assets/styled/* ./components/*
dev: lint run

