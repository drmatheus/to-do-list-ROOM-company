"use client";

import styles from "./page.module.css";
import { FormAddTask } from "./components/form";
import { TaskCard } from "./components/taskCard";
import { useEffect, useState } from "react";
import { api } from "./utils/api";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { TTaskArray } from "./interfaces";
import { Order } from "./components/order";

export default function Home() {
  const [loading, setLoading] = useState<boolean>(true);
  const [tasks, setTasks] = useState<TTaskArray>([]);

  const getTasks = async () => {
    try {
      const { data }: { data: TTaskArray } = await api.get("task/");
      setTasks(data);
    } catch (e: any) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTasks();
  }, [loading]);

  return (
    <div className={styles.main}>
      <Header />
      <main>
        <div className={styles.container}>
          <FormAddTask setLoading={setLoading} />
          <ul>
            <li>
              <Order setTasks={setTasks} />
              <Search setTasks={setTasks} getTasks={getTasks} />
            </li>
            {!loading ? (
              tasks.map((task) => (
                <TaskCard {...task} setLoading={setLoading} key={task.id} />
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
