# TaskFlow Lite API

A RESTful API built using Node.js and Express.js for managing tasks in the TaskFlow Lite application.

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

## Tech Stack

* Node.js
* Express.js
* CORS
* Helmet
* Morgan
* Dotenv

## Project Structure

```text
taskflow-api
│
├── src
│   ├── controllers
│   │   └── taskController.js
│   ├── data
│   │   └── tasks.js
│   ├── middleware
│   │   ├── errorHandler.js
│   │   └── validateTask.js
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
```

Run the development server:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:5000
```

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
  "text": "Learn Express",
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
  "id": 1,
  "text": "Learn Express",
  "completed": false,
  "priority": "High",
  "dueDate": "2026-06-15",
  "createdAt": "2026-06-10T03:52:54.802Z",
  "updatedAt": "2026-06-10T03:52:54.802Z"
}
```

## Author

Janet Peters

## Internship Task

This project was developed as the backend API for the TaskFlow Lite application and demonstrates RESTful API development using Node.js and Express.js.
