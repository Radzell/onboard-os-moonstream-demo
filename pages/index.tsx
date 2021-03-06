import type { NextPage } from 'next'
import Head from 'next/head'
import { OnboardOS, useOnboardOS } from 'onboard-os'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const onboardos = useOnboardOS()

  const onValidate = async (stepId: string, stepType: string, data: object) => {
    onboardos.goForward()
    return true
  }

  const onEnd = (data: object, schema: object) => {

  }

  const onAction = (stepId: string, stepType: string, data: Record<string, any>) => {

  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       <OnboardOS apiKey={'9v67jDDsArXLQFT9gFTR'} register={onboardos.register} onValidate={onValidate} onEnd={onEnd} onAction={onAction} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
