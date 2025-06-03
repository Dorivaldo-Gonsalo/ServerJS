create database sgr;
use sgr;

-- Tabela usuários
create table usuarios(
id int primary key auto_increment,
nome varchar(100) not null,
email varchar(50) not null unique,
password varchar(12) not null,
imagem varchar(255)not null,
create_at datetime default current_timestamp
);

-- Tabela master
create table master(
id int primary key auto_increment,
nome varchar(100) not null,
email varchar(50) not null unique,
password varchar(12) not null,
create_at datetime default current_timestamp
);

-- Tabela residências
create table residencias(
id int primary key auto_increment,
nome varchar(100) not null unique,
endereco varchar(100) not null,
tipo enum('casa', 'apartamento', 'quarto') not null,
valor decimal(10, 3) not null,
status enum('disponivel', 'ocupado', 'brevemente') default 'disponivel',
imagem varchar(255)not null,
create_at datetime default current_timestamp
);

-- Tabela contratos
create table contratos(
id int primary key auto_increment,
usuario_id int not null,
residencia_id int not null,
pagamento decimal(10, 3) not null,
periodo varchar(50) not null,
validade enum('válido', 'expirado', 'em espera') default 'válido',
create_at datetime default current_timestamp,
foreign key(usuario_id) references usuarios(id) on delete cascade,
foreign key(residencia_id)references residencias(id) on delete cascade
);


-- insert usuarios
INSERT INTO `usuarios`( `nome`, `email`, `password`,`imagem`, `create_at`) VALUES 
('Carlos Almeida','carlos@gmail.com','carlos1234','imagem.png',current_timestamp()),
('Jonas Silva','jonas@gmail.com','jonas1234','imagem.jpeg',current_timestamp());

-- insert master
INSERT INTO `master`( `nome`, `email`, `password`, `create_at`) VALUES
 ('Dorivaldo Admin','geral@gmail.com','12345678', current_timestamp());

-- insert residencia
INSERT INTO `residencias` (`nome`, `endereco`, `tipo`, `valor`, `status`,`imagem`, `create_at`) VALUES 
( 'WSL-Home', 'Luanda, Angola', 'casa', '50.000', 'disponivel','download.png', current_timestamp()),
('Nova Luar', 'Talatona Shopping', 'apartamento', '110.000', 'disponivel','down.png' , current_timestamp());

-- insert contratos
INSERT INTO `contratos` ( `usuario_id`, `residencia_id`, `pagamento`, `periodo`, `validade`, `create_at`) VALUES
 ( '2', '1', '150.000', '3 meses', 'válido', current_timestamp()),
 ('1', '2', '220.000', '2 meses', 'em espera', current_timestamp());
 
-- Select para pegar os usuarios e as residencias que estão associadas a eles
-- Select contratos
SELECT c.id AS contrato_id,
       u.nome AS nome_usuario,
       u.imagem as imagem_usuario,
       r.nome AS nome_residencia,
       r.imagem as imagem_residencia,
       c.pagamento,
       c.periodo,
       c.validade AS status_contrato,
       r.status AS status_residencia
FROM contratos c
JOIN usuarios u ON c.usuario_id = u.id
JOIN residencias r ON c.residencia_id = r.id; -- where c.id = 'nº do id' para pegar apenas o contrato com id desejasdo

-- Select maluco OBS.: proibido fazer alteração, está em fase de análise e construção  OBS: Qualquer alteração pode ser fatal para todo o codigo 
-- NOTA: s+o funciona em simultanio entre todas as tabelas
select 
 t.id as id_usuario,
 t.nome as nome_usuario,
 t.email as email_usuario,
 t.imagem as imagem_usuario,
 t.create_at as data_registro_usuario,
 r.id as id_residencia,
 r.nome as nome_residencia,
 r.endereco as localizacao,
 r.tipo as tipo,
 r.valor as preco,
 r.status as status,
 r.imagem as imagem_residencia,
 r.create_at as data_registro_residencia,
 c.id AS contrato_id,
 u.nome AS nome_usuario,
 u.imagem as imagem_usuario,
 r.nome AS nome_residencia,
 r.imagem as imagem_residencia,
 c.pagamento,
 c.periodo,
 c.validade AS status_contrato,
 r.status AS status_residencia
FROM usuarios t, contratos c
JOIN usuarios u ON c.usuario_id = u.id
JOIN residencias r ON c.residencia_id = r.id order by t.id, r.id, c.id asc;
 
-- Retalho do select maluco
 
 -- Select Usuarios
 select 
 t.id as id_usuario,
 t.nome as nome_usuario,
 t.email as email_usuario,
 t.imagem as imagem_usuario,
 t.create_at as data_registro_usuario
 from usuarios t;
 
 -- Select Residencias
 select 
 r.id as id_residencia,
 r.nome as nome_residencia,
 r.endereco as localizacao,
 r.tipo as tipo,
 r.valor as preco,
 r.status as status,
 r.imagem as imagem_residencia,
 r.create_at as data_registro_residencia
 from residencias r;
 
 
 
 
 
 

-- Pegando apenas os usuarios
SELECT id, nome, email, imagem, create_at as data_cadastro FROM usuarios;

select count(*) as total from usuarios;

select * from residencias where nome like 'Home' or tipo like 'casa' or status like 'disponivel';

