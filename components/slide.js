import React from "react";
import dynamic from "next/dynamic";
import styles from '../styles/Slide.module.scss'

const Slide = dynamic(
  () => import("react-slideshow-image").then(slideshow => slideshow.Slide),
  { ssr: false }
);

const slideImages = [
  "/intro.png",
  "/intro.png",
  "/intro.png",
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
      </Slide>
    </div>
  );
};

export default Slideshow;
