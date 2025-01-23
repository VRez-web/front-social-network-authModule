import styles from "./styles.module.css";
import React from "react";

interface IProps {
  label?: string;
  value: string | number;
  type: "text" | "password" | "email";
  placeholder?: string;
  id?: string;
  handleInputChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  isError?: boolean;
}

export function FormInput({ label = 'default', value, type = 'text', placeholder, id, isError, handleInputChange }: IProps) {
  console.log(value)

  return (
    <fieldset className={styles['form__input-wrapper']}>
      {label &&  <label htmlFor={id}>{label}</label>}
      <div>
        <input id={id} type={type} placeholder={placeholder} onInput={handleInputChange} />
        {isError && <p>error</p>}
      </div>
    </fieldset>
  )
}