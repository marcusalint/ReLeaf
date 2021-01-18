-- DROP TABLE IF EXISTS users CASCADE;
-- CREATE TABLE Creator_profile(
--     id INT NOT NULL,
--     Title VARCHAR(255) NOT NULL,
--     user_id VARCHAR(255) NOT NULL,
--     Description VARCHAR(255) NOT NULL,
--     Password VARCHAR(255) NOT NULL,
--     Location VARCHAR(255) NOT NULL,
--     Bio TEXT NOT NULL
--     type VARCHAR(255) NOT NULL
-- );

DROP TABLE IF EXISTS posts CASCADE;

CREATE TABLE posts(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    user_id INTEGER REFERENCES users(id)
);