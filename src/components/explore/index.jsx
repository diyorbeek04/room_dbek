import React from "react";
import styles from "./style.module.css";
import ExploreFirstImage from "../../images/explore/1.png";
import ExploreSecondImage from "../../images/explore/2.png";
import ExploreThirdImage from "../../images/explore/3.png";

const ExploreComponent = () => {
  return (
    <div id="explore" className={styles.explore}>
      <div className="container">
        <div className={styles.header}>
          <h2>
            Our simple and seamless modular products allow teams to shape and
            then reshape their work environment with ease.
          </h2>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={ExploreFirstImage} alt="ExploreFirstImage" />
            </div>
            <div className={styles.card_text}>
              <h3>Cost-effective</h3>
              <p>
                At a fraction of the cost of traditional construction, our pre-fab solutions create additional space for focused work and collaboration without constant noise, debris and distraction.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={ExploreSecondImage} alt="ExploreSecondImage" />
            </div>
            <div className={styles.card_text}>
              <h3>Time Saving</h3>
              <p>
              Thoughtful design ensures simple installation in a few hours or less. And, because our products are safety ensured, you'll never have to spend time or money chasing after permits, contractors, and more.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={ExploreThirdImage} alt="ExploreThirdImage" />
            </div>
            <div className={styles.card_text}>
              <h3>Flexible</h3>
              <p>
              Unlike traditional construction, our purpose-built products were designed to adapt with your workspace and can easily be positioned in various places throughout your office, or to an entirely new location.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreComponent;
