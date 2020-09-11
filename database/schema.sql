DROP DATABASE IF EXISTS mvp;

CREATE DATABASE mvp;

USE mvp;

CREATE TABLE reviews (
  id varchar(100) NOT NULL,
  rating float DEFAULT NULL,
  review varchar(1000) DEFAULT NULL
);