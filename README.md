
# Student Project Showcase - Backend

This is the backend API for the Student Project Showcase platform, built with **Node.js**, **Express**, and **PostgreSQL**.

It handles user authentication, project submissions, comments, and admin approvals.

---

## 🔗 Deployed URL

Backend is hosted at:
- [Render Backend URL](https://project-showcase-backend-3d1b.onrender.com)


---

## 🧠 Features

- User & Admin authentication (username/password)
- Project submission & approval
- Commenting on projects
- API endpoints for browsing projects

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- PostgreSQL
- bcrypt (for password hashing- later implementation)
- JSON Web Tokens (JWT) *(for later integration)*

---

## 🚀 Getting Started Locally

1. Clone the repository:
   bash
   git clone https://github.com/Josavina1/project-showcase-backend.git
   cd backend
    
2. Install independencies   
   npm install
   
3. Set up your .env file:
  PORT=5000
  DATABASE_URL=your_postgres_connection_string
  JWT_SECRET=your_jwt_secret_here
  
4. Start the server:
  npm run dev

---

## 📦 API Endpoints

Method	    Endpoint      	Description

GET	      /projects	      List all approved projects

GET	      /projects/:id	  Get a specific project

POST	    /projects	      Submit a new project

POST	    /login	        Login user or admin

GET	      /comments/:projectId	 Get comments for a project

POST	    /comments	            Post a comment

PUT	      /projects/:id/approve  	Approve a project (admin)
   
