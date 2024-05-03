# ReadWell
This app is aimed to enhence the retention of materials during studies.

## ~~ Description
This project implements a web application using `React` for the frontend and `Maven` for build 
management on the backend. It allows an administrator to create and manage a hierarchical structure of classes, subjects, topics, questions and answers.

## ~~ Features
- Role-based access control (RBAC): Limits the access to administrative features.
- Data persistence: Stores data in a database.
- Secure authentication: Usernames and password are harshed for security.

## ~~ Getting Started
1. Prerequisities:
    - Node.js and npm (or yarn) installed
    - Java Development Kit (JDK) installed
    - A database server (PostgreSQL)
2. Backend
    - Clone the project.
    - COnfigure the database connection details in `src/main/resources/applications.properties`.
    - Run `mvn clean install`
3. Frontend
    - Navigate to `frontend` directory.
    - Run `npm install` (or `yarn install`) to install dependencies.
    - Run `npm start` (or `yarn start`) to start the frontend developement server.
4. Usage
    - Access the application in your browser at `https://localhost:3000`

## ~~ Technologies
- Frontend, React, Javascript
- Backend: Spring Boot, Java
- Build Tool: Maven