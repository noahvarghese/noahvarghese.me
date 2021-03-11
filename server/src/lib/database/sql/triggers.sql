-- Triggers List
-- All tables INSERT and UPDATE for DATETIME

-- users

CREATE TRIGGER users_update
BEFORE UPDATE 
ON users FOR EACH ROW
SET NEW.updated_on = NOW();