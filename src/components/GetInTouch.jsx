import styles from './GetInTouch.module.css'

const EMAIL = 'm.khorashahi7@gmail.com'

export default function GetInTouch() {
  return (
    <section className={styles.section} id="get-in-touch">
      <div className={styles.grid}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Let’s work together.</h2>
          <p className={styles.text}>
            I’m actively seeking a Full-Stack (MERN) Developer role. If you're hiring or looking for
            a developer to join your team, feel free to reach out — I’d love to connect.
          </p>
          <a href={`mailto:${EMAIL}`} className={styles.emailLink}>
            {EMAIL}
            <span className={styles.arrow} aria-hidden>
              →
            </span>
          </a>
        </div>
        <div className={styles.right}>
          <div className={styles.panel}>
            <h2 className={styles.heading}>Let’s Connect</h2>
            <div className={styles.actionsColumn}>
              <a
                href="/assets/Mozhdeh-Khorashahi-cv2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
              >
                Download Resume
              </a>
              <a
                href="https://github.com/mojsun"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.secondaryButton}
              >
                GitHub
              </a>
              <a href="/#software" className={styles.secondaryButton}>
                View Projects
              </a>
            </div>
            <p className={styles.resumeNote}>Resume available in PDF format.</p>
            <p className={styles.availabilityNote}>
              Open to Full-Time | Contract | Remote Opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
