DROP TABLE IF EXISTS creator_profile CASCADE;

CREATE TABLE creator_profile(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image VARCHAR(255) NOT NULL,
    amount_raised INT,
    total_goal INT NOT NULL,
    total_goal_reached BOOLEAN NOT NULL,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
    
