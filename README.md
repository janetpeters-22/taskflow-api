# TaskFlow Lite API

A RESTful Task Management API built using Node.js, Express.js, MongoDB Atlas, and Mongoose. The API allows users to create, manage, update, and delete tasks with persistent cloud database storage.

## Features

* Create new tasks
* View all tasks
* View a task by ID
* Update existing tasks
* Delete tasks
* Input validation
* Error handling middleware
* Security headers with Helmet
* CORS support
* Request logging with Morgan
* MongoDB Atlas cloud database integration
* Mongoose ODM for data modeling
* Persistent data storage across server restarts

## Tech Stack

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* CORS
* Helmet
* Morgan
* Dotenv
* Render
* Postman

## Project Structure

```text
taskflow-api
│
├── src
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── taskController.js
│   ├── middleware
│   │   ├── errorHandler.js
│   │   └── validateTask.js
│   ├── models
│   │   └── Task.js
│   └── routes
│       └── taskRoutes.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd taskflow-api
```

Install dependencies:

```bash
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

Run the development server:

```bash
npm start
```

The server will run on:

```text
http://localhost:5000
```

## Database Configuration

This project uses MongoDB Atlas as the cloud database.

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. Configure network access.
4. Add the MongoDB connection string to the `.env` file.
5. Start the server.

## API Endpoints

### Get All Tasks

```http
GET /api/tasks
```

### Get Task By ID

```http
GET /api/tasks/:id
```

### Create Task

```http
POST /api/tasks
```

Example Request Body:

```json
{
  "text": "Learn MongoDB",
  "priority": "High",
  "dueDate": "2026-06-15"
}
```

### Update Task

```http
PUT /api/tasks/:id
```

Example Request Body:

```json
{
  "completed": true
}
```

### Delete Task

```http
DELETE /api/tasks/:id
```

## Example Response

```json
{
  "_id": "6850b3e43efb3d9e8f4b8a7c",
  "text": "Learn MongoDB",
  "completed": false,
  "priority": "High",
  "dueDate": "2026-06-15",
  "createdAt": "2026-06-10T03:52:54.802Z",
  "updatedAt": "2026-06-10T03:52:54.802Z"
}
```

## Deployment

The API is deployed on Render and uses MongoDB Atlas for cloud database storage.

### Deployment Stack

* GitHub
* Render
* MongoDB Atlas

## Testing

API endpoints were tested using Postman for:

* Create Task
* Get All Tasks
* Get Task By ID
* Update Task
* Delete Task
* Validation Testing

## Internship Tasks Completed

### Task 3 – REST API Development

* Built a RESTful Task Management API using Node.js and Express.js.
* Implemented CRUD operations.
* Added middleware for validation and error handling.
* Configured security and logging middleware.

### Task 4 – MongoDB Atlas Integration

* Integrated MongoDB Atlas cloud database.
* Implemented Mongoose models and schemas.
* Replaced in-memory storage with persistent database storage.
* Connected the API to MongoDB Atlas using environment variables.
* Verified data persistence after server restarts.
* Tested all database operations using Postman.

## Author

Janet Peters
