# 🚀 Employee Management System

A modern Employee Management System built with **React.js** and **Tailwind CSS**. This application allows an admin to assign tasks to employees, while employees can view and manage their assigned tasks. Data persistence is achieved using **Local Storage**.

## 📌 Features

### 👨‍💼 Admin
- Secure Admin Login
- Create and Assign Tasks
- View All Employees
- Track Task Status
- Logout Functionality

### 👨‍💻 Employee
- Secure Employee Login
- View Assigned Tasks
- Accept New Tasks
- Mark Tasks as Completed
- Mark Tasks as Failed

### 📊 Task Management
- New Tasks
- Active Tasks
- Completed Tasks
- Failed Tasks
- Real-time Task Count Updates

## 🛠️ Tech Stack

- React.js
- Tailwind CSS
- Context API
- JavaScript (ES6)
- Local Storage
- Vite

## 📁 Project Structure

```
.
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── auth/
│   │   │   └── Login.jsx
│   │   ├── Dashboard/
│   │   │   ├── AdminDashboard.jsx
│   │   │   └── EmployeeDashboard.jsx
│   │   ├── others/
│   │   │   ├── AllTask.jsx
│   │   │   ├── CreateTask.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── ListAllTask.jsx
│   │   │   └── TaskList.jsx
│   │   └── TaskList/
│   │       ├── AccepteTask.jsx
│   │       ├── CompleteTask.jsx
│   │       ├── FailTask.jsx
│   │       └── NewTask.jsx
│   ├── context/
│   │   └── AuthProvider.jsx
│   ├── utils/
│   │   └── LocalStorage.jsx
│   ├── App.css
│   ├── images
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/your-username/employee-management-system.git
```

Install dependencies

```bash
npm install
```

Run the project

```bash
npm run dev
```

Open your browser and visit

```
http://localhost:5173
```

## 🔑 Demo Credentials

### Admin

```
Email: admin@me.com
Password: 123
```

### Employee

```
Email: a@a.com
Password: 123
```

## 📌 Future Improvements

- Backend with Node.js & Express
- MongoDB Database
- JWT Authentication
- Role-Based Authorization
- REST API Integration
- Task Editing & Deletion

## 📸 Screenshots

![Login page](/images/LoginPage.png)

![Admin Dashboard](/images/AdminDashboard.png)

![Employee Dashboard](/images/EmployeeDashboard.png)

## 👨‍💻 Author

**Ajit Jada**

GitHub: https://github.com/ajitjada/employee-management-system

---
