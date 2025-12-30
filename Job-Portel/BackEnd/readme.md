# 🧑‍💼 Job Portal Backend (MERN) – Planning & Architecture

## 📌 Project Overview

This project is a **Job Portal Backend System** where **Admin can post jobs** and **Users can apply for jobs**.  
The main goal of this project is to implement **role-based authentication**, **job management**, and **job application flow** using **Node.js, Express, and MongoDB**.

---

## 🎯 Features

### 👤 User

- Register & Login
- View all available jobs
- Apply for jobs
- View applied jobs

### 👨‍💼 Admin

- Register & Login
- Post jobs with deadline
- View applicants for a job
- Delete jobs

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt (Password Hashing)

# 🔗 Job Portal – Database Relationship Diagram (ERD)

## 📌 Overview

Is document me **Job Portal Backend** ke teen main schemas ka **relationship (relation)** explain kiya gaya hai:

- User
- Job
- Application

Ye design **real-world scalable architecture** follow karta hai aur **many-to-many relationship** ko properly handle karta hai.

---

## 🧩 Schemas Involved

### 👤 User Schema

- User register/login karta hai
- Ek user multiple jobs par apply kar sakta hai

### 💼 Job Schema

- Admin job post karta hai
- Ek job par multiple users apply kar sakte hain

### 📝 Application Schema

- User aur Job ke beech ka **bridge (junction) schema**
- Apply ki details yahin store hoti hain

---

## 🔗 Entity Relationship Diagram (ER Diagram)
