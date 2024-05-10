#!/bin/bash

# Check if the database 'quizDb' exists
if psql -U postgres -t -c "SELECT 1 FROM pg_database WHERE datname = 'quizDb'" &> /dev/null; then
  echo "Database 'quizDb' already exists."
else
  echo "Creating database 'quizDb'..."
  psql -U postgres -c "CREATE DATABASE quizDb;"
  psql -U postgres -c "CREATE USER prominds WITH PASSWORD 'passcode';"
  psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE quizDb TO prominds;"
fi

# Replace the command below with your actual application startup command
exec "$@"
