"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./index.module.css";
import { TaskCardProps } from "../taskCard";
import { TTaskArray } from "@/app/interfaces";

type TSearchProps = {
  setTasks: React.Dispatch<
    React.SetStateAction<TTaskArray> // Corrigir o tipo aqui
  >;
  getTasks: () => void;
};

export const Search: React.FC<TSearchProps> = ({ setTasks, getTasks }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = () => {
    setTasks((oldTasks: TTaskArray) => {
      return oldTasks.filter(
        (t) =>
          t.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          t.task.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  };

  const handleBackspace = () => {
    if (!searchTerm || searchTerm.length == 1) {
      getTasks();
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchTerm(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            handleBackspace();
          }
        }}
      />
      <button type="button" onClick={handleSearch}>
        <Image src={"/search.png"} alt={""} width={22} height={22} />
      </button>
    </div>
  );
};
