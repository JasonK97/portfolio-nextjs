import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { SEO } from '../components'

export default function Home() {
  return (
    <div className={styles.container}>
      <SEO 
        page='Home'
        description='Jason Kent, Software and Full Stack Developer website built in Next.js'
      />

      <main className={styles.main}>
        <Image 
          src='/../public/static/me-blackbg.png' 
          alt='Jason Kent Logo' 
          width={300}
          height={300}
        />

        <h1 className={styles.title}>
          I'm Jason Kent.
        </h1>

        <p className={styles.description}>
          I am a Full Stack Developer and Software Engineer.
        </p>

        <p>
          During work hours I build and manage websites, but 
          in my free time I love hunting, soccer, playing games, 
          and hanging out with my family.
        </p>
      </main>
    </div>
  )
}
