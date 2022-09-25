import Head from 'next/head'
import styles from './index.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>マツダ ミチルのポートフォリオ</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.mainvisual}>
          <div className={styles.mainvisual_inner}>
            <h1 className={styles.title}>
            マツダ ミチルのポートフォリオ<br />
            <span>PORTFOLIO SITE</span>
            </h1>
          </div>
        </div>
        {/* <img src="/photo01.png" alt="Vercel Logo" className="photo" /> */}
        <section className={styles.theme}>
          <h2 className={styles.section_title}>THEME</h2>
          <p className={styles.section_text}>私たちの日常に関わるあらゆるものが<br />
          より親切に、伝わるものになるように。</p>
          <p className={styles.section_text_detail}>
            教育・エンタメ・行政・医療・製造業、生活を支える様々な分野の課題に向き合いより快適に、より親切に、お客様と一緒に作り上げていきます。
          </p>
        </section>
        <section className={styles.skill}>
          <h3 className={styles.skill_title}>要件定義からデザイン、コーディング、保守運用まで柔軟に。</h3>
          <ul className={styles.skill_list}>
            <li className={styles.skill_list_item}>要件定義</li>
            <li className={styles.skill_list_item}>デザイン</li>
            <li className={styles.skill_list_item}>コーディング</li>
            <li className={styles.skill_list_item}>保守運用</li>
          </ul>
        </section>
        <section className={styles.works}>
          <h2 className={styles.section_title}>WORKS</h2>
          <ul className={styles.works_list}>
            <li className={styles.works_list_item}></li>
            <li className={styles.works_list_item}></li>
            <li className={styles.works_list_item}></li>
          </ul>
        </section>
      </main>
      <footer className={styles.footer}>
      MICHIRU MATSUDA PORTFOLIO
      </footer>


      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Noto Sans JP', sans-serif;
          background: #FAF9FB;
        }

        * {
          box-sizing: border-box;
        }

        a {
          color: #000
        }
      `}</style>
    </div>
  )
}
