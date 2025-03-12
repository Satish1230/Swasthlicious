import { useState } from "react";
import styles from "./accordion.module.css";

export default function AccordionItemComponent({
  index,
  title,
  slidesPerView,
  onClick,
}) {
  const [isActive, setIsActive] = useState(false);

  const toggleAccordion = () => {
    setIsActive((prevIsActive) => !prevIsActive);
    onClick();
  };

  return (
    <div className={styles.accordionItem}>
      <div className={styles.title} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isActive ? "v" : "^"}</span>
      </div>
      {isActive && (
        <div className={styles.content}>
          <div className={styles.carousel}></div>
        </div>
      )}
    </div>
  );
}
