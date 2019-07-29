DROP DATABASE IF EXISTS cellardb;
CREATE DATABASE cellardb;

USE cellardb;
CREATE TABLE wines (
id int AUTO_INCREMENT NOT NULL,
wine_name VARCHAR (250) NOT NULL,
country VARCHAR (50) NOT NULL,
appelation VARCHAR (250) NOT NULL,
vintage int,
tasting_notes VARCHAR (250) NOT NULL,
cost int,
current_value int,
bottle_format VARCHAR (25) NOT NULL,
website_link VARCHAR (250) NOT NULL,
ws_score int,
we_score int,
varietal VARCHAR (250) NOT NULL,
varietal_breakdown VARCHAR (250) NOT NULL,
importer VARCHAR (250) NOT NULL,
vineyard VARCHAR (250) NOT NULL,
drink_hold BOOLEAN,

PRIMARY KEY (id)
);