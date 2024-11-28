create database sistemas; /*Feito por Gustavo Bontempo*/

use sistema;

create table clientes (
    
	id           int auto_increment primary key,
	nomoCliente  varchar(50),
	Nascimento   date,
	Sexo         char(1),
	EstadoCivil  char(1),
	Email        varchar(50),
	DDD1         char(2),
	Telefone1    varchar(10),
	Tipo1        char(2),
	DDD2         char(2),
	Telefone2    varchar(10),
	Tipo2        char(2),
	DDD3         char(2),
	Telefone3    varchar(10),
	Tipo3        char(2),
	OBS          text
);

describe clientes;

