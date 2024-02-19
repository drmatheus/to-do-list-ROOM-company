import { NextFunction, Request, Response } from "express";
import { z } from "zod";
import { AppError } from "../error";
import { database } from "../database";

export const verifyBody =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {
    req.body = schema.parse(req.body);
    next();
  };

export const verifyTaskId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const taskExist = database.find((task) => task.id == req.params.id);
  if (!taskExist) {
    throw new AppError("Invalid task id", 404);
  }
  next();
};
