"use client";

import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { Input } from "../input";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldError, FieldValues, useForm } from "react-hook-form";
import { api } from "@/app/utils/api";
import Image from "next/image";

export const FormAddTask = ({
  setLoading,
}: {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const taskSchema = z.object({
    task: z.string().min(3, "Pelo menos 3 caracteres"),
    description: z.string().min(10, "Descreva um pouco melhor sua tarefa"),
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
    setLoading(true);
    try {
      await api.post("/task", task);

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

          <button type="submit">Adicionar</button>
        </form>
      )}
    </div>
  );
};
