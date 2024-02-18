"use client";

import styles from "./page.module.css";
import { FormAddTask } from "./components/form";
import { TaskCard, TaskCardProps } from "./components/taskCard";
import { useEffect, useState } from "react";
import { api } from "./utils/api";
import { Header } from "./components/header";

export default function Home() {
  const [tasks, setTasks] = useState<TaskCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data }: { data: TaskCardProps[] } = await api.get("task/");
        setTasks(data);
      } catch (e: any) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };

    getTasks();
  }, [loading]);

  return (
    <div className={styles.main}>
      <Header />
      <main>
        <div className={styles.container}>
          <FormAddTask setLoading={setLoading} />
          <ul>
            {!loading ? (
              tasks.map((task, i) => (
                <TaskCard {...task} setLoading={setLoading} key={i} />
              ))
            ) : (
              <></>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
