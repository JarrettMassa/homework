DROP DATABASE IF EXISTS connect_db;
CREATE DATABASE connect_db;
USE connect_db;


CREATE TABLE musician
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	first_name varchar(255),
	last_name varchar(255),
	bio varchar(255),
	PRIMARY KEY (id)
);


CREATE TABLE studio
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	name varchar(255),
	address_1 varchar(255),
	address_2 varchar(255),
	city varchar(255),
	state varchar(2),
	zip int,
	photo_url varchar(255),
	description varchar(255),
	equipment varchar(255),
	price decimal(5,2),
	PRIMARY KEY (id)
);


CREATE TABLE schedule
(
	id int NOT NULL AUTO_INCREMENT,
	studio_id int NOT NULL,
	last_name varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	appt_date date NOT NULL,
	appt_time varchar(255) NOT NULL,
	PRIMARY KEY (id)
);


CREATE TABLE login
(
	id int NOT NULL AUTO_INCREMENT,
	email varchar(255) NOT NULL,
	password varchar(255) NOT NULL,
	type varchar(255) NOT NULL,
	PRIMARY KEY (id)
);
