import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./style.module.css";

function CoruselTopComponent() {
  return (
    <div className={styles.corusel}>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://roohome.com/wp-content/uploads/2017/07/small-luxury-apartment-with-faux-fireplace.jpg"
                class="d-block w-100"
                alt="image"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://img.staticmb.com/mbcontent/images/crop/uploads/2024/3/small-living-room-ideas_0_1200.jpg"
                class="d-block w-100"
                alt="image"
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdRr56dgYXhSDENzK7qarP78LK-_HkzxNWiMDQe-cHo0KJ9GL1Ycm_1hYoUg6GYukSSYs&usqp=CAU"
                class="d-block w-100"
                alt="image"
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
  );
}

export default CoruselTopComponent;
