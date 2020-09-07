docker-compose up

<!-- docker exec -it the-forum-backend-database psql -U postgres -->

<!-- CREATE DATABASE the_forum_dev WITH OWNER postgres; -->

docker exec -it the-forum-backend-api bash

yarn run db:migrate
yarn run db:seed
