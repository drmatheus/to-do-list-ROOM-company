import { database } from "../database";
import { TTaskCreate, TTaskReturn } from "../interfaces";

export const createTaskService = (task: TTaskCreate) => {
  const randomId = Math.random().toString(36).substring(2, 10);

  const newTask: TTaskReturn = {
    ...task,
    id: randomId,
    done: false,
    createdAt: Date.now(),
  };

  database.push(newTask);

  return newTask;
};

export const updateTaskService = (id: string) => {
  const index = database.findIndex((task) => task.id == id);
  database[index].done = !database[index].done;
  database[index].updatedAt = Date.now();

  return database[index];
};

export const deleteTaskService = (id: string) => {
  const index = database.findIndex((task) => task.id == id);
  database.splice(index, 1);
};

export const listTaskService = () => {
  return database;
};
