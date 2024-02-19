import { Router } from "express";
import { verifyBody, verifyTaskId } from "../middlewares";
import { taskSchema } from "../schemas";
import {
  taskCreateController,
  taskDeleteController,
  taskListController,
  taskUpdateController,
} from "../controllers";

export const taskRoutes: Router = Router();

taskRoutes.post("", verifyBody(taskSchema), taskCreateController);

taskRoutes.put("/:id", verifyTaskId, taskUpdateController);

taskRoutes.delete("/:id", verifyTaskId, taskDeleteController);

taskRoutes.get("/", taskListController);
