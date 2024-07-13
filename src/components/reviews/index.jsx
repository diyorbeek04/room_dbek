import React from 'react'
import styles from './style.module.css'
import StarIcon from '@mui/icons-material/Star';
import ReviewFirstImage from '../../images/review/1.png'
import ReviewSecondImage from '../../images/review/2.png'
import ReviewThirdImage from '../../images/review/3.png'

const ReviewsComponent = () => {
  return (
    <div className={styles.review}>
      <div className='container'>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.stars}>
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
            </div>
            <div className={styles.desc}>
              <p>“We can now have meetings in peace.”</p>
            </div>
            <div className={styles.title}>
              <img src={ReviewFirstImage} alt="ReviewFirstImage" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.stars}>
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
            </div>
            <div className={styles.desc}>
              <p>“Amazing private space to get work done.”</p>
            </div>
            <div className={styles.title}>
              <img src={ReviewSecondImage} alt="ReviewSecondImage" />
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.stars}>
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
              <StarIcon className={styles.star} />
            </div>
            <div className={styles.desc}>
              <p>“Our booths are in constant use.”</p>
            </div>
            <div className={styles.title}>
              <img src={ReviewThirdImage} alt="ReviewThirdImage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReviewsComponent