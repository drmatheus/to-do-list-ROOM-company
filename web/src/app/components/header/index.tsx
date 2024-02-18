import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import globalStyles from "../../page.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={globalStyles.container}>
        <div className={styles.imgContainer}>
          <Image
            src={"/todolist_logo.png"}
            alt="todolist logo"
            width={150}
            height={60}
          />
        </div>
      </div>
    </header>
  );
};
