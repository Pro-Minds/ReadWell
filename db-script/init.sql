-- Check if the database 'quizDb' exists
SELECT 1 AS exists FROM pg_database WHERE datname = 'quizDb';

-- If the database doesn't exist, create it
IF (SELECT count(*) FROM pg_database WHERE datname = 'quizDb') = 0 THEN
CREATE DATABASE quizDb;
  GRANT ALL PRIVILEGES ON DATABASE quizDb TO prominds;
  ALTER USER prominds WITH PASSWORD 'passcode';
END IF;