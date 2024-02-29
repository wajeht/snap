commit:
	npm run test
	npm run format
	npm run lint
	git add -A
	./commit.sh
	git push --no-verify

up:
	docker compose up

up-d:
	docker compose up -d

log:
	docker compose logs -f

down:
	docker compose down

build-ui:
	docker compose exec snap npm run build:ui

clean:
	docker compose down --rmi all

wipe:
	docker system prune -a --volumes

test:
	docker compose exec snap npm run test

lint:
	docker compose exec snap npm run lint

format:
	docker compose exec snap npm run format
