install: install-deps
	npm link

install-deps:
	npm ci

gendiff:
	node bin/gendiff.js

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish --dry-run