import styles from '../styles/Page.module.scss'
import Head from 'next/head'
import Link from 'next/link'



function Impressum() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Mut zum Mammut</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://use.typekit.net/qvg1efb.css"></link>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
  
        <main>
          <div id={styles.container1} >
            <Link href="/">
            <div id={styles.title}>
            <p>Das Kinderbuch</p>
            <h1>Mut zum Mammut</h1>
            </div>
            </Link>
            <div id={styles.content}>
            <h2>Impressum</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
            </div>
          </div>          
          <div id={styles.container5}>
          <div id={styles.minimues}>
          <img
                src="/minimues.svg"
                alt="MiniMüs"
                height="200"
                width="200"
              />
          </div>
          <div className={styles.row}>
          <div className={styles.item}>
            <a href="mailto:buch@mutzummammut.de?subject=Mut%20zum%20Mammut%20kaufen&amp;body=Hallo%20ihr Drei,%0D%0A%0D%0Aich%20würde%20gerne%20_%20Bücher%20kaufen.%0D%0A%0D%0AViele Grüße"><h2>Kontakt</h2></a>
          </div>
          <div className={styles.item}>
            <a href="https://instagram.com/mut_zum_mammut?igshid=wa8eacrsx2gn"><h2>Instagram</h2></a>
          </div>
          </div>
          <div className={styles.row}  id={styles.footer}
          >
          <div className={styles.item}>
            <p>© Minimüs 2021</p>
          </div>
          <div className={styles.item}>
        <Link href="/impressum">
        <p>Impressum</p>
        </Link>
        </div>
        <div className={styles.item}>
        <Link href="/datenschutz">
          <p>Datenschutz</p>
          </Link>
        </div>
          </div>
          </div>
        </main>
  
        <footer className={styles.footer}>
        </footer>
      </div>
    )
  }
  
export default Impressum