import Heading from '../components/Heading';
import styles from './contact.module.css';

const ContactForm = () => {
  

  return (
    <>
    <div>
      <Heading title='Contact me' subtitle='Lets we work together'/>
    </div>
    <div className={styles.section}>
      <h2 className={styles.heading}>Message Me!</h2>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="name"  className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            className={styles.input}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message"  className={styles.label}>Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your Message"
            className={styles.textarea}
          />
        </div>
        <button type="submit" className={styles.button}>
          Send Message
        </button>
      </form>
    </div>
    </>
  );
};

export default ContactForm;
