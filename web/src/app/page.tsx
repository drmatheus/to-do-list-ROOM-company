"use client";

import styles from "./page.module.css";
import { FormAddTask } from "./components/form";
import { TaskCard } from "./components/taskCard";
import { useContext, useEffect } from "react";
import { Header } from "./components/header";
import { Search } from "./components/search";
import { TTask } from "./interfaces";
import { Order } from "./components/order";
import { TaskContext } from "./context/tasksContext";

export default function Home() {
  const { loading, getTasks, setLoading, setTasks, tasks } =
    useContext(TaskContext);

  useEffect(() => {
    getTasks();
  }, [loading]);

  return (
    <div className={styles.main}>
      <Header />
      <main>
        <div className={styles.container}>
          <FormAddTask />
          <ul>
            <li>
              <Order />
              <Search />
            </li>
            {!loading ? (
              tasks.map((task: TTask) => <TaskCard {...task} key={task.id} />)
            ) : (
              <></>
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
