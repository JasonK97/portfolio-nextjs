import React from 'react'
import styles from '../styles/Home.module.css'

import { SEO } from '../components'

export default function About() {
  return (
    <div className={styles.container}>
      <SEO 
        page='About'
        description='Everthying about Jason Kent and Programming.'
      />

      <main className={styles.main}>
        <h1>About Me</h1>
      </main>
    </div>
  )
}
