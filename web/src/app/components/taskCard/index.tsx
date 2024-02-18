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
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const TaskCard = ({
  task,
  description,
  done,
  id,
  setLoading,
}: TaskCardProps) => {
  const handleDone = async (id: string) => {
    setLoading(true);
    try {
      await api.put(`/task/${id}`);
    } catch (e: any) {
      console.log(e);
    }
  };

  const handleDelete = async (id: string) => {
    setLoading(true);
    try {
      await api.delete(`/task/${id}`);
    } catch (e: any) {
      console.log(e);
    }
  };
  const isDone = done ? styles.isDone : "";

  return (
    <li className={styles.card}>
      <div className={isDone}>
        <div>
          <label htmlFor={id}>
            <input
              type="checkbox"
              defaultChecked={done}
              onChange={() => handleDone(id)}
              name={id}
            />
          </label>
          <h2>{task}</h2>
        </div>

        <p>{description}</p>
      </div>
      <button onClick={() => handleDelete(id)}>
        <Image alt="trash" src={"/trash.png"} width={28} height={28} />
      </button>
    </li>
  );
};
