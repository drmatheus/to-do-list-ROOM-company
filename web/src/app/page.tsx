"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { FormAddTask } from "./components/form";
import { TaskCard, TaskCardProps } from "./components/taskCard";
import { useEffect, useState } from "react";
import { api } from "./utils/api";

export default function Home() {
  const mockupData: TaskCardProps[] = [
    {
      id: "1",
      description: "Ir ao supermercado e comprar itens da lista",
      task: "Fazer compras",
      done: false,
    },
    {
      id: "2",
      description: "Assistir tutoriais e praticar programação com React",
      task: "Estudar React",
      done: true,
    },
    {
      id: "3",
      description: "Fazer exercícios físicos por pelo menos 30 minutos",
      task: "Exercícios",
      done: false,
    },
    {
      id: "4",
      description: "Ler pelo menos um capítulo de um livro",
      task: "Leitura",
      done: true,
    },
  ];

  const [tasks, setTasks] = useState<TaskCardProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const { data }: { data: TaskCardProps[] } = await api.get("task/");
        setTasks(data);
      } catch (e: any) {
        console.log(e);
      }
      setLoading(false);
    };

    getTasks();
  }, []);

  if (loading) return <></>;

  return (
    <div className={styles.main}>
      <main>
        <header className={styles.header}>
          <div className={styles.container}>
            <div className={styles.logo}>
              <Image
                src={"/check-square.png"}
                alt="todolist logo"
                width={48}
                height={48}
              />
              <span>To Do List</span>
            </div>
          </div>
        </header>

        <div className={styles.container}>
          <FormAddTask />
          <ul>
            {tasks.map((task, i) => (
              <TaskCard {...task} key={i} />
            ))}
            {mockupData.map((task, i) => (
              <TaskCard {...task} key={i} />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
