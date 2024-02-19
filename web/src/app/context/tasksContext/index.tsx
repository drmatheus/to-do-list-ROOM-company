"use client";

import { TTask, TTaskArray } from "@/app/interfaces";
import { api } from "@/app/utils/api";
import React, {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface ITaskContext {
  getTasks: () => void;

  tasks: TTask[];
  setTasks: React.Dispatch<React.SetStateAction<TTaskArray>>;

  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;

  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;

  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export const TaskContext = createContext({} as ITaskContext);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<TTaskArray>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [order, setOrder] = useState<string>("1");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const orderTasks = (tasksToOrder: TTaskArray) => {
    switch (order) {
      case "1": // A - Z
        return [...tasksToOrder].sort((a, b) =>
          a.task.localeCompare(b.task, undefined, { sensitivity: "base" })
        );
      case "2": // Z - A
        return [...tasksToOrder].sort((a, b) =>
          b.task.localeCompare(a.task, undefined, { sensitivity: "base" })
        );
      case "3": // newest
        return [...tasksToOrder].sort((a, b) => b.createdAt - a.createdAt);
      case "4": // oldest
        return [...tasksToOrder].sort((a, b) => a.createdAt - b.createdAt);

      case "6": // not done
        return [...tasksToOrder].sort((a, b) =>
          a.done === b.done ? 0 : a.done ? 1 : -1
        );
      case "5": // done
        return [...tasksToOrder].sort((a, b) =>
          a.done === b.done ? 0 : a.done ? -1 : 1
        );
      default:
        return tasksToOrder;
    }
  };

  const searchTask = (tasksToFilter: TTaskArray) => {
    if (!searchTerm.length) {
      return tasksToFilter;
    }
    return tasksToFilter.filter(
      (t: TTask) =>
        t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        t.task.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const getTasks = async () => {
    try {
      const { data }: { data: TTaskArray } = await api.get("task/");
      const orderedTasks = orderTasks(data);
      const foundedTasks = searchTask(orderedTasks);

      setTasks(foundedTasks);
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, [order, tasks, searchTerm]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        loading,
        setLoading,
        getTasks,
        order,
        setOrder,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
