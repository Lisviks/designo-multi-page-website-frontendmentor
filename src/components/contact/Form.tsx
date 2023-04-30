import styles from '@/styles/contact/form.module.scss';
import Image from 'next/image';
import errorIcon from '@/../public/assets/contact/desktop/icon-error.svg';
import { Field, Formik, Form, FormikHelpers, ErrorMessage } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const initialValues: FormValues = { name: '', email: '', phone: '', message: '' };
  const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

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
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          name: Yup.string().required('Can’t be empty'),
          email: Yup.string().required('Can’t be empty').matches(emailRegex, 'Invalid email'),
          phone: Yup.string().required('Can’t be empty'),
          message: Yup.string().required('Can’t be empty'),
        })}
        onSubmit={(values, { setSubmitting }: FormikHelpers<FormValues>) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 500);
        }}
      >
        <Form className={styles.form}>
          <div className={styles.input_field}>
            <Field id='name' name='name' />
            <label htmlFor='name'>Name</label>
            <ErrorMessage name='name' render={(msg) => <Error message={msg} />} />
          </div>
          <div className={styles.input_field}>
            <Field type='email' id='email' name='email' />
            <label htmlFor='email'>Email Address</label>
            <ErrorMessage name='email' render={(msg) => <Error message={msg} />} />
          </div>
          <div className={styles.input_field}>
            <Field type='text' id='phone' name='phone' />
            <label htmlFor='phone'>Phone</label>
            <ErrorMessage name='phone' render={(msg) => <Error message={msg} />} />
          </div>
          <div className={styles.input_field}>
            <Field id='message' name='message' as='textarea'></Field>
            <label htmlFor='message'>Your Message</label>
            <ErrorMessage name='message' render={(msg) => <Error message={msg} />} />
          </div>
          <button type='submit' className={styles.btn}>
            Submit
          </button>
        </Form>
      </Formik>
      <div className={styles.bg_pattern}></div>
    </section>
  );
}

function Error(props: { message: string }) {
  const { message } = props;

  return (
    <span className={styles.error_message}>
      {message}
      <Image src={errorIcon} alt='error icon' />
    </span>
  );
}
