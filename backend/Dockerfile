FROM maven:3.8.3-openjdk-17 AS builder

WORKDIR /app

COPY pom.xml ./
COPY /src ./src

RUN mvn clean install

FROM openjdk:17-slim

WORKDIR /app
RUN apt-get update && apt-get install -y curl

COPY --from=builder /app/target/*.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]