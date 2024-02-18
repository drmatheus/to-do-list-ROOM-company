export type TTask = {
  description: string;
  task: string;
  done: boolean;
  id: string;
  priority: number;
  createdAt: number;
  updatedAt: number;
};

export type TTaskArray = TTask[];
