"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import styles from "./index.module.css";
import { TaskContext } from "@/app/context/tasksContext";

export const Search: React.FC = () => {
  const { setSearchTerm } = useContext(TaskContext);

  const [tempSearchTerm, setTempSearchTerm] = useState("");

  const handleBackspace = () => {
    if (!tempSearchTerm || tempSearchTerm.length == 1) {
      setSearchTerm("");
    }
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Pesquisar..."
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTempSearchTerm(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Backspace") {
            handleBackspace();
          }
        }}
      />
      <button type="button" onClick={() => setSearchTerm(tempSearchTerm)}>
        <Image src={"/search.png"} alt={""} width={22} height={22} />
      </button>
    </div>
  );
};
