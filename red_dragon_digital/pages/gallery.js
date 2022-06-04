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
            Gallery
          </h1>
        </main>
  
        <footer className={styles.footer}>
          <a
            href="../"
            rel="noopener noreferrer"
          >
            Red Dragon Digital ©2022
          </a>
        </footer>
      </div>
    )
  }
  