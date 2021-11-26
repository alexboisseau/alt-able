start:
	npm run docker:db
	npm run start:dev

install.local:
	npm install

db.reset:
	docker stop alttable-postgres
	docker rm alttable-postgres
	docker volume rm alt-table-db