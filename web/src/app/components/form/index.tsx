"use client";

import React, { useContext, useEffect, useState } from "react";
import styles from "./index.module.css";
import { Input } from "../input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldError, FieldValues, useForm } from "react-hook-form";
import { api } from "@/app/utils/api";
import Image from "next/image";
import { TaskContext } from "@/app/context/tasksContext";

export const FormAddTask = () => {
  const taskSchema = z.object({
    task: z.string().min(3, "Pelo menos 3 caracteres"),
    description: z.string().min(10, "Descreva um pouco melhor sua tarefa"),
    priority: z.string().refine((n) => Number(n) > 0 && Number(n) < 6),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: zodResolver(taskSchema),
  });

  const { setLoading } = useContext(TaskContext);

  const handleNewTask = async (task: FieldValues): Promise<void> => {
    setLoading(true);
    try {
      await api.post("/task", { ...task, priority: parseInt(task.priority) });

      reset();
    } catch (e: any) {
      console.log(e);
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.form}>
      <div>
        <span>Adicionar Tarefa</span>
        <button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <Image
            alt="trash"
            src={`/${isOpen ? "up" : "down"}-arrow.png`}
            width={16}
            height={18}
          />
        </button>
      </div>
      {isOpen && (
        <form onSubmit={handleSubmit(handleNewTask)}>
          <Input
            label="Tarefa"
            placeholder="Tarefa"
            field="task"
            register={register}
            error={errors.task as FieldError}
          />
          <label htmlFor="">
            <textarea
              placeholder="Descrição"
              {...register("description")}
            ></textarea>
            {errors.description?.message && (
              <p className="">*{errors.description?.message as string}</p>
            )}
          </label>
          <p>Prioridade</p>
          <label htmlFor="" className={styles.inputRange}>
            <span>1</span>
            <input
              type="range"
              min="1"
              max="5"
              step="1"
              {...register("priority")}
            />
            <span>5</span>
          </label>

          <button type="submit">Adicionar</button>
        </form>
      )}
    </div>
  );
};
