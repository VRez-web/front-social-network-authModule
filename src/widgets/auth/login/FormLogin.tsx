import styles from "./styles.module.css";
import React, { useState } from "react";
import { FormLoginFirstStep } from "../../../features/auth/FormLoginFirstStep";
import { FormLoginSecondStep } from "../../../features/auth/FormLoginSecondStep";

export function AuthFormLogin() {
  const [step, setStep] = useState(1)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <div className={styles.auth}>
      <form className='auth__form' onSubmit={handleSubmit}>
        <h2 className={styles['auth__form-title']}>Welcome back</h2>
        <p className={styles['auth__form-subtitle']}>Please enter your details to sign in</p>
        {step === 1 ? <FormLoginFirstStep /> : <FormLoginSecondStep />}
      </form>
    </div>
  )
}