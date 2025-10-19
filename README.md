JWT Authentication with Node.js & EJS
Project Overview

This is a simple user authentication system built with Node.js, Express, MongoDB, and EJS using JWT (JSON Web Tokens).

Users can:

Register a new account

Login and receive a JWT

Access a protected dashboard

Logout (JWT cleared from cookie)

This project is built as a REST API + server-rendered pages using EJS templates.

Features

✅ User registration with hashed passwords (bcrypt)

✅ Login with JWT token generation

✅ Protected routes using JWT verification

✅ Logout by clearing token cookie

✅ Server-rendered frontend using EJS

✅ MongoDB database integration

Tech Stack

Backend: Node.js, Express

Database: MongoDB, Mongoose

Authentication: JWT, bcrypt

Frontend: EJS (template engine)

Other: dotenv, cookie-parser

Folder Structure
project/
│-- models/
│   └-- user.js
│-- routes/
│   └-- router.js
│-- views/
│   ├-- login.ejs
│   ├-- register.ejs
│   └-- dashboard.ejs
│-- app.js
│-- .env
│-- package.json
