import { Request, Response } from "express";
import {
  createTaskService,
  updateTaskService,
  listTaskService,
  deleteTaskService,
} from "../services";

export const taskCreateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newTask = createTaskService(req.body);

  return res.status(201).json(newTask);
};

export const taskUpdateController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const updatedTask = updateTaskService(req.params.id);
  return res.status(200).json(updatedTask);
};

export const taskListController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const tasks = listTaskService();

  return res.status(200).json(tasks);
};

export const taskDeleteController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  deleteTaskService(req.params.id);
  return res.status(204).json();
};
