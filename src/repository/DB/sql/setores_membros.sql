CREATE TABLE
IF NOT EXISTS setores_membros
(
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  setor_id INT UNSIGNED NOT NULL,
  email VARCHAR
(255) NOT NULL,
  nome VARCHAR
(80) NOT NULL
) ENGINE = InnoDB;
INSERT INTO setores_membros
  (id, setor_id, email, nome)
VALUES
  (1, 6 , "gerente.vendas@grupoembracon.com.br", "Agnes Chaves"),
  (2, 6 , "coord.vendas@grupoembracon.com.br", "Marcelo Pinto"),
  (3, 6 , "suporte.comercial1@grupoembracon.com.br", "Jefter"),
  (4, 6 , "suporte.comercial3@grupoembracon.com.br", "Caroline da Silveira"),
  (5, 6 , "suporte.comercial@grupoembracon.com.br", "Maria Eduarda"),
  (6, 6 , "prevendas3@grupoembracon.com.br", "Lais"),
  (7, 6 , "prevendas2@grupoembracon.com.br", "Sabrina Macedo"),
  (8, 7, "gerente.consultoria@grupoembracon.com.br", "Sabrina Vieira"),
  (9, 7, "consultor.campo2@grupoembracon.com.br", "Jesael "),
  (10, 7, "consultor.campo3@grupoembracon.com.br", "Elisabeth" ),
  (11, 7, "estagiario1.consultoria@grupoembracon.com.br", "Marcos Felipe " ),
  (12, 7, "cs@grupoembracon.com.br", "Camila" ),
  (13, 7, "estagiario.consultoria@grupoembracon.com.br", "Vinicius Longen" ),
  (14, 12, "imoveis3@grupoembracon.com.br", "Leticia Pereira" ),
  (15, 12, "imoveis4@grupoembracon.com.br", "Fabiano" ),
  (16, 12, "imoveis2@grupoembracon.com.br", "Jaqueline" ),
  (17, 1, "maria@grupoembracon.com.br", "Duda (correta)" ),
  (18, 1, "coord.apoioadm@grupoembracon.com.br", "Tarcila Dorn" ),
  (19, 1, "condominio56@grupoembracon.com.br", "Vanessa Brad" ),
  (20, 1, "condominio59@grupoembracon.com.br", "Thais " ),
  (21, 1, "condominio25@grupoembracon.com.br", "Alice " ),
  (22, 1, "condominio37@grupoembracon.com.br", "Beatriz Araujo" ),
  (23, 1, "condominio55@grupoembracon.com.br", "Pauline" ),
  (24, 1, "condominio45@grupoembracon.com.br", "Gislaine" ),
  (25, 1, "condominio21@grupoembracon.com.br", "Jessica Eduarda da Silva" ),
  (27, 1, "condominio53@grupoembracon.com.br", "Joana" ),
  (29, 1, "condominio44@grupoembracon.com.br", "Priscila Pinto da Silva" ),
  (30, 1, "condominio28@grupoembracon.com.br", "Érica Sales" ),
  (31, 1, "condominio57@grupoembracon.com.br", "Fernanda" ),
  (32, 1, "condominio51@grupoembracon.com.br", "Solange" ),
  (33, 1, "condominio56@grupoembracon.com.br", "Kécila" ),
  (26, 4, "estagiariobalancete12@grupoembracon.com.br", "Ana Caroline dos Santos" ),
  (28, 4, "condominio34@grupoembracon.com.br", "André Ferreira" ),
  (34, 4, "condominio22@grupoembracon.com.br", "Andréia Martens" ),
  (35, 4, "condominio61@grupoembracon.com.br", "Andreza Antunes" ),
  (36, 4, "condominio60@grupoembracon.com.br", "Beatriz Silveira" ),
  (37, 4, "condominio12@grupoembracon.com.br", "Caroline Duarte" ),
  (38, 4, "condominio17@grupoembracon.com.br", "Cristiani Morais" ),
  (39, 4, "estagiariobalancete2@grupoembracon.com.br", "Debora Maia" ),
  (40, 4, "estagiariobalancete8@grupoembracon.com.br", "Filipe Rospide" ),
  (41, 4, "estagiariobalancete9@grupoembracon.com.br", "Gabriel Spricigo" ),
  (42, 4, "estagiariobalancete3@grupoembracon.com.br", "Gabriela Porto" ),
  (43, 4, "coord.balancete@grupoembracon.com.br", "Gabriela Rosa" ),
  (44, 4, "condominio4@grupoembracon.com.br", "Gabrielle Martins" ),
  (45, 4, "estagiariobalancete5@grupoembracon.com.br", "Gabriely Aparecida" ),
  (46, 4, "condominio64@grupoembracon.com.br", "Guilherme Evandro" ),
  (47, 4, "estagiariobalancete10@grupoembracon.com.br", "Helen de Faria" ),
  (48, 4, "condominio10@grupoembracon.com.br", "Jaqueline Santos" ),
  (49, 4, "condominio65@grupoembracon.com.br", "João Felipe Silveira" ),
  (50, 4, "estagiariobalancete6@grupoembracon.com.br", "Julia Dutra" ),
  (51, 4, "condominio32@grupoembracon.com.br", "Karine da Luz" ),
  (52, 4, "condominio43@grupoembracon.com.br", "Kenya Rosa" ),
  (53, 4, "condominio14@grupoembracon.com.br", "Leticia Anselmo" ),
  (54, 4, "condominio20@grupoembracon.com.br", "Leticia Eli " ),
  (55, 4, "condominio66@grupoembracon.com.br", "Maria Eduarda da Silva (correta)" ),
  (56, 4, "condominio63@grupoembracon.com.br", "Nathani Silva (correta)" ),
  (57, 4, "estagiariobalancete4@grupoembracon.com.br", "Otavio Fontes" ),
  (58, 4, "estagiariobalancete7@grupoembracon.com.br", "Samuel Telam" ),
  (59, 4, "coord.conciliacao@grupoembracon.com.br", "Sandra Wolfart" ),
  (60, 3, "condominio30@grupoembracon.com.br", "Pamela Rezini" ),
  (61, 3, "condominio18@grupoembracon.com.br", "Renata Otacilio" ),
  (62, 3, "condominio33@grupoembracon.com.br", "Jessyka Costa" ),
  (63, 3, "condominio39@grupoembracon.com.br", "Felippe Nunes" ),
  (64, 3, "coord.baixas@grupoembracon.com.br", "Gabriela Westphal" ),
  (65, 3, "condominio58@grupoembracon.com.br", "Janir Pereira" ),
  (66, 8, "pessoal8@grupoembracon.com.br", "Caroline Espindola " ),
  (67, 8, "pessoal7@grupoembracon.com.br", "Barbara Sangaletti" ),
  (68, 8, "pessoal1@grupoembracon.com.br", "Mariana (correta) " ),
  (69, 8, "pessoal10@grupoembracon.com.br", "Chaiany" ),
  (70, 8, "pessoal14@grupoembracon.com.br", "Amanda Hessmann" ),
  (71, 8, "coord.pessoal@grupoembracon.com.br", "Deise Seara" ),
  (72, 8, "dpoperacional5@grupoembracon.com.br", "Juliana Konig" ),
  (73, 8, "dpoperacional2@grupoembracon.com.br", "Bianca de Souza" ),
  (74, 8, "dpoperacional4@grupoembracon.com.br", "Margarete " ),
  (75, 8, "pessoal2@grupoembracon.com.br", "Marinete " ),
  (76, 8, "pessoal4@grupoembracon.com.br", "Fernanda Rocha" ),
  (77, 8, "pessoal5@grupoembracon.com.br", "Nicolly " ),
  (78, 8, "pessoal3@grupoembracon.com.br", "Patricia Bonetti " ),
  (79, 8, "pessoal12@grupoembracon.com.br", "Pyetro" ),
  (80, 8, "pessoal15@grupoembracon.com.br", "Giovanna Pagnan" ),
  (81, 8, "pessoal9@grupoembracon.com.br", "Kethelym Mantovani" ),
  (82, 8, "Pessoal11@grupoembracon.com.br", "Tatiane Araujo" ),
  (83, 9, "gerente.financeiro@grupoembracon.com.br" , "Barbara Souza" ),
  (84, 9, "coord.financeiro@grupoembracon.com.br" , "Aline Alves" ),
  (85, 9, "financeiro4@grupoembracon.com.br" , "Ana Carolina da Silva " ),
  (86, 9, "financeiro5@grupoembracon.com.br" , "Ralf Salvador" ),
  (87, 9, "financeiro17@grupoembracon.com.br" , "Bianca Machado" ),
  (88, 9, "financeiro20@grupoembracon.com.br" , "Caroline Azambuja" ),
  (89, 9, "coord.financeiroflex@flexsa.com.br" , "Laiane Nikitenko" ),
  (90, 9, "estagiario1@flexsa.com.br" , "Mariane Flores" ),
  (91, 9, "financeiro9@grupoembracon.com.br" , "Juliana Kellen" ),
  (92, 9, "financeiro1@grupoembracon.com.br" , "Annelise Andrade" ),
  (93, 9, "financeiro3@grupoembracon.com.br" , "Priscila Teles" ),
  (94, 9, "financeiro11@grupoembracon.com.br" , "Giseli Salomon" ),
  (95, 9, "financeiro12@grupoembracon.com.br" , "Patricia Domingos" ),
  (96, 9, "financeiro14@grupoembracon.com.br" , "Thayane Schutz" ),
  (97, 9, "financeiro21@grupoembracon.com.br" , "Kelly Cristina Oliveira" ),
  (98, 9, "gestaofinanceira@grupoembracon.com.br" , "Thalya Pavlack" ),
  (99 ,10, "coord.flex@flexsa.com.br", "Godoy"  ),
  (100,10, "juridico2@grupoembracon.com.br", "Laryssa Oliveira"  ),
  (101,10, "rodrigo@grupoembracon.com.br", "Rodrigo"  ),
  (102,10, "juridico4@grupoembracon.com.br", "Scharlayne"  ),
  (103,10, "juridico3@grupoembracon.com.br", "Fiama"  ),
  (104, 14, "coord.societario@grupoembracon.com.br", "Ana Paula Duarte" ),
  (105, 14, "societario2@grupoembracon.com.br", "Marcos Ouriques" ),
  (106, 13, "gerente.rh@grupoembracon.com.br", "Andreia Ferreira" ),
  (107, 13, "rh4@grupoembracon.com.br", "Tayna Passos" ),
  (108, 13, "rh1@grupoembracon.com.br", "Daniela Brusda" ),
  (109, 13, "rh3@grupoembracon.com.br", "Natália Alves" ),
  (110, 13, "rh6@grupoembracon.com.br", "Gustavo Sens" ),
  (111, 13, "rh5@grupoembracon.com.br", "Josefa Sanaélia" ),
  (112, 13, "rh2@grupoembracon.com.br", "Tassia Amanda" ),
  (113, 13, "vivabem2@grupoembracon.com.br", "Natalia Tivis" ),
  (114, 13, "vivabem1@grupoembracon.com.br", "Gabriel Sens" ),
  (115, 2, "operacional2@grupoembracon.com.br","Fernanda Irene" ),
  (116, 2, "gerente.operacional@grupoembracon.com.br","Osvalcir Feliciano" ),
  (117, 2, "operacional3@grupoembracon.com.br","Jessica Teixeira" ),
  (118, 2, "operacional1@grupoembracon.com.br","Marcela Munoz" ),
  (119, 2, "gerente.administrativo@grupoembracon.com.br","Rosi" ),
  (120, 2, "administrativo1@grupoembracon.com.br","Diogo" ),
  (121, 2, "administrativo2@grupoembracon.com.br","Bruna (correta) " ),
  (122, 2, "coord.admoperacional@grupoembracon.com.br","Priscila Rosa " ),
  (123, 15, "desenvolvimento.ti@grupoembracon.com.br","Rovelcio Jr." ),
  (124, 15, "ti5@grupoembracon.com.br","Anderson" ),
  (125, 15, "ti1@grupoembracon.com.br","Francisco" );