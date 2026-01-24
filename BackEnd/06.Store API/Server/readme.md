# 🏬 Store API

A RESTful Store API built using **Node.js**, **Express**, and **MongoDB (Mongoose)**.  
This API allows users to create stores and fetch data using **filtering, sorting, and dynamic queries**.

---

## 🚀 Features

- Create a store with multiple fields
- Fetch all stores (static & dynamic)
- Filter stores by company and features
- Sort stores based on user requirements
- Built with clean and scalable backend architecture

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 📦 Store Schema

```json
{
  "name": "Maruti Alto 800",
  "price": 350000,
  "featured": true,
  "rating": 2.5,
  "company": "maruti"
}
```

## API Endpoints

- Create a Store
  /api/v1/products/addProduct
- Get All Stores (Static Data)
  /api/v1/products/static
- Get All Stores (Dynamic Data)
  /api/v1/products?featured=false&company=maruti
