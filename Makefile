gitinstall: install-deps
	npm link

install-deps:
	npm ci

gendiff:
	node bin/gendiff.js

test:
	npm test

lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8

publish:
	npm publish --dry-run