# first stage: Build react module
FROM node:latest AS react-builder

WORKDIR /app
COPY frontend/package.json frontend/package-lock.json ./
RUN npm install
COPY frontend/. .
RUN npm run build

# stage two: Build the maven app
FROM maven:3.8-openjdk-17 AS maven-builder

WORKDIR /app
COPY backend/pom.xml .
COPY backend/src/ /app/src/
RUN mvn package

# stage 3: creating a postgres database.
FROM postgres:latest AS postgres-builder

# set env variable for the db
ENV POSTGRES_DB=quiz-db
ENV POSTGRES_USER=prominds
ENV POSTGRES_PASSWORD=passcode

# stage 4: creating production image
FROM nginx:latest

# copy the react app from the react-builder stage
COPY --from=react-builder /app/build /usr/share/nginx/html

# copy the java app from the maven-builder stage
COPY --from=maven-builder ./backend/target/backend-0.0.1-SNAPSHOT.jar /app.jar

EXPOSE 8080
CMD ["java", "-jar", "app.jar"]