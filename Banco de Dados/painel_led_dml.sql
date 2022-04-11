USE PainelSenai;
GO

INSERT INTO TipoUsuario(nomeTipoUsuario)
VALUES ('Administrador'),('Comum'),('Televisao');
GO

INSERT INTO Usuario(idTipoUsuario,nomeUsuario,email,senha)
VALUES  ('1','Jucelino','jucelino@teste.com','12345678'),
       ('2','Marketing','mkt1@teste.com','87654321'),
	   ('3','Televisor','televisao@teste.com','12345678');
GO

INSERT INTO CadastrarCampanha(idUsuario,nomeCampanha,dataInicio,dataFim,arquivo)
VALUES ('1','Abertura do curso','05/02/2023','19/05/2023','/img/teste1.png'),
       ('2','Outubro rosa','02/10/2023','30/10/2023','/img/teste2.png');
GO

select * from TipoUsuario;
select * from Usuario;
select * from CadastrarCampanha;

drop table Usuario