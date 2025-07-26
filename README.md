#  Collaborative To-Do App (MERN Stack)

This is a simple collaborative To-Do List application built using **Node.js**, **Express**, **MongoDB**, and **JWT Authentication**.

>  **Note:** This project was tested locally using a local MongoDB database. Since a free MongoDB Atlas cluster was being used, the hosted database connection is not active. 

---

## 🚀 Features

- User Registration & Login (JWT-based auth)
- Protected routes using middleware
- Create, Read, Update, and Delete tasks
- Tasks with status (`pending`, `in-progress`, `completed`)
- Responsive frontend (React-based)

---

## 🛠️ Technologies

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Token (JWT)
- bcryptjs (for password hashing)
- React (frontend)
- Axios (for API calls)

---

## Installation

```bash
# Clone the repo
git clone https://github.com/Tanmaydwivedi9161/task_manager_test
cd todo-collab-app

# Backend setup
cd server
npm install

# Create a .env file
touch .env
