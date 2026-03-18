import styles from './SkillsMarquee.module.css'

const lineOneSkills = [
  // Front-End
  { label: 'React.js', big: true },
  { label: 'Next.js (basic)', big: false },
  { label: 'JavaScript (ES6+)', big: true },
  { label: 'TypeScript (basic)', big: false },
  { label: 'HTML5', big: true },
  { label: 'CSS3', big: true },
  { label: 'Tailwind CSS', big: false },
  { label: 'Responsive Web Design', big: false },

  // Back-End
  { label: 'Node.js', big: true },
  { label: 'Express.js', big: true },
  { label: 'Python', big: true },
  { label: 'RESTful APIs', big: false },
  { label: 'GraphQL', big: true },
  { label: 'Auth (JWT, login/signup)', big: false },
]

const lineTwoSkills = [
  // Databases
  { label: 'MongoDB', big: true },
  { label: 'MongoDB Atlas', big: false },
  { label: 'MySQL', big: true },
  { label: 'SQL & joins', big: false },

  // API & Integration
  { label: 'REST APIs', big: false },
  { label: 'GraphQL APIs', big: true },
  { label: 'CRUD operations', big: true },
  { label: 'JSON handling', big: false },

  // Tools & Technologies
  { label: 'Git & GitHub', big: true },
  { label: 'Postman', big: false },
  { label: 'VS Code', big: false },
  { label: 'PyCharm', big: false },
  { label: 'Chrome DevTools', big: false },

  // Deployment & Cloud
  { label: 'Heroku', big: false },
  { label: 'Vercel', big: true },
  { label: 'Basic AWS (S3, EC2, Lambda, RDS)', big: false },
]

function Line({ items, direction }) {
  const dirClass = direction === 'rtl' ? styles.rightToLeft : styles.leftToRight

  return (
    <div className={`${styles.line} ${dirClass}`}>
      <div className={styles.track}>
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item.label}-${index}`}
            className={`${styles.item} ${item.big ? styles.itemBig : ''}`}
          >
            <span>{item.label}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function SkillsMarquee() {
  return (
    <section className={styles.section} id="skills">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Skills</h2>
        <div className={styles.lines}>
          <Line items={lineOneSkills} direction="ltr" />
          <Line items={lineTwoSkills} direction="rtl" />
        </div>
      </div>
    </section>
  )
}

