import type { NextPage } from "next"
import Head from "next/head"

import styles from "../styles/Home.module.css"
import dynamic from "next/dynamic"

const Overlay = dynamic(() => import("../components/overlay"), { ssr: false })

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Glass</title>
        <meta name="description" content="Glass Overlay" />
      </Head>

      <main className={styles.main}>
        <Overlay />
      </main>
    </div>
  )
}

export default Home
