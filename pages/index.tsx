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
        
        <section className={styles.theme}>
          <div>
            <h2 className={styles.section_title}>
              THEME<br />
            <span>大切にしていること</span>  
            </h2>
            <p className={styles.section_text}>私たちの日常に関わるあらゆるものが<br />
            より親切に、伝わるものになるように。</p>
            <p className={styles.section_text_detail}>
              教育・エンタメ・行政・医療・製造業、生活を支える様々な分野の課題に向き合いより快適に、より親切に、お客様と一緒に作り上げていきます。
            </p>
          </div>
          <div><img src="/photo01.png" alt="Vercel Logo" className="photo" /></div>
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
            <li className={styles.works_list_item}>
              <a href="#">
                <img src="/works01.png" alt="Vercel Logo" className="photo" />
                <p className={styles.works_list_item_title}>伊藤江星 書道教室</p>
              </a>
            </li>
            <li className={styles.works_list_item}>
              <a href="#">
                <img src="/works01.png" alt="Vercel Logo" className="photo" />
                <p className={styles.works_list_item_title}>伊藤江星 書道教室</p>
              </a>
            </li>
            <li className={styles.works_list_item}>
              <a href="#">
                <img src="/works01.png" alt="Vercel Logo" className="photo" />
                <p className={styles.works_list_item_title}>伊藤江星 書道教室</p>
              </a>
            </li>
          </ul>
        </section>
        <section className={styles.history}>
          <h3 className={styles.history_title}>HISTORY</h3>
          <ul className={styles.history_list}>
            <li><span>1991.09 - 2011.03</span>徳島生まれ</li>
            <li><span>2011.04 - 2015.03</span>和歌山大学教育学部</li>
            <li><span>2015.04 - 2018.06</span>学生服メーカーで生産管理担当</li>
            <li><span>2018.08 - 2018.11</span>職業訓練でWEB制作について学ぶ</li>
            <li><span>2018.12 - 2020.06</span>マークアップエンジニア</li>
            <li><span>2020.06 - 2022.10</span>デザイナー・ディレクター・フロントエンドエンジニア</li>
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
          over-flow: hidden;
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
