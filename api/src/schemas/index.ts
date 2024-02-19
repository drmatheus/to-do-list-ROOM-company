import { z } from "zod";

export const taskSchema = z.object({
  task: z.string().min(3, "Pelo menos 3 caracteres"),
  description: z.string().min(10, "Descreva um pouco melhor sua tarefa"),
  priority: z.number().min(1).max(5),
});
