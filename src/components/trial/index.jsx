import React from 'react'
import styles from './style.module.css'
import TrialImageFirst from '../../images/trial/1.png'
import TrialImageSecond from '../../images/trial/2.png'
import TrialImageThird from '../../images/trial/3.png'

const TrialComponent = () => {
  return (
    <div>
      <div className='container'>
        <div className={styles.box}>
          <div className={styles.header}>
            <h1>100 day risk-free trial</h1>
          </div>
          <div className={styles.cards}>
              <div className={styles.card}>
                <div className={styles.card_image}> 
                  <img src={TrialImageFirst} alt="TrialImageFirst" />
                </div>
                <div className={styles.card_text}>
                  <p>FREE SHIPPING</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card_image}> 
                  <img src={TrialImageSecond} alt="TrialImageSecond" />
                </div>
                <div className={styles.card_text}>
                  <p>PLUG & PLAY</p>
                </div>
              </div>
              <div className={styles.card}>
                <div className={styles.card_image}> 
                  <img src={TrialImageThird} alt="TrialImageThird" />
                </div>
                <div className={styles.card_text}>
                  <p>FREE RETURNS</p>
                </div>
              </div>
          </div>
          <div className={styles.bottom}>
            <button className={styles.bottom_button}>GET A ROOM</button>
            <p>Terms & Conditions apply</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrialComponent