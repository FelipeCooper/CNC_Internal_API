CREATE TABLE IF NOT EXISTS franquias_membros (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  franquia_id INT UNSIGNED NOT NULL,
  email VARCHAR(255) NOT NULL,
  nome VARCHAR(80) NOT NULL
) ENGINE = InnoDB;

INSERT INTO franquias_membros (
    franquia_id,nome,email
)
VALUES 

(8	,"CRISTIANE SALVADOR","cristiane.salvador@grupoembracon.com.br"),
(8	,"PAULO RICARDO VALIM VIEIRA","paulo.vieira@grupoembracon.com.br"),
(8	,"RAPHAEL TED	","raphael.tedd@grupoembracon.com.br"),
(13,"	GABRIEL DIETRICH","gabriel.dietrich@grupoembracon.com.br"),
(3	,"PAULO ISRAEL PAS NUNES","estreito3@grupoembracon.com.br"),
(3	,"LUCIANO ALVEZ/RICHARD	","rotacontinente@grupoembracon.com.br"),
(3	,"PAULO SERGIO MARTINS	","condominio40@grupoembracon.com.br"),
(3	,"MICHELLE CAETANO	","estreito2@grupoembracon.com.br"),
(3	,"CLAUDIA REGIS	","estreito1@grupoembracon.com.br"),
(4	,"LUIZ FERNADO SILVA	","centro4@grupoembracon.com.br"),
(4	,"LYA BARRETO	","centro2@grupoembracon.com.br"),
(4	,"ANA CLARA DE SOUZA	","ana.clara@grupoembracon.com.br"),
(4	,"KARLA EIRADO	","centro1@grupoembracon.com.br"),
(4	,"DOUGLAS MARTINI	","centro3@grupoembracon.com.br"),
(4	,"LUIZ BRUDER	","centro5@grupoembracon.com.br"),
(9	,"KARINA LONGHI	","karina.ingleses@grupoembracon.com.br"),
(9	,"LARISSA CHEIRAM RABELLO	","ingleses3@grupoemnracon.com.br"),
(9	,"ALEX OLIVEIRA	","ingleses2@grupoembracon.com.br"),
(9	,"MARLEN SANTOS	","ingleses1@grupoembracon.com.br"),
(1	,"ADRIANO A. DOS SANTOS	","itacorubi7@grupoembracon.com.br"),
(1	,"ANGELO BRUDER	","itacorubi8@grupoembracon.com.br"),
(1	,"FELIPE DOUGLES MARIANI	","itacorubi6@grupoembracon.com.br"),
(1	,"DAIANI SEEMANN	","daiani.seemann@grupoembracon.com.br"),
(1	,"NATHALIA NUNES	","itacorubi1@grupoembracon.com.br"),
(1	,"FERNANDA K C. DE CHAVES	","itacorubi3@grupoembracon.com.br"),
(1	,"MICHELLE CARDOSO	","itacorubi2@grupoembracon.com.br"),
(1	,"KATLA DALBELLO	","itacorubi9@grupoembracon.com.br"),
(2	,"ALEXANDRO SANTOS	","sulog3@grupoembracon.com.br"),
(2	,"THIAGO MARÇAL	","sulog2@grupoembracon.com.br"),
(2	,"HELDER BITTENCOURT	","helder.bitencourt@grupoembracon.com.br"),
(2	,"GRAZIELA SANTOS	","condominio42@grupoembracon.com.br"),
(2	,"LERIANE DE S. FLORIANO	","condominio24@grupoembracon.com.br"),
(2	,"PATRICIA DINIZ	","condominio1@grupoembracon.com.br"),
(2	,"ANDRESA SOZA	","comercial5@grupoembracon.com.br"),
(5	,"VILMAR KOCK	","palhoca3@grupoembracon.br"),
(5	,"ANDRE KUSTER	","condominio9@grupoembracon.com.br"),
(5	,"GABRIELLY BARRETO	","condominio46@grupoembracon.com.br"),
(5	,"EVELYN MIKETIO	","palhoca1@grupoembracon.com.br"),
(5	,"JULIA NODA	","palhoca2@grupoembracon.com.br"),
(10,"	EVALDO	","evaldo.silva@grupoembracon.com.br"),
(6	,"EDUARDO CARDOSO	","eduardo.cardoso@grupoembracon.com.br"),
(6	,"CLEIME COSTA	","cleime.costa@grupoembracon.com.br"),
(12,"	THIAGO BORGES	","thiago.borges@grupoembracon.com.br"),
(12,"	ANDRÉ PANONTIM	","andre.panontim@grupoembracon.com.br");
