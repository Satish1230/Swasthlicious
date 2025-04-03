"use client";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import styles from "./Reviews.module.css";
import ReviewCard from "./ReviewCard";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
// import MetricsBox from "../footer/MetricsBox";

const Reviews = () => {
  const images = [
    {
      id: 1,
      src: "https://drive.google.com/uc?export=view&id=1-fwBKw7lFUdZMTcjQmypq-GR0YZeDqW6",
      alt: "Person 1",
      name: "Bhavya Singhal",
      role: "Software Engineer",
      testimonial:
        "I am away from my hometown but Mealawe makes it possible to deliver daily homemade food.",
      companyLogo: "/card/amazon.png",
      ratings: "5",
    },
    {
      id: 2,
      src: "https://drive.google.com/uc?export=view&id=1THQGXC74nDZTGDafbXyOP89iGRimpWUP",
      alt: "Person 2",
      name: "Irsar Ansari",
      role: "Data Analyst",
      testimonial:
        "Thanks to the Learnbay data science course and outstanding assistance, I could ace the TCS interview and secure a job with a 210% pay hike. My understanding of the course was greatly improved by the real-time projects.",
      companyLogo: "/profile/hcl.png",
      ratings: "4",
    },
    {
      id: 3,
      src: "https://drive.google.com/uc?export=view&id=1nArZJONeo_6fUYHaNpIIrHmPvAohO5At",
      alt: "Person 4",
      name: "Laxmi Verma",
      role: "ML Engineer",
      testimonial:
        "Switching to data science with Learnbay was a game changer. After one on one doubt sessions and working on several projects I got a job offer from Natwest with 80% salary hike while I was still in the middle of course.",
      companyLogo: "/profile/tcs.png",
      ratings: "3.5",
    },
    {
      id: 4,
      src: "https://drive.google.com/uc?export=view&id=1f_nC5MCytH63HhyrQd3Rei6r0ROJcgYc",
      alt: "Person 3",
      name: "Jaya Sinha",
      role: "Data Scientist",
      testimonial:
        "Moved from teaching to data science with Learnbay's help. Their course was easy to follow, even for someone like me without a tech background. In six months, I got to learn how data science is used in the real world.",
      companyLogo: "/profile/cendrom.png",
      ratings: "5",
    },
    {
      id: 5,
      src: "https://drive.google.com/uc?export=view&id=15f4Sz-vlAzQ7X8S0xbe6r3Z1WOh8f-uN",
      alt: "Person 5",
      name: "Preksha Singh",
      role: "AI Engineer",
      testimonial:
        "The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate.",
      companyLogo: "/profile/mancompany.png",
      ratings: "4",
    },
    {
      id: 6,
      src: "https://drive.google.com/uc?export=view&id=1C5lAyDjKUwYd5gq8CELbpFXXTqxzRh_a",
      alt: "Person 6",
      name: "Preksha Singh",
      role: "AI Engineer",
      testimonial:
        "The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate.",
      companyLogo: "/profile/mancompany.png",
      ratings: "4.5",
    },
    {
      id: 7,
      src: "https://drive.google.com/uc?export=view&id=1oBV10F7M0EpDrof94WqD0l9ug1AsIcme",
      alt: "Person 6",
      name: "Preksha Singh",
      role: "AI Engineer",
      testimonial:
        "The faculties here are top notch. Right from enrollment to getting a good job, they keep putting enormous efforts for each and every candidate.",
      companyLogo: "/profile/mancompany.png",
      ratings: "5",
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const swiperRef = useRef(null);

  const isPrevDisabled = selectedIndex === 0;
  const isNextDisabled = selectedIndex === images.length - 1;

  const handleProfileChangeNext = (newIndex) => {
    setSelectedIndex(newIndex);
    if (swiperRef.current) {
      swiperRef.current.slideTo(newIndex);
    }
  };

  const handleProfileChangePrev = (newIndex) => {
    setSelectedIndex(newIndex);
    if (swiperRef.current) {
      swiperRef.current.slideTo(newIndex);
    }
  };

  const slidePrev = () => {
    if (!isPrevDisabled) handleProfileChangePrev(selectedIndex - 1);
  };

  const slideNext = () => {
    if (!isNextDisabled) handleProfileChangeNext(selectedIndex + 1);
  };

  const handleProfileClick = (index) => {
    if (index < selectedIndex) {
      handleProfileChangePrev(index);
    } else if (index > selectedIndex) {
      handleProfileChangeNext(index);
    }
  };

  return (
    <div className={styles.Container}>
      <div className={styles.wrapper}>
        <div className={styles.heading}>
          <h2>
            Are You <br />
          </h2>
          {/* <p>Discover what our learners say about us</p> */}
        </div>
        <div className={styles.leftWrapper}>
          <div
            className={styles.brown}
            style={{ transform: `translateX(-${selectedIndex * 100}%)` }}
          >
            {images.map((data, i) => {
              return (
                <div key={i} className={styles.transparent}>
                  <div className={`${styles.details} `}>
                    <ReviewCard
                      profileImage={data.src}
                      name={data.name}
                      role={data.role}
                      testimonial={data.testimonial}
                      ratings={data.ratings}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <div className={styles.swiperWrapper}>
          <div className={styles.customNavigation}>
            <button
              className={`${styles.prevButton} ${
                isPrevDisabled ? styles.disabled : ""
              }`}
              onClick={slidePrev}
            >
              <Image
                src="https://drive.google.com/uc?export=view&id=1MaisIp3dGz0ZYCRuB8j0DcWFuiiaUUpQ"
                alt="Previous"
                width={30}
                height={30}
                style={{ transform: "rotate(180deg)" }} // Rotate image
              />
            </button>
          </div>

          <div className={styles.swiperInnerWrap}>
            <Swiper
              spaceBetween={-5}
              loop={false}
              modules={[Navigation]}
              slidesPerView={3}
              className="mySwiper"
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              {images.map((image, index) => (
                <SwiperSlide key={image.id}>
                  <div
                    className={`${styles.gridItem} ${
                      selectedIndex === index ? styles.selected : ""
                    } ${selectedIndex !== index ? styles.whitish : ""}`}
                    onClick={() => handleProfileClick(index)}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={100}
                      height={100}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className={styles.rightarrow}>
            <button
              className={`${styles.nextButton} ${
                isNextDisabled ? styles.disabled : ""
              }`}
              onClick={slideNext}
            >
              <Image
                src="https://drive.google.com/uc?export=view&id=1MaisIp3dGz0ZYCRuB8j0DcWFuiiaUUpQ"
                alt="Next"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
        {/* <MetricsBox /> */}
      </div>
    </div>
  );
};

export default Reviews;
