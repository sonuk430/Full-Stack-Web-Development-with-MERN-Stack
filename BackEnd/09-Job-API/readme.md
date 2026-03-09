# Job Management REST API 🚀

A simple **Job Management REST API** built with **Node.js, Express.js, and MongoDB**.  
This API allows users to register,login, authenticate, and manage job postings using secure **JWT Authentication**.

---

## 📌 Features

- User Registration & Login (Authentication)
- JWT Based Authorization
- Protected Routes
- Create Jobs
- Get All Jobs
- Get Single Job
- Update Jobs
- Delete Jobs

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)

---

## 📂 API Endpoints

### Authentication

#### Register User

POST `/api/v1/auth/register`

#### User Login

POST `/api/v1/auth/login`

#### Create Job

POST `/api/v1/jobs`

#### Get All Jobs

Get `/api/v1/jobs`

#### Get Single Job

Get `/api/v1/jobs/:id`

#### Get Update Job

Patch `/api/v1/jobs/:id`

#### Get Delete Job

Delete `/api/v1/jobs/:id`

---
