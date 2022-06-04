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
          Welcome to Red Dragon Digital
        </h1>

        <p className={styles.description}>
          A digital media company specializing in drone photography and videography.
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Gallery &rarr;</h2>
            <p>Check out examples of Red's previous work.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Contact Us&rarr;</h2>
            <p>Book an appointment today!  Pricing is listed in our menu.</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Services Menu &rarr;</h2>
            <p>Discover what we have to offer for your next event.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Live Feed &rarr;</h2>
            <p>
              Access to the Dragon's live feed when it is available.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Red Dragon Digital ©2022
        </a>
      </footer>
    </div>
  )
}
