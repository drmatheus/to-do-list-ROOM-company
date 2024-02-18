"use client";
import React, { useState } from "react";
import styles from "./index.module.css";
import { TTaskArray } from "@/app/interfaces";

type TOrderProps = {
  setTasks: React.Dispatch<
    React.SetStateAction<TTaskArray> // Corrigir o tipo aqui
  >;
};

export const Order: React.FC<TOrderProps> = ({ setTasks }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const order = e.target.value;
    setTasks((oldTasks) => {
      switch (order) {
        case "1": // A - Z
          return [...oldTasks].sort((a, b) =>
            a.task.localeCompare(b.task, undefined, { sensitivity: "base" })
          );
        case "2": // Z - A
          return [...oldTasks].sort((a, b) =>
            b.task.localeCompare(a.task, undefined, { sensitivity: "base" })
          );
        case "3": // newest
          return [...oldTasks].sort((a, b) => b.createdAt - a.createdAt);
        case "4": // oldest
          return [...oldTasks].sort((a, b) => a.createdAt - b.createdAt);

        case "6": // not done
          return [...oldTasks].sort((a, b) =>
            a.done === b.done ? 0 : a.done ? 1 : -1
          );
        case "5": // done
          return [...oldTasks].sort((a, b) =>
            a.done === b.done ? 0 : a.done ? -1 : 1
          );
        default:
          return oldTasks;
      }
    });
  };

  return (
    <div className={styles.order}>
      <select
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
          handleChange(e);
        }}
      >
        <option value="1">A - Z</option>
        <option value="2">Z - A</option>
        <option value="3">Mais recente</option>
        <option value="4">Mais antigo</option>
        <option value="5">Concluido </option>
        <option value="6">Não concluído</option>
      </select>
    </div>
  );
};
