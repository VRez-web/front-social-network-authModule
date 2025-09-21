import { FormInput } from "../../shared/ui/components/form/input";
import React, { useEffect, useState } from "react";
import styles from './styles.module.css'

export function  FormLoginSecondStep(){
  const [isShowResendCode, setShowResendCode] = useState(false)
  const [timeoutNumber, setTimeoutNumber] = useState(60)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowResendCode(false);
      setTimeoutNumber(timeoutNumber - 1)
    }, 60000);
    return () => {
      clearTimeout(timer)
      setShowResendCode(true)
    };
  }, [])

  return (
    <>
      <p>Your code is available for
        {!isShowResendCode
          ? <span> timeout: 0: {timeoutNumber} </span>
          : <button className={styles['resend-btn']}>resend code </button>}
      </p>
      <FormInput
        type="number"
        label="Code"
        id="code"
        placeholder="Enter your code"
        value={''}
        handleInputChange={console.log}
      />
    </>
  )
}