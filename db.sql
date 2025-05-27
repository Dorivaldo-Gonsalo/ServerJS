create database sgr;
use sgr;

-- Criação da tabela usuarios
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    senha VARCHAR(255),
    imagem VARCHAR(255),
    role ENUM('admin', 'usuario') DEFAULT 'usuario'
);

-- Criação da tabela residencias
CREATE TABLE residencias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    endereco VARCHAR(255),
    imagem VARCHAR(255),
    status ENUM('disponivel', 'ocupado') DEFAULT 'disponivel'
);

-- Criação da tabela contratos (relacionamento N:M entre usuarios e residencias)
CREATE TABLE contratos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario_id INT,
    residencia_id INT,
    data_inicio DATE,
    data_fim DATE,
    status ENUM('valido', 'expirado') DEFAULT 'valido',
    FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
    FOREIGN KEY (residencia_id) REFERENCES residencias(id)
);

-- Inserções

-- Inserindo 20 usuários
INSERT INTO usuarios (nome, email, senha, imagem, role) VALUES
('João Silva', 'joao1@email.com', '********', 'imagem1.jpg', 'admin'),
('Maria Oliveira', 'maria2@email.com', 'senha1', 'imagem2.jpg', 'usuario'),
('Carlos Pereira', 'carlos3@email.com', 'senha2', 'imagem3.jpg', 'usuarios'),
('Ana Costa', 'ana4@email.com', 'senha3', 'imagem4.jpg', 'usuario'),
('Pedro Almeida', 'pedro5@email.com', 'senha4', 'imagem5.jpg', 'usuario'),
('Luana Santos', 'luana6@email.com', 'senha5', 'imagem6.jpg', 'usuario'),
('Ricardo Lima', 'ricardo7@email.com', 'senha6', 'imagem7.jpg', 'usuario'),
('Fernanda Souza', 'fernanda8@email.com', 'senha7', 'imagem8.jpg', 'usuario'),
('Marcos Pinto', 'marcos9@email.com', 'senha8', 'imagem9.jpg', 'usuario'),
('Sofia Ramos', 'sofia10@email.com', 'senha9', 'imagem10.jpg', 'usuario'),
('Lucas Moreira', 'lucas11@email.com', 'senha0', 'imagem11.jpg', 'usuario'),
('Camila Costa', 'camila12@email.com', 'senha10', 'imagem12.jpg', 'usuario'),
('Felipe Dias', 'felipe13@email.com', 'senha11', 'imagem13.jpg', 'usuario'),
('Beatriz Martins', 'beatriz14@email.com', 'senha12', 'imagem14.jpg', 'usuario'),
('Rafael Silva', 'rafael15@email.com', 'senha13', 'imagem15.jpg', 'usuario'),
('Daniela Freitas', 'daniela16@email.com', 'senha14', 'imagem16.jpg', 'usuario'),
('Gustavo Nunes', 'gustavo17@email.com', 'senha15', 'imagem17.jpg', 'usuario'),
('Patricia Lopes', 'patricia18@email.com', 'senha16', 'imagem18.jpg', 'usuario'),
('Bruno Almeida', 'bruno19@email.com', 'senha17', 'imagem19.jpg', 'usuario'),
('Amanda Tavares', 'amanda20@email.com', 'senha18', 'imagem20.jpg', 'usuario');

-- Inserindo 20 residencias
INSERT INTO residencias (endereco, imagem, status) VALUES
('Rua A, 123', 'residencia1.jpg', 'disponivel'),
('Rua B, 456', 'residencia2.jpg', 'ocupado'),
('Rua C, 789', 'residencia3.jpg', 'disponivel'),
('Rua D, 101', 'residencia4.jpg', 'disponivel'),
('Rua E, 202', 'residencia5.jpg', 'ocupado'),
('Rua F, 303', 'residencia6.jpg', 'disponivel'),
('Rua G, 404', 'residencia7.jpg', 'disponivel'),
('Rua H, 505', 'residencia8.jpg', 'ocupado'),
('Rua I, 606', 'residencia9.jpg', 'disponivel'),
('Rua J, 707', 'residencia10.jpg', 'disponivel'),
('Rua K, 808', 'residencia11.jpg', 'ocupado'),
('Rua L, 909', 'residencia12.jpg', 'disponivel'),
('Rua M, 111', 'residencia13.jpg', 'disponivel'),
('Rua N, 222', 'residencia14.jpg', 'ocupado'),
('Rua O, 333', 'residencia15.jpg', 'disponivel'),
('Rua P, 444', 'residencia16.jpg', 'disponivel'),
('Rua Q, 555', 'residencia17.jpg', 'ocupado'),
('Rua R, 666', 'residencia18.jpg', 'disponivel'),
('Rua S, 777', 'residencia19.jpg', 'disponivel'),
('Rua T, 888', 'residencia20.jpg', 'ocupado');

-- Inserindo 20 contratos aleatórios
-- Selecionando IDs aleatórios de usuarios e residencias
INSERT INTO contratos (usuario_id, residencia_id, data_inicio, data_fim, status) VALUES
(1, 2, '2023-01-01', '2023-12-31', 'valido'),
(2, 3, '2022-06-15', '2023-06-14', 'expirado'),
(3, 4, '2023-03-01', '2023-09-01', 'valido'),
(4, 5, '2022-11-10', '2023-11-09', 'valido'),
(5, 6, '2023-02-20', '2023-08-20', 'valido'),
(6, 7, '2023-04-05', '2024-04-04', 'valido'),
(7, 8, '2022-12-01', '2023-12-01', 'valido'),
(8, 9, '2023-05-15', '2023-11-15', 'valido'),
(9, 10, '2023-07-01', '2023-12-31', 'valido'),
(10, 11, '2022-09-10', '2023-09-10', 'valido'),
(11, 12, '2023-02-01', '2023-08-01', 'valido'),
(12, 13, '2023-03-20', '2023-09-20', 'valido'),
(13, 14, '2022-10-05', '2023-10-05', 'valido'),
(14, 15, '2023-01-15', '2023-07-15', 'valido'),
(15, 16, '2023-04-10', '2023-10-10', 'valido'),
(16, 17, '2022-08-01', '2023-08-01', 'valido'),
(17, 18, '2023-05-05', '2023-11-05', 'valido'),
(18, 19, '2023-06-15', '2023-12-15', 'valido'),
(19, 20, '2022-07-20', '2023-07-20', 'valido'),
(20, 1, '2023-09-01', '2024-09-01', 'valido');

-- Select para pegar os usuarios e as residencias que estão associadas a eles
SELECT c.id AS contrato_id,
       u.nome AS nome_usuario,
       u.email,
       r.endereco,
       r.imagem AS imagem_residencia,
       c.data_inicio,
       c.data_fim,
       c.status AS status_contrato,
       r.status AS status_residencia
FROM contratos c
JOIN usuarios u ON c.usuario_id = u.id
JOIN residencias r ON c.residencia_id = r.id;

-- Pegando apenas os usuarios
SELECT id, nome, email, imagem FROM usuarios WHERE role = 'usuario';