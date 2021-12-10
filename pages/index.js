import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import "react-slideshow-image/dist/styles.css";
import Slide from "../components/slide";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mut zum Mammut</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/qvg1efb.css"
        ></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Acht charmante Gedichte, die mit einem Augenzwinkern die kleinen und größeren Themen des Lebens behandeln. Ein Vorlesebuch für alle! Insbesondere Kinder zwischen 4 und 8 Jahren"
        />

        <link rel="canonical" href="/" />
      </Head>

      <main>
        <div id={styles.container1}>
          <div id={styles.title}>
            <p>Das Kinderbuch</p>
            <h1>Mut zum Mammut</h1>
          </div>
          <div id={styles.imgContainer}>
            {/* Slideshow */}
            <Slide />

            {/* <img
              id={styles.titleimg}
              src="/intro.png"
              alt="ImageContainer"
              height="504"
              width="800"
            /> */}
            <img id={styles.mammut} src="/elefant.svg" alt="Elefant" />
          </div>
        </div>
        <div id={styles.container2}>
          <div className={styles.relativ}>
            <div id={styles.text2}>
              <h3>Acht charmante Gedichte,</h3>
              <p>
                die mit einem Augenzwinkern die kleinen und größeren Themen des
                Lebens behandeln. Begleite die tierischen Protagonist*innen auf
                ihren wahnwitzigen Abenteuern. Mit Badewanne auf hoher See oder
                auf einen Abstecher in die Eiszeit. Mit großer Portion Witz,
                Herz und natürlich…<br></br> Mut zum Mammut.
              </p>
              <p>Ein Vorlesebuch für alle.</p>
              <p>
                Insbesondere Kinder<br></br>zwischen 4 und 8 Jahren
              </p>
            </div>
            <a href="mailto:hallo@mut-zum-mammut.de">
              <img
                id={styles.buchkaufen}
                src="/buchkaufen.png"
                alt="Buch Kaufen"
              />
            </a>
          </div>
        </div>
        <div id={styles.container3}>
          <div id={styles.inner_container3}>
            <h2>DU HAST INTERESSE?</h2>
            <p>So kommst du an ein Buch … oder zwei oder drei!</p>
            <div className={styles.row}>
              <div className={styles.item}>
                <h2>1</h2>
                <p>
                  Nimm Kontakt mit uns auf und schreibe uns eine E-Mail. Einfach{" "}
                  <a href="mailto:hallo@mut-zum-mammut.de">hier</a> klicken!
                </p>
              </div>
              <div className={styles.item}>
                <h2>2</h2>
                <p>
                  Wir schicken dir unsere Bezahlmöglichkeiten und nehmen deine
                  Kontaktdaten auf.
                </p>
              </div>
              <div className={styles.item}>
                <h2>3</h2>
                <p>
                  Nach Eingang deines Geldes senden wir dir dein Buch per Post
                  zu.
                </p>
              </div>
            </div>
            <img id={styles.loewe} src="/loewe.svg" alt="Loewe" />
          </div>
        </div>
        <div id={styles.container4}>
          <h2>Die Macherinnen</h2>
          <div className={styles.row}>
            <div className={styles.item}>
              <img src="/fiona.png" alt="fiona" height="300" width="300" />
              <p>
                <b>Fiona</b>
                <br></br> Wenn sie nicht Gedichte dichtet, schreibt sie Lieder,
                organisiert kulturelle Veranstaltungen oder sitzt auf dem
                Rennrad.
              </p>
            </div>
            <div className={styles.item}>
              <img src="/leonie.png" alt="leonie" height="300" width="300" />
              <p>
                <b>Leonie</b>
                <br></br> arbeitet als Bildungsreferentin und ist Fan von
                Popkultur, Postkarten schreiben und aalglatten Alliterationen.
              </p>
            </div>
            <div className={styles.item}>
              <img src="/sari.png" alt="sari" height="300" width="300" />
              <p>
                <b>Sara-Lena</b>
                <br></br> erarbeitet als Art Direktorin mit Illustratoren
                Magazine. Mut zum Mammut hat ihren Mut zu eigenen Illustrationen
                entfacht.
              </p>
            </div>
          </div>
          <div id={styles.text4}>
            <h3>Plötzlich Patentanten –</h3>
            <p>
              und damit der Wunsch, ihren Job richtig gut zu machen. Fiona und
              Leonie, Freundinnen und langjährige Mitbewohnerinnen, verfassten
              die ersten Abenteuer von Edgar, Rallefuch und Rosalinde für ihre
              Patenkinder am WG-Küchentisch. Als leidenschaftliche Supporterin
              der ersten Stunde und passender Weise auch ausgebildeter
              Grafikdesignerin, fand sich mit Sara-Lena die ideale Ergänzung.
              Die tierisch poetischen Geschichten mehrten sich und bekamen
              Farben und Gesichter. Nach vielen Jahren in unseren Köpfen, können
              wir „Mut zum Mammut“ daher heute endlich auch in unseren Händen
              halten.
            </p>
            <img id={styles.qualle} src="/qualle.svg" alt="Qualle" />
          </div>
        </div>
        <div id={styles.container5}>
          <div id={styles.minimues}>
            <img src="/minimues.svg" alt="MiniMüs" height="200" width="200" />
          </div>
          <div className={styles.row}>
            <div className={styles.item}>
              <a href="mailto:hallo@mut-zum-mammut.de">
                <h2>Kontakt</h2>
              </a>
            </div>
            <div className={styles.item}>
              <a
                href="https://instagram.com/mut_zum_mammut/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h2>Instagram</h2>
              </a>
            </div>
          </div>
          <div className={styles.row} id={styles.footer}>
            <div className={styles.item}>
              <p>© Minimüs 2021</p>
            </div>
            <div className={styles.item}>
              <Link href="/impressum">
                <p>Impressum</p>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
