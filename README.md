# 📝 Task Management API

A RESTful API for managing tasks, built with Node.js, Express, and PostgreSQL.

## 🚀 Features

- 🛠 **User Registration & Authentication**
- 📋 **CRUD Operations for Tasks**
- 👥 **Task Assignment to Users**
- 🔍 **Filtering & Searching for Tasks**
- 🔐 **Role-Based Access Control** (Admin & User roles)
- 📄 **Pagination for Task Lists**
- 📑 **API Documentation** with Swagger

## ⚙️ Prerequisites

- **Node.js** (v14 or later)
- **Docker** & **Docker Compose**

## 📂 Project Structure

```bash
task_management/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── index.js
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── auth.js
│   │   └── tasks.js
│   ├── services/
│   │   ├── authService.js
│   │   └── taskService.js
│   ├── utils/
│   │   └── pagination.js
│   └── index.js
├── .env
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
└── README.md
```

## 🛠️ Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sushant9473/task_management.git
   cd task_management
   ```

2. **Create a `.env` file:**

   ```bash
   DATABASE_URL=postgres://user:password@db:5432/taskdb
   JWT_SECRET=your_jwt_secret
   ```

3. **Build and start the Docker containers:**

   ```bash
   docker-compose up --build
   ```

4. **Access the API:**
   - **API:** `http://localhost:3000`
   - **Swagger Documentation:** `http://localhost:3000/api-docs`

## 🧪 Running Tests

To run the tests, use the following command:

```bash
npm test
```

## 📌 API Endpoints

- **`POST /api/register`** - Register a new user
- **`POST /api/login`** - Login a user
- **`POST /api/tasks`** - Create a new task (authenticated)
- **`GET /api/tasks`** - Get all tasks for the authenticated user (with filtering and pagination)
- **`PUT /api/tasks/:taskId`** - Update a task (authenticated)
- **`DELETE /api/tasks/:taskId`** - Delete a task (authenticated)
- **`GET /api/admin/tasks`** - Get all tasks (admin only)

For detailed information about the API endpoints, please refer to the Swagger documentation.

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests.

## 📜 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
