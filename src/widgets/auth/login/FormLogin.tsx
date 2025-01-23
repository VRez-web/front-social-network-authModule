import styles from "./styles.module.css";
import React from "react";

import { FormInput } from "../../../shared/ui/components/form/input";

export function AuthFormLogin() {

  return (
    <div className={styles.auth}>
      <form className='auth__form'>
        <h2 className={styles['auth__form-title']}>Welcome back</h2>
        <p className={styles['auth__form-subtitle']}>Please enter your details to sign in</p>
        <FormInput type="email" label="Email" id="email" placeholder="Enter your email" value={''} handleInputChange={console.log}/>
        <FormInput type="password" label="Password" id="password" placeholder="Enter your password" value={''} />
        <div className={styles['auth__form-actions']}>
          <div className={styles['auth__form-checkbox']}>
            <input type="checkbox" />
            <label htmlFor="">Remember me</label>
          </div>
          <a href="" className={styles['auth__form-link']}>
            Forgot password?
          </a>
        </div>
        <button className={styles['auth__form-submit']}>Sign in</button>
        <div className={styles['auth__form-footer']}>
          <p>Don't have an account?</p> <a href="">Sign up</a>
        </div>
      </form>
    </div>
  )
}