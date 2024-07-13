import React from "react";
import styles from "./style.module.css";
import WhiteLogo from "../../images/logo white.png";

const FooterComponent = () => {
  return (
    <div className={styles.footer}>
      <div className="container">
        <div className={styles.box}>
          <div className={styles.logo}>
            <img src={WhiteLogo} alt="" />
          </div>
          <div className={styles.cards}>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <h6>About</h6>
              </div>
              <ul className={styles.ul}>
                <li>Compare</li>
                <li>Reviews</li>
                <li>Risk-Free Trial</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Podcast</li>
                <li>Blog</li>
              </ul>
            </div>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <h6>Support</h6>
              </div>
              <ul className={styles.ul}>
                <li>FAQ</li>
                <li>Booth Assembly</li>
                <li>Delivery</li>
                <li>Room Service</li>
                <li>Warranty</li>
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>Copyright</li>
              </ul>
            </div>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <h6>Showrooms</h6>
              </div>
              <ul className={styles.ul}>
                <li>New York</li>
                <li>London</li>
                <li>San Francisco</li>
                <li>Paris</li>
                <li>Copenhagen</li>
                <li>Zürich</li>
                <li>Los Angeles</li>
                <li>Berlin</li>
                <li>Belgium</li>
                <li>Virtual Demo</li>
              </ul>
            </div>
            <div className={styles.card}>
              <div className={styles.card_header}>
                <h6>Office</h6>
              </div>
              <ul className={styles.ul}>
                <li>599 Broadway, FL 9 New York, NY 10012</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComponent;
