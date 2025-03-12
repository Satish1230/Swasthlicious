"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card";

export const cardData = [
  {
    title: "Data Science and AI Master Certification Program",
    subtitle: "For Working Professionals",
    duration: "13 months | 4 capstone projects",
    capstoneProjects: "Project Certification from IBM",
    certification: "Unlimited Interview Calls",
    additionalInfo: "",
    bannerImg: "/card/datascience.png",
    logoImg: "/card/ibmindia.png",
  },
  {
    title: "Executive program in Data Science & AI",
    subtitle: "No coding exp required",
    duration: "11 months | 4 capstone projects",
    capstoneProjects: "IIT Guwahati Certification",
    certification: "2 days Campus Immersion at IIT",
    additionalInfo: "",
    bannerImg: "/card/ai.png",
    logoImg: "/card/ibmindia.png",
  },
  {
    title: "Master's Degree in CS: Data Science and AI",
    subtitle: "90+ ECTS Credits",
    duration: "18 months | 3 capstone projects",
    capstoneProjects: "Master’s Degree from Woolf University",
    certification: "Immigration Opportunity",
    additionalInfo: "",
    bannerImg: "/card/course.png",
    logoImg: "/card/ibmindia.png",
  },
  {
    title: "Master's Degree in CS: Data Science and AI",
    subtitle: "90+ ECTS Credits",
    duration: "18 months | 3 capstone projects",
    capstoneProjects: "Master’s Degree from Woolf University",
    certification: "Immigration Opportunity",
    additionalInfo: "",
    bannerImg: "/card/course.png",
    logoImg: "/card/ibmindia.png",
  },

  {
    title: "Master's Degree in CS: Data Science and AI",
    subtitle: "90+ ECTS Credits",
    duration: "18 months | 3 capstone projects",
    capstoneProjects: "Master’s Degree from Woolf University",
    certification: "Immigration Opportunity",
    additionalInfo: "",
    bannerImg: "/card/course.png",
    logoImg: "/card/ibmindia.png",
  },

  {
    title: "Master's Degree in CS: Data Science and AI",
    subtitle: "90+ ECTS Credits",
    duration: "18 months | 3 capstone projects",
    capstoneProjects: "Master’s Degree from Woolf University",
    certification: "Immigration Opportunity",
    additionalInfo: "",
    bannerImg: "/card/course.png",
    logoImg: "/card/ibmindia.png",
  },

  {
    title: "Master's Degree in CS: Data Science and AI",
    subtitle: "90+ ECTS Credits",
    duration: "18 months | 3 capstone projects",
    capstonxeProjects: "Master’s Degree from Woolf University",
    certification: "Immigration Opportunity",
    additionalInfo: "",
    bannerImg: "/card/course.png",
    logoImg: "/card/ibmindia.png",
  },
];

export const Slider = ({ slidesPerView, mobileview }) => {
  return (
    <div>
      <Swiper
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: slidesPerView.small || 1.1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: slidesPerView.default || 3.1,
            spaceBetween: 30,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {cardData.map((data, index) => (
          <SwiperSlide key={index}>
            <Card
              title={data.title}
              subtitle={data.subtitle}
              duration={data.duration}
              capstoneProjects={data.capstoneProjects}
              certification={data.certification}
              additionalInfo={data.additionalInfo}
              bannerImg={data.bannerImg}
              logoImg={data.logoImg}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
