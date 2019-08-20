CREATE TABLE IF NOT EXISTS nc_admin (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
) ENGINE = InnoDB;

INSERT INTO nc_admin (
    id,nome, email
)
VALUES (1,'Rovelcio Junior', 'desenvolvimento.ti@grupoembracon.com.br'),
(2,'Elizabeth Sales','consultor.campo3@grupoembracon.com.br'),
(3,'Felipe Cooper', 'estagiario.consultoria1@grupoembracon.com.br'),
(4, 'Marcelo Cruz', 'marcelo@grupoembracon.com.br');


