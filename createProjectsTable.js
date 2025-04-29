const pool = require('./db'); // your db.js file

const createTable = async () => {
  try {
    const query = `
      CREATE TABLE IF NOT EXISTS projects (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        tags VARCHAR(255),
        file_url TEXT,
        video_link TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;
    await pool.query(query);
    console.log('✅ Projects table created successfully.');
    process.exit(0); // exit script after success
  } catch (error) {
    console.error('❌ Error creating projects table:', error);
    process.exit(1); // exit script after error
  }
};

createTable();

