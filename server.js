const express = require('express');
const cors = require('cors');
const multer = require('multer'); 
const path = require('path');
const pool = require('./db'); // 🔥 import pool from db.js
const projectRoutes = require('./routes/projectRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Set up multer for file uploads
const upload = multer({ dest: 'uploads/' }); 

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', projectRoutes);

// Serve static files from the uploads folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // 🔥 important

// Routes
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Create project
app.post('/api/projects', upload.single('file'), async (req, res) => {
  const { title, description, tags, video_link } = req.body;
  const file_url = req.file ? path.join('/uploads', req.file.filename) : null; // handle file URL

  try {
    const result = await pool.query(
      'INSERT INTO projects (title, description, tags, file_url, video_link) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, tags, file_url, video_link]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error('Error inserting project:', err.message);
    res.status(500).json({ error: err.message }); // Return the error message as JSON
  }
});


// Listen
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
