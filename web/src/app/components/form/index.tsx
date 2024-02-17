"use client";

import React, { useEffect } from "react";
import styles from "./index.module.css";
import { Input } from "../input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldError, FieldValues, useForm } from "react-hook-form";
import { api } from "@/app/utils/api";

export const FormAddTask = () => {
  const taskSchema = z.object({
    task: z.string().min(3, "Pelo menos 3 caracteres"),
    description: z.string().min(1, "Descreva um pouco melhor sua tarefa"),
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

  const handleNewTask = async (task: FieldValues): Promise<void> => {
    console.log(task);
    try {
      await api.post("/task", task);

      reset();
    } catch (e: any) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleNewTask)} className={styles.form}>
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

      <button type="submit">Adicionar</button>
    </form>
  );
};
