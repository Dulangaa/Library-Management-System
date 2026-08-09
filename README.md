# 📚 Library Management System

A web-based Library Management System developed using **HTML, CSS, JavaScript, Java, and Spring Boot**.

## 🚀 Features

* 📚 Add new books
* 🗑️ Delete books
* 🔍 Search books by title, author, or ID
* 📖 View all books
* 👤 Manage library members
* 📥 Borrow books
* 📤 Return books
* ↕️ Sort books by title, author, or category
* 📊 Display the total number of books
* 📊 Display borrowed book count
* 🔗 Frontend connected to a Spring Boot REST API

## 🧠 Data Structures & Algorithms

* **HashMap** – used to store and manage books and members
* **ArrayList** – used to manage book collections
* **Selection Sort** – implemented to sort books by title, author, and category
* **Searching** – implemented to find books by ID, title, and author

## 🛠️ Technologies Used

### Frontend

* HTML
* CSS
* JavaScript

### Backend

* Java
* Spring Boot
* REST API
* Maven

### Tools

* IntelliJ IDEA
* Visual Studio Code
* Git & GitHub

## 📁 Project Structure

Library-Management-System 
|
│├── backend 
│    └── Spring Boot Application 
│      ├── controller 
│      ├── service 
│      └── model 
|
│├── frontend 
│   ├── index.html 
│   ├── style.css 
│   └── script.js 
|
│└── README.md


## ▶️ How to Run

### 1. Run the Backend

Open the `backend` folder in IntelliJ IDEA.

Run the Spring Boot application.

The backend runs on:

`http://localhost:8080`

### 2. Open the Frontend

Open `index.html` using VS Code Live Server.

The frontend communicates with the backend using:

`http://localhost:8080/books`

## 🔗 API Endpoints

| Method | Endpoint | Description    |
| ------ | -------- | -------------- |
| GET    | `/books` | Get all books  |
| POST   | `/books` | Add a new book |

## 👩‍💻 Developer

**Dulanga**

Electronics and Computer Science Undergraduate
University of Kelaniya, Sri Lanka
