import React from "react";
import dynamic from "next/dynamic";
import styles from '../styles/slide.module.scss'

const Slide = dynamic(
  () => import("react-slideshow-image").then(slideshow => slideshow.Slide),
  { ssr: false }
);

const slideImages = [
  "/intro_1.png",
  "/intro_2.png",
  "/intro_3.png",
  "/intro_4.png",
  "/intro_5.png",
  "/intro_6.png",
  "/intro_7.png",
];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
};

const Slideshow = () => {
  return (
    <div className={styles.container}>
      <Slide {...properties}>
        <div className={styles.eachslide}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${slideImages[0]})` }}
          >
          </div>
        </div>
        <div className={styles.eachslide}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${slideImages[1]})` }}
          >
          </div>
        </div>
        <div className={styles.eachslide}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${slideImages[2]})` }}
          >
          </div>
        </div>
        <div className={styles.eachslide}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${slideImages[3]})` }}
          >
          </div>
        </div>
        <div className={styles.eachslide}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${slideImages[4]})` }}
          >
          </div>
        </div>
        <div className={styles.eachslide}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${slideImages[5]})` }}
          >
          </div>
        </div>
        <div className={styles.eachslide}>
          <div
            className={styles.image}
            style={{ backgroundImage: `url(${slideImages[6]})` }}
          >
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
