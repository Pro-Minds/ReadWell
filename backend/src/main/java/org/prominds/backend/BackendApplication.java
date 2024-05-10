package org.prominds.backend;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

@SpringBootApplication
public class BackendApplication {
	private static final Logger logger = LoggerFactory.getLogger(BackendApplication.class);

	public static void main(String[] args) {
		createDatabaseIfNotExists("quizDb", "prominds", "passcode");
		SpringApplication.run(BackendApplication.class, args);
	}

	private static void createDatabaseIfNotExists(String databaseName, String username, String password) {
		try (Connection connection = DriverManager.getConnection("jdbc:postgresql://database:5432/postgres", username, password);
			 Statement statement = connection.createStatement()) {
			if (!databaseExists(databaseName, connection)) {
				statement.execute("CREATE DATABASE \"" + databaseName + "\"");
				logger.info("Database '{}' created.", databaseName);
			} else {
				logger.info("Database '{}' already exists.", databaseName);
			}
		} catch (SQLException e) {
			logger.error("Error creating database '{}': {}", databaseName, e.getMessage());
		}
	}

	private static boolean databaseExists(String databaseName, Connection connection) throws SQLException {
		try (Statement statement = connection.createStatement();
			 ResultSet resultSet = statement.executeQuery("SELECT 1 FROM pg_database WHERE datname = '" + databaseName + "'")) {
			return resultSet.next();
		}
	}

	@GetMapping("/api/admins")
	public ResponseEntity<String> redirectToDashboard(){
		return ResponseEntity.status(HttpStatus.FOUND)
				.header(HttpHeaders.LOCATION, "/admins")
				.build();
	}
}
