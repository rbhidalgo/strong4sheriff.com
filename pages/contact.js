import styles from "../styles/Contact.module.scss"

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Get in touch</h1>
      <form className={styles.form} name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="text" className={styles.inputS} placeholder="name" name="name" required/>
          <input type="tel" className={styles.inputS} placeholder="Phone" name="Phone" />
          <input type="email" className={styles.inputL} placeholder="Email" name="Email" required/>
          <textarea className={styles.textArea} name="Message" rows="10" placeholder="message" required/>
          <input type="hidden" name="contact" value="contact" />
          <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export default Contact
