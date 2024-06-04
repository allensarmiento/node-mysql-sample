START TRANSACTION;

use shop;
CREATE TABLE Products (
  id serial PRIMARY KEY,
  title varchar(255),
  image_url varchar(100),
  description text,
  price double
);

COMMIT;
