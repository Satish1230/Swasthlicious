import React from "react";
import styles from "./ReviewCard.module.css";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const getStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} color="#56ab2f" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} color="#56ab2f" />);
    } else {
      stars.push(<FaRegStar key={i} color="#56ab2f" />);
    }
  }
  return stars;
};

const ReviewCard = ({
  profileImage,
  name,
  role,
  testimonial,
  ratings,
  animationClass,
}) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.imageSection}>
        <Image
          src={profileImage}
          alt={name}
          className={styles.profileImage}
          width={200}
          height={200}
          quality={20}
        />
        <div className={styles.rating}>{getStars(ratings)}</div>
      </div>
      <div className={styles.textSection}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.testimonial}>{testimonial}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
