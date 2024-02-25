commit:
	npm run lint
	npm run format
	npm run test
	git add -A
	aicommits --type conventional
	git push --no-verify
