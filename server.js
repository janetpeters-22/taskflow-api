import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";

import connectDB from "./src/config/db.js";
import taskRoutes from "./src/routes/taskRoutes.js";
import { errorHandler }
from "./src/middleware/errorHandler.js";

dotenv.config();
connectDB();

const app = express();

const PORT =
  process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    name: "TaskFlow Lite API",
    version: "2.0.0",
    database: "MongoDB",
    status: "Running",
    endpoints: {
      getAllTasks: "/api/tasks",
      getTaskById: "/api/tasks/:id",
      createTask: "/api/tasks",
      updateTask: "/api/tasks/:id",
      deleteTask: "/api/tasks/:id"
    }
  });
});

app.use("/api/tasks", taskRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});