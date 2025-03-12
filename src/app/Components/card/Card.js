import Image from "next/image";
import styles from "./Card.module.css";
import { use } from "react";

const Card = ({
  title,
  subtitle,
  duration,
  capstoneProjects,
  certification,
  additionalInfo,
  bannerImg,
  logoImg,
}) => {
  return (
    <div className={styles.cardContainer}>
      {/* Banner Image */}
      <div className={styles.cardImageContainer}>
        {/* Ensure width and height are defined properly */}
        <Image
          className={styles.bannerImage}
          src={bannerImg}
          alt="Card Banner"
          width={200}
          height={200}
        />
        <h3 className={styles.cardTitle}>{title}</h3>
        <div className={styles.logoImageContainer}>
          <Image
            className={styles.logoImage}
            src={logoImg}
            alt="Company Logo"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>

      {/* Card Content */}
      <div className={styles.cardContent}>
        <h3 className={styles.cardSubtitle}>{subtitle}</h3>
        <div className={styles.cardContentdetails}>
          <ul className={styles.cardDetails}>
            <li className={styles.cardDetailItem}>⏳ {duration}</li>
            <li className={styles.cardDetailItem}>✔ {capstoneProjects}</li>
            <li className={styles.cardDetailItem}>✔ {certification}</li>
            {additionalInfo && (
              <li className={styles.cardDetailItem}>✔ {additionalInfo}</li>
            )}
          </ul>
        </div>
      </div>

      {/* Footer with fixed buttons */}
      <div className={styles.cardFooter}>
        <button className={styles.syllabusButton}>Syllabus</button>
        <button className={styles.viewDetailsButton}>View Details</button>
      </div>
    </div>
  );
};

export default Card;
