const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload'); // 🔥 we'll create a simple multer middleware file
const { getAllProjects, createProject } = require('../controllers/projectController'); // 🔥 calling controller

// Submit a new project
router.post('/projects', upload.single('file'), createProject);

// Fetch all projects
router.get('/projects', getAllProjects);

module.exports = router;
