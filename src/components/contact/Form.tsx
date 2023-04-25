import styles from '@/styles/contact/form.module.scss';
import Image from 'next/image';
import React, { useState } from 'react';
import errorIcon from '@/../public/assets/contact/desktop/icon-error.svg';

export default function Form() {
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
    setIsNameEmpty: Function
  ) => {
    const target = e.target as typeof e.target & {
      value: { length: number };
      parentElement: HTMLDivElement;
      id: string;
    };

    if (target.value.length < 1) {
      setIsNameEmpty(true);
    } else {
      setIsNameEmpty(false);
    }
  };

  return (
    <section className={styles.form_section}>
      <div className={styles.content}>
        <h1>Contact Us</h1>
        <p>
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your
          business grow. If you are looking for unique digital experiences that’s relatable to your users, drop us a
          line.
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.input_field}>
          <input type='text' id='name' onChange={(e) => handleChange(e, setIsNameEmpty)} />
          <label htmlFor='name'>Name</label>
          {isNameEmpty && <ErrorMessage />}
        </div>
        <div className={styles.input_field}>
          <input type='email' id='email' onChange={(e) => handleChange(e, setIsEmailEmpty)} />
          <label htmlFor='email'>Email Address</label>
          {isEmailEmpty && <ErrorMessage />}
        </div>
        <div className={styles.input_field}>
          <input type='text' id='phone' onChange={(e) => handleChange(e, setIsPhoneEmpty)} />
          <label htmlFor='phone'>Phone</label>
          {isPhoneEmpty && <ErrorMessage />}
        </div>
        <div className={styles.input_field}>
          <textarea id='message' onChange={(e) => handleChange(e, setIsMessageEmpty)}></textarea>
          <label htmlFor='message'>Your Message</label>
          {isMessageEmpty && <ErrorMessage />}
        </div>
        <button type='submit' className={styles.btn}>
          Submit
        </button>
      </form>
      <div className={styles.bg_pattern}></div>
    </section>
  );
}

function ErrorMessage() {
  return (
    <span className={styles.error_message}>
      Can’t be empty
      <Image src={errorIcon} alt='error icon' />
    </span>
  );
}
