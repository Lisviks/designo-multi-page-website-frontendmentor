import styles from '@/styles/contact/form.module.scss';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import errorIcon from '@/../public/assets/contact/desktop/icon-error.svg';

export default function Form() {
  const [isNameEmpty, setIsNameEmpty] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isPhoneEmpty, setIsPhoneEmpty] = useState(false);
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const checkEmail = (email: string) => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailRegex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  };

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      name: { value: string };
      email: { value: string };
      phone: { value: string };
      message: { value: string };
    };

    checkEmail(target.email.value);

    console.log(`Name: ${target.name.value}`);
    console.log(`Email: ${target.email.value}`);
    console.log(`Phone: ${target.phone.value}`);
    console.log(`Message: ${target.message.value}`);
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
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.input_field}>
          <input type='text' id='name' onChange={(e) => handleChange(e, setIsNameEmpty)} required />
          <label htmlFor='name'>Name</label>
          {isNameEmpty && <ErrorMessage />}
        </div>
        <div className={styles.input_field}>
          <input type='email' id='email' onChange={(e) => handleChange(e, setIsEmailEmpty)} required />
          <label htmlFor='email'>Email Address</label>
          {(isEmailEmpty && <ErrorMessage />) || (!isEmailValid && <ErrorMessage message='Invalid Email' />)}
        </div>
        <div className={styles.input_field}>
          <input type='text' id='phone' onChange={(e) => handleChange(e, setIsPhoneEmpty)} required />
          <label htmlFor='phone'>Phone</label>
          {isPhoneEmpty && <ErrorMessage />}
        </div>
        <div className={styles.input_field}>
          <textarea id='message' onChange={(e) => handleChange(e, setIsMessageEmpty)} required></textarea>
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

function ErrorMessage(props: { message?: string }) {
  const { message = 'Can’t be empty' } = props;

  return (
    <span className={styles.error_message}>
      {message}
      <Image src={errorIcon} alt='error icon' />
    </span>
  );
}
