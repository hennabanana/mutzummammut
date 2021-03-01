import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mut zum Mammut</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div id={styles.container1} >
          <div id={styles.title}>
          <p>Das Kinderbuch</p>
          <h1>Mut zum Mammut1</h1>
          </div>
          <div id={styles.imgContainer}>
            <Image
              src="/intro.png"
              alt="ImageContainer"
              height="504"
              width="800"
            />
          </div>
        </div>
        <div id={styles.container2} >
          <div id={styles.elefant}>
        <Image
              src="/elefant.svg"
              alt="Elefant"
              height="300"
              width="200"
            />
            </div>
          <div id={styles.text}>
          <h3>Acht charmante Gedichte,</h3>
          <p>die mit einem Augenzwinkern die kleinen und größeren Themen des Lebens behandeln. 
            Begleite die tierischen Protagonist*innen auf ihren wahnwitzigen Abenteuern. Mit 
            Badewanne auf hoher See oder auf einen Abstecher in die Eiszeit. Mit großer Portion 
            Witz, Herz und natürlich…<br></br> Mut zum Mammut.</p>
            <h3>Ein Vorlesebuch für alle.</h3>
          <p>Insbesondere Kinder<br></br>zwischen 4 und 8 Jahren</p>
          </div>
          <div id={styles.buchkaufen}>
        <Image
              src="/buchkaufen.png"
              alt="Buch Kaufen"
              height="300"
              width="300"
            />
            </div>
        </div>
        <div id={styles.container3}>
        <div id={styles.text}>
          <h2>DU HAST INTERESSE?</h2>
          <p>So kommst du an ein Buch … oder zwei oder drei!</p>
          </div>
          <div className={styles.row}>
          <div className={styles.item}>
            <h2>1</h2>
            <p>Nimm Kontakt mit uns auf und schreibe uns eine E-Mail. Einfach hier klicken!</p>
          </div>
          <div className={styles.item}>
          <h2>2</h2>
            <p>Wir schicken dir unsere Bezahlmöglichkeiten und nehmen deine Kontaktdaten auf.</p>
          </div>
          <div className={styles.item}>
          <h2>3</h2>
            <p>Nach Eingang deines Geldes senden wir dir dein Buch per Post zu.</p>
          </div>
        </div>
        <div id={styles.loewe}>
        <Image
              src="/loewe.svg"
              alt="Loewe"
              height="200"
              width="200"
            />
            </div>
        </div>
        <div id={styles.container4}>
          <h2>Die Macherinnen</h2>
          <div className={styles.row}>
          <div className={styles.item}>
          <Image
              src="/buchkaufen.png"
              alt="Buch Kaufen"
              height="300"
              width="300"
            />
          <p>Fiona</p>
          </div>
          <div className={styles.item}>
          <Image
              src="/buchkaufen.png"
              alt="Buch Kaufen"
              height="300"
              width="300"
            />
          <p>Leonie</p>
          </div>
          <div className={styles.item}>
          <Image
              src="/buchkaufen.png"
              alt="Buch Kaufen"
              height="300"
              width="300"
            />
          <p>Sara-Lena</p>
          </div>
        </div>
        <div id={styles.text}>
          <h3>Lerne uns kennen und erfahre,</h3>
          <p>Lerne uns kennen und erfahre, wie unser Buch entstanden ist! Hier steht ein schöner Text über die Entstehung des Buches, wer wie was gemangt und getan hat, lroem ipsum et odlor. Jetzt kommt nur noch Quatsch: Nach Eingang deines Geldes senden wir dir dein Buch per Post zu. Mut zum Mammut: Acht charmante Gedichte, die mit einem Augenzwinkern die kleinen und größeren Themen des Lebens behandeln. Begleite die tierischen Protagonist*innen auf ihren wahnwitzigen Abenteuern. Mit Badewanne auf hoher See oder auf einen Abstecher in die Eiszeit. Mit großer Portion Witz, Herz und natürlich … Mut zum Mammut.</p>
        </div>
        <div id={styles.qualle}>
        <Image
              src="/qualle.svg"
              alt="Loewe"
              height="400"
              width="400"
            />
        </div>
        </div>
        <div id={styles.container5}>
        <div id={styles.minimues}>
        <Image
              src="/minimues.svg"
              alt="MiniMüs"
              height="200"
              width="200"
            />
        </div>
        <div className={styles.row}>
        <div className={styles.item}>
          <h2>Kontakt</h2>
        </div>
        <div className={styles.item}>
          <h2>Instagram</h2>
        </div>
        </div>
        <div className={styles.row}>
        <div className={styles.item}>
          <p>© Minimüs 2021</p>
        </div>
        <div className={styles.item}>
          <p>Impressum</p>
        </div>
        <div className={styles.item}>
          <p>Datenschutz</p>
        </div>
        </div>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
