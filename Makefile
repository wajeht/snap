commit:
	git add -A
	aicommits --type conventional
	git push --no-verify
	./deploy.sh
