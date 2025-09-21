import { FormInput } from "../../shared/ui/components/form/input";
import styles from "./styles.module.css";
import React from "react";
import { useFetch } from 'host/useFetch'

export function FormLoginFirstStep() {
  async function login() {
    const { data } = await useFetch(`${process.env.BASE_URL}auth/login`, {
      method: "POST",
      body:{
        email: 'test',
        password: '123456',
      }
    });

    console.log(data)
  }

  return (
    <>
      <FormInput
        type="email"
        label="Email"
        id="email"
        placeholder="Enter your email"
        value={''}
        handleInputChange={console.log}
      />
      <FormInput
        type="password"
        label="Password"
        id="password"
        placeholder="Enter your password" value={''}
      />
      <div className={styles['auth__form-actions']}>
        <div className={styles['auth__form-checkbox']}>
          <input type="checkbox" id={'rememberMe'} />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <a href="" className={styles['auth__form-link']}>
          Forgot password?
        </a>
      </div>
      <button className={styles['auth__form-submit']} onClick={login}>Sign in</button>
      <div className={styles['auth__form-footer']}>
        <p>Don't have an account?</p> <a href="">Sign up</a>
      </div>
    </>
  )
}