import React from 'react'
import styles from './style.module.css'
import ShopFirstImage from '../../images/shop/1.png'
import ShopSecondImage from '../../images/shop/2.png'
import ShopThirdImage from '../../images/shop/3.png'

const ShopComponent = () => {
  return (
    <div id='shop'>
      <div className='container'>
        <div className={styles.shop_header}>
          <h3>We take a human approach to a business-to-business industry, breaking the boundaries between corporate and personal, and rethinking every step of the user experience along the way.</h3>
          <h2>We make work, work for you.</h2>
        </div>
        <div className={styles.shop_body}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={ShopFirstImage} alt="ShopFirstImage" />
            </div>
            <div className={styles.card_text}>
              <h2>We sell direct.</h2>
              <p>We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction required.</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_text}>
              <h2>We build with purpose.</h2>
              <p>We’re not just building another room with four walls, we’re building a more productive workspace. We design with you in mind, looking at every detail as an opportunity to enable a better working environment for everyone.</p>
            </div>
            <div className={styles.card_image}>
              <img src={ShopSecondImage} alt="ShopSecondImage" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={ShopThirdImage} alt="ShopThirdImage" />
            </div>
            <div className={styles.card_text}>
              <h2>We design sustainably.</h2>
              <p>From design to delivery, we strive to lessen our impact on the environment. Our products are engineered with recycled materials and replace multiple cycles of construction, minimizing noise and our footprint.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShopComponent