import { z } from "zod";
import { taskSchema } from "../schemas";

export type TTaskCreate = z.infer<typeof taskSchema>;

export type TTaskReturn = TTaskCreate & {
  done: boolean;
  id: string;
  createdAt: number;
  updatedAt?: number;
};
