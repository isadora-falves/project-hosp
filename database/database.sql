CREATE DATABASE ng_hosp_db;

USE ng_hosp_db;

CREATE TABLE cid(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    descricao_abreviada VARCHAR(60)
);

CREATE TABLE paciente(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cid_id INT,
    FOREIGN KEY(cid_id) REFERENCES cid(id),
    nome_mae VARCHAR(255),
    nr_sus INT,
    n_prontuario_same INT,
    n_prontuario_hygia INT,
    sexo CHAR,
    data_nascimento TIMESTAMP,
    data_diagnostico TIMESTAMP,
    criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE cid;
DESCRIBE paciente;
