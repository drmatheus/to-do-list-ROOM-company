"use client";
import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import { api } from "@/app/utils/api";

export type TaskCardProps = {
  description: string;
  task: string;
  done: boolean;
  id: string;
};

export const TaskCard = ({ task, description, done, id }: TaskCardProps) => {
  const handleDone = async (id: string) => {
    try {
      await api.put(`/task/${id}`);
    } catch (e: any) {
      console.log(e);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/task/${id}`);
    } catch (e: any) {
      console.log(e);
    }
  };
  const isDone = done ? styles.isDone : "";

  return (
    <li className={styles.card}>
      <input
        type="checkbox"
        defaultChecked={done}
        onChange={() => handleDone(id)}
      />
      <div className={isDone}>
        <h2>{task}</h2>
        <p>{description}</p>
      </div>
      <button
        title="Clique duplo para apagar"
        onDoubleClick={() => handleDelete(id)}
      >
        <Image alt="trash" src={"/trash.png"} width={28} height={28} />
      </button>
    </li>
  );
};
