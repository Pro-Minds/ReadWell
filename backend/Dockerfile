FROM maven:3.8.3-openjdk-17 AS builder

WORKDIR /app

COPY ./backend/pom.xml ./
COPY ./backend/src ./src

RUN mvn clean install

FROM openjdk:17-slim

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]