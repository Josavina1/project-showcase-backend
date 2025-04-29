const pool = require('../db');
const path = require('path'); // 🔥 added this

const getAllProjects = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM projects ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Error fetching projects:', err.message);
    res.status(500).send('Server Error');
  }
};

const createProject = async (req, res) => {
  try {
    const { title, description, tags, video_link } = req.body;
    const file_url = req.file ? `/uploads/${req.file.filename}` : null; // 🔥 fixed

    const result = await pool.query(
      'INSERT INTO projects (title, description, tags, file_url, video_link) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, description, tags, file_url, video_link]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error('Error creating project:', err.message);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  getAllProjects,
  createProject,
};
