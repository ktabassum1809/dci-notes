import sqlite3 from "sqlite3";

// This is a little database helper
// You don't need to really familiarize yourself with this
// Unless you want to know how it works :)

// Open a database connection
export const db = new sqlite3.Database("db.sqlite");

// Create a user table
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id              INTEGER PRIMARY KEY     AUTOINCREMENT,
        username        TEXT NOT NULL UNIQUE    CHECK (length(username) >= 3),
        email           TEXT NOT NULL UNIQUE    CHECK (length(email) >= 6),
        is_seller       INTEGER NOT NULL,
        dark_mode       INTEGER NOT NULL,
        preferred_year  INTEGER NOT NULL,
        password        TEXT NOT NULL           CHECK (length(password) >= 6)
    ) STRICT
`);

// Insert user
export async function register({
  username,
  email,
  is_seller,
  dark_mode,
  preferred_year,
  password,
}) {
  const query = `
        INSERT INTO users
            (username, email, is_seller, dark_mode, preferred_year, password)
        VALUES
            (?, ?, ?, ?, ?, ?)
    `;
  const statement = db.prepare(query);
  const values = [
    username,
    email,
    is_seller,
    dark_mode,
    preferred_year,
    password,
  ];

  return new Promise((resolve, reject) => {
    statement.run(values, function (err) {
      if (err) {
        reject({ error: err });
      } else {
        resolve({ id: this.lastID });
      }
    });
  });
}
