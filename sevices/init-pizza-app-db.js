// initDb.js
const db = require("./db")

async function init() {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS pizzas (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price NUMERIC(6,2) NOT NULL,
        image_url TEXT,
        category VARCHAR(50),
        is_available BOOLEAN DEFAULT TRUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `)
    console.log("✅ Таблиця 'pizzas' створена або вже існує.")
  } catch (err) {
    console.error("❌ Помилка при створенні таблиці:", err)
  } finally {
    db.pool.end()
  }
}

init()
