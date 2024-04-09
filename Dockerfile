FROM postgres:latest AS builder

WORKDIR /app
COPY docker-entrypoint-initdb.d/* .

FROM postgres:latest

# to store db files
VOLUME /var/lib/postgresql/data

# indirect way to check for existing db
HEALTHCHECK --interval=5s CMD pg_lsclusters | grep main
# id db !exist, build it
COPY --from=builder /app/docker-entrypoing-initdb/* .

FROM maven:3.8-jdk-11 AS mvn-builder

WORKDIR /app

COPY maven/pom.xml .
COPY maven/src/* .

RUN mvn package

FROM nginx:latest AS quiz-db

COPY --from=mvn-builder /app/target/*.jar /app.jar

WORKDIR /app

COPY frontend/. .

EXPOSE 8080

# run react in the bg
CMD ["npm", "start"]

# run maven app
CMD ["java", "-jar", "app.jar"]