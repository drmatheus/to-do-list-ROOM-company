"use client";
import Image from "next/image";
import React, { useContext } from "react";
import styles from "./index.module.css";
import { api } from "@/app/utils/api";
import {
  calculateTimeDifference,
  dateTimestampToDDMMYY,
} from "@/app/utils/dateFormat";
import { PriorityBar } from "../priorityBar";
import { TaskContext } from "@/app/context/tasksContext";

export type TaskCardProps = {
  description: string;
  task: string;
  done: boolean;
  id: string;
  createdAt: number;
  updatedAt?: number;
  priority: number;
};

export const TaskCard = ({
  task,
  description,
  done,
  id,
  priority,
  createdAt,
  updatedAt,
}: TaskCardProps) => {
  const { setLoading } = useContext(TaskContext);

  const handleDone = async (id: string) => {
    try {
      await api.put(`/task/${id}`);
      setLoading(true);
    } catch (e: any) {
      console.log(e);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await api.delete(`/task/${id}`);
      setLoading(true);
    } catch (e: any) {
      console.log(e);
    }
  };

  const creationDate = dateTimestampToDDMMYY(createdAt);
  const finishDate = updatedAt ? dateTimestampToDDMMYY(updatedAt) : "";
  const timeToFinish = updatedAt
    ? calculateTimeDifference(createdAt, updatedAt)
    : "";

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

      <div className={styles.dates}>
        <span>Criado: {creationDate}</span>
        {finishDate && <span>Concluido: {finishDate}</span>}
        {timeToFinish && <span>Tempo: {timeToFinish}</span>}
      </div>

      <PriorityBar value={priority} />
    </li>
  );
};
