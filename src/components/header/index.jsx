import React from "react";
import styles from "./style.module.css";
import HeaderLogo from '../../images/logo.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderComponent = () => {
  return (
    <header>
      <div className={styles.header_top}>
        <div className="container">
          <div className={styles.top_box}>
            <p>Contact Sales</p>
            <p>TEL 646-791-3726</p>
            <form className={styles.form}>
              <select>  
                <option value="US">US</option>
                <option value="UZ">UZ</option>
                <option value="RU">RU</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.header_bottom}>
        <div className="container">
          <div className={styles.bottom_box}>
            <div className={styles.logo}>
              <img src={HeaderLogo} alt="Site logo" />
            </div>
            <div className={styles.menu}>
              <ul>
                <li><a href="#product">products</a></li>
                <li><a href="#">explore</a></li>
                <li><a href="#">shop</a></li>
              </ul>
            </div>
            <div className={styles.icons}>
              <p className={styles.first}><LocationOnIcon /> Showrooms</p> 
              <p className={styles.second}><ShoppingCartIcon /></p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderComponent;
