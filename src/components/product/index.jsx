import React from 'react'
import styles from './style.module.css'
import ProductImage1 from '../../images/product/1.png'
import ProductImage2 from '../../images/product/2.png'
import ProductImage3 from '../../images/product/3.png'
import ProductImage4 from '../../images/product/4.png'

const ProductComponent = () => {
  return (
    <div id='product'>
      <div className='container'>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={ProductImage1} alt="ProductImage1" />
            </div>
            <div className={styles.card_text}>
              <p>Phone Booth</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={ProductImage2} alt="ProductImage2" />
            </div>
            <div className={styles.card_text}>
              <p>Focus Room</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={ProductImage3} alt="ProductImage3" />
            </div>
            <div className={styles.card_text}>
              <p>Meeting Room</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.card_image}>
              <img src={ProductImage4} alt="ProductImage4" />
            </div>
            <div className={styles.card_text}>
              <p>Open Meeting Room</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductComponent