- docker command to run MongoDB from Docker:
    NOTE: first run Docker Desktop
    docker run -p 27017:27017 --name badbank -d mongo
    - to stop running it (needed before deleting the docker container connection), click the "stop" icon (square) in the relevant line in docker desktop
    - then to delete it run "docker rm /badbank"
        - this can helpe with db connection issues

- index.js file is the server, dal.js is the data abstraction layer file (used to kinda modularize communications between data stores, with their specific formatting, and the server we're building)

