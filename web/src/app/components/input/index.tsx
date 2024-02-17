import React from "react";
import styles from "./index.module.css";
import { FieldError } from "react-hook-form";

type InputProps = {
  register?: any;
  label: string;
  placeholder: string;
  field?: string;
  type?: string;
  error?: FieldError | undefined;
};

export const Input = ({
  register,
  placeholder,
  field,
  type = "text",
  error,
}: InputProps) => {
  return (
    <span className={styles.input}>
      <input type={type} placeholder={placeholder} {...register(field)} />

      {error?.message && <p className="">*{error.message}</p>}
    </span>
  );
};
