import styles from '@/styles/contact/form.module.scss';

export default function Form() {
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
          <input type='text' id='name' />
          <label htmlFor='name'>Name</label>
        </div>
        <div className={styles.input_field}>
          <input type='email' id='email' />
          <label htmlFor='email'>Email Address</label>
        </div>
        <div className={styles.input_field}>
          <input type='text' id='phone' />
          <label htmlFor='phone'>Phone</label>
        </div>
        <div className={styles.input_field}>
          <textarea id='message'></textarea>
          <label htmlFor='message'>Your Message</label>
        </div>
        <button type='submit' className={styles.btn}>
          Submit
        </button>
      </form>
      <div className={styles.bg_pattern}></div>
    </section>
  );
}
