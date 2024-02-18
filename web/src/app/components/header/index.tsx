import Image from "next/image";
import React from "react";
import styles from "./index.module.css";
import globalStyles from "../../page.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={globalStyles.container}>
        <div className={styles.logo}>
          <Image
            className={styles.leaf}
            src={"/leaf.png"}
            alt="todolist logo"
            width={14}
            height={14}
          />
          <Image
            src={"/notepad.png"}
            alt="todolist logo"
            width={30}
            height={32}
          />
          <div className={styles.textContainer}>
            <div>
              <span>TO </span>
              <span>DO </span>
            </div>
            <span>List</span>
          </div>
        </div>
      </div>
    </header>
  );
};
