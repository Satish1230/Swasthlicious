"use client";
import { useState } from "react";
import AccordionItemComponent from "./AccordionItemComponent";
import styles from "../accordion/accordion.module.css";
import Image from "next/image";

export default function AccordionComponent() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const accordionData = [
    {
      index: 0,
      title: "Data Science",
      image:
        "https://drive.google.com/uc?export=view&id=1i-h6_-Zc4qbOarbNyhdlO1W6L_YnyznC",
    },
    {
      index: 1,
      title: "Data Analytics",
      image:
        "https://drive.google.com/uc?export=view&id=1wxkgtr31YKintpmE5XBAEBEhzmg3hYk_",
    },
    {
      index: 2,
      title: "Artificial Intelligence",
      image:
        "https://drive.google.com/uc?export=view&id=1bV_WsT2Hj13u_q4EZ3BIFXt-ZDriow-Y",
    },
  ];

  return (
    <div className={styles.container}>
      {/* <div className={styles.imageAbove}>
        <Image
          src="https://drive.google.com/uc?export=view&id=1tAGH00HADOp35YzQteJe0L54SZf8M3pY"
          alt="Decorative Top Image"
          width={500} // adjust dimensions as needed
          height={200} // adjust dimensions as needed
        />
      </div> */}
      <div className={styles.imageContainer}>
        <Image
          src={
            selectedImageIndex === null
              ? "https://drive.google.com/uc?export=view&id=1i-h6_-Zc4qbOarbNyhdlO1W6L_YnyznC"
              : accordionData[selectedImageIndex].image
          }
          alt="Banner image"
          width={600}
          height={400}
          style={{ borderRadius: "12px", filter: "brightness(49%)" }}
        />

        {/* <div className={styles.heading}>
          <h2></h2>
        </div> */}
      </div>

      <div className={styles.accordionWrapper}>
        <div className={styles.scrollableAccordion}>
          {accordionData.map(({ index, title }) => (
            <AccordionItemComponent
              key={index}
              index={index}
              title={title}
              onClick={() => setSelectedImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
