CREATE TABLE IF NOT EXISTS nc_setores (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL
) ENGINE = InnoDB;

INSERT INTO nc_setores (id, titulo) VALUES
  ( 1, "APOIO"),
  ( 2, "ADM"),
  ( 3, "BAIXAS"),
  ( 4, "BALANCETE"),
  ( 5, "CENTRAL_24_HRS"),
  ( 6, "COMERCIAL"),
  ( 7, "CONSULTORIA"),
  ( 8, "DP"),
  ( 9, "FINANCEIRO"),
  (10, "FLEX"),
  (11, "GF"),
  (12, "IMÓVEIS"),
  (13, "RH"),
  (14, "SOCIETÁRIO"),
  (15, "TI"),
  (16, "FRANQUIA");
