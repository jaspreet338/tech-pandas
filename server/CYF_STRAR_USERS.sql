DROP TABLE IF EXISTS users;
CREATE TABLE users (
    id serial PRIMARY KEY,
    email text NOT NULL,
    name text NOT NULL,
    password text NOT NULL,
    class_name text NOT NULL,
    city text NOT NULL,
    user_type text NOT NULL,
    CHECK (user_type IN ('TA', 'student', 'mentor'))
);