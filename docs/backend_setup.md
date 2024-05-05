### Backend Implementation

This section provides a high-level overview of the backend implementation using Spring Boot. You'll need to fill in the specific details based on your database and authentication choices.
1. Project Setup
    - Create s Spring Boot project using Initializr or preferred IDE.
    - Include necessary dependencies for database access, security, and data validation.
2. Entity Models:
    - Define entity classes for `Class`, `Subject`, `Topic`, `Question`, `Answer` with appropriate relationships.
3. Controllers:
    - Create REST controllers to handle API requests from the frontend.
    - Implement methods for creating, retrieving.
4. Connecting the backend to the database.
    - Setup the docker compose file
    - use `docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' quiz-db`
    - to get the IP of the postgres container to bypass DNS resolution setup be Docker within the docker network.
    - This will establish a direct connection to the PostgreSQL container with the use of any dependencies.
    - Note `quiz-db` is the name of the postgresql container.
5. 
   
## Run the application
```dockerfile
docker compose up -d
```
