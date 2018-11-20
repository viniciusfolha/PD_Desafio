CREATE USER 'novousuario'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON * . * TO 'novousuario'@'localhost';
FLUSH PRIVILEGES;

DROP database IF EXISTS catalogo;

CREATE DATABASE IF NOT EXISTS catalogo;
USE catalogo;

CREATE TABLE IF NOT EXISTS Colecoes ( 
	ID smallint unsigned not null auto_increment,
	Name varchar(50) not null,
	CONSTRAINT PK_Colecoes PRIMARY KEY (id)
)ENGINE=InnoDB;

INSERT INTO Colecoes ( ID, Name ) VALUES ( null, 'Rock' ), ( null, 'Reggae');

CREATE TABLE IF NOT EXISTS Discos ( 
	ID smallint unsigned not null auto_increment,
	ColecaoID smallint unsigned,
	Name varchar(50) not null, 
	Author varchar(50) not null,
	Published DATE not null,
	Description text not null,
	CONSTRAINT PK_Discos PRIMARY KEY (ID),
	CONSTRAINT FK_DiscoColecao FOREIGN KEY (ColecaoID) 
		REFERENCES Colecoes(ID) 
		ON DELETE CASCADE
		ON UPDATE CASCADE 
	)ENGINE=InnoDB;

INSERT INTO Discos ( ID, ColecaoID, Name, Author, Published, Description) 
	VALUES ( null, 
		(Select ID from Colecoes WHERE Name='Rock'),
		'Californication',
		'Red Hot Chili Peppers',
		 STR_TO_DATE( "06/08/2014", "%m/%d/%Y" ), 
		 'Californication é o sétimo álbum de estúdio da banda norte-americana de rock Red Hot Chili Peppers.');

INSERT INTO Discos ( ID,ColecaoID, Name, Author, Published, Description) 
	VALUES ( null, 
		(Select ID from Colecoes WHERE Name='Rock'),
		'By the Way',
		'Red Hot Chili Peppers',
		 STR_TO_DATE( "07/09/2002", "%m/%d/%Y" ), 
		 'By the Way é o oitavo álbum de estúdio da banda Red Hot Chili Peppers. Foi lançado em 9 de julho de 2002 pela Warner Bros Records.');

INSERT INTO Discos ( ID,ColecaoID, Name, Author, Published, Description) 
	VALUES ( null,
		(Select ID from Colecoes WHERE Name='Rock'), 
		'Americana',
		'The Offspring',
		 STR_TO_DATE( "11/17/1998", "%m/%d/%Y" ),
		 'Americana é um álbum de estúdio da banda estadunidense The Offspring, lançado dia 17 de novembro de 1998 pela gravadora Columbia Records, mesmo dia em que foi lançado o EP A Piece of Americana. ');

INSERT INTO Discos ( ID,ColecaoID, Name, Author, Published, Description) 
	VALUES ( null, 
		(Select ID from Colecoes WHERE Name='Reggae'),
		'Catch a Fire',
		'The Wailers',
		 STR_TO_DATE( "04/13/1973", "%m/%d/%Y" ),
		 'Catch a Fire é o quinto álbum de estúdio da banda de reggae jamaicana The Wailers, e o primeiro lançado internacionalmente pela Island Records.');

INSERT INTO Discos ( ID,ColecaoID, Name, Author, Published, Description) 
	VALUES ( null, 
		(Select ID from Colecoes WHERE Name='Reggae'),
		'Peace in a Time of War',
		'Soldiers of Jah Army',
		 STR_TO_DATE( "06/05/2002", "%m/%d/%Y" ),
		 'Peace in a Time of War é o álbum de estreia da banda Soldiers of Jah Army, lançado em 2002.');
