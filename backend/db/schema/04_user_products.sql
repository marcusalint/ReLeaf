DROP TABLE IF EXISTS user_products CASCADE;
CREATE TABLE user_products (
   id SERIAL PRIMARY KEY NOT NULL,
  product_title VARCHAR(255) NOT NULL,
  goal INT NOT NULL,
  amount_reached INT NOT NULL,
  description TEXT NOT NULL,
  category_id INT REFERENCES categories(id) on DELETE CASCADE,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  image VARCHAR(255) NOT NULL,
  accomplished BOOLEAN DEFAULT FALSE,
  creator_profile_id INT REFERENCES creator_profile(id) on DELETE CASCADE,
  number_of_donations INT DEFAULT 0,
  donations_needed INT DEFAULT 10
)