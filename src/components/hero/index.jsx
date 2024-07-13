import React from 'react'
import styles from './style.module.css'
import HeroImage from '../../images/hero image.png'

const HeroComponent = () => {
  return (
    <div className='container'>
      <img className={styles.hero_image} src={HeroImage} alt="hero image" />
    </div>
  )
}

export default HeroComponent