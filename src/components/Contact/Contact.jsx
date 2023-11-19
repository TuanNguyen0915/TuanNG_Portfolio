import { useState } from "react"
import styles from './Contact.module.css'


const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

  }
  return (
    <section>
      <div className={styles.container} id="contact">
        <div className={styles.header}>
          <div className={styles.headerDecs}>
            <h2>Contact</h2>
            <h1>Get In Touch</h1>
            <p>Thank you for taking the time to visit my portfolio. I hope you found it informative and engaging. If you have any feedback or suggestions on how I can improve my skills, please don't hesitate to let me know. I'm always looking for ways to enhance my work and your input is greatly appreciated. Thank you again for stopping by!</p>
          </div>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.leftSide}>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;I take great pleasure in collaborating with passionate and committed individuals who strive to make the world a better place. Their dedication and creativity inspire me to push my limits and achieve new heights. If you share this vision and would like to work together, please don't hesitate to reach out to me. I'm always looking for new opportunities to learn and grow.
            </p>
          </div>
          <div className={styles.rightSide}>
            <form action="" className={styles.formControl} onSubmit={handleSubmit}>
              <input
                type="text" placeholder="Your Full Name"
                value={form.name} name="name"
                required onChange={handleChange}
                autoComplete="off"
              />
              <input
                type="text" placeholder="Your Email"
                value={form.email} name="email"
                required onChange={handleChange}
                autoComplete="off"

              />
              <textarea
                rows="6" placeholder="Your Message"
                value={form.message} name='message'
                required onChange={handleChange}
                autoComplete="off"

              />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact