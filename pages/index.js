import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Capt Singh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {/* Create a hero page section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleFirst}>Hi, I'm</span>
              <span className={styles.heroTitleSecond}>Capt Singh</span>
            </h1>
            <p className={styles.heroDescription}>
              I'm a software engineer based in New Delhi, India.
            </p>
            <div className={styles.heroButtons}>
              <a
                href="https://www.linkedin.com/in/captsingh/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroButton}
              >
                <Image
                  src="/images/linkedin.svg"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  layout="fixed"
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
