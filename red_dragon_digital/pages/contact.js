import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Red Dragon Digital</title>
          <meta name="description" content="Drone Photography and media company in Central Florida." />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className={styles.main}>
          <h1 className={styles.title}>
            Contact Us
          </h1>
          <p className={styles.card}>
              Phone: (321)-213-8086
              reddragondigital@gmail.com
              Instagram: @reddragondigital
          </p>
        </main>
  
        <footer className={styles.footer}>
          <a
            href="../"
            target="_blank"
            rel="noopener noreferrer"
          >
            Red Dragon Digital ©2022
          </a>
        </footer>
      </div>
    )
  }
  