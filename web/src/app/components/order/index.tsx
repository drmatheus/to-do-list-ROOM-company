"use client";
import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { TaskContext } from "@/app/context/tasksContext";

export const Order: React.FC = () => {
  const { setOrder } = useContext(TaskContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrder(e.target.value);
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
        <option value="7">Maior prioridade </option>
        <option value="8">Menor prioridade</option>
      </select>
    </div>
  );
};
