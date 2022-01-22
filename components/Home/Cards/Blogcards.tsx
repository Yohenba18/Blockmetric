import { Singlecard } from "./Singlecard";
import data from "../../../data/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useEffect, useState } from "react";

SwiperCore.use([Pagination, Navigation]);

const Blogcards = () => {

  return (
    <div className="bg-gradient-to-t from-background-secondary1 py-20">
      <div className="max-w-7xl mx-auto h-auto">
        <div className="flex items-center justify-center gap-8 text-center font-bold text-2xl md:text-4xl mb-10 sm">
          <hr className="border-activepurple shadow-lg shadow-cyan-500/50 w-20 sm:w-40  md:w-60 lg:w-80 border-2 bg-activepurple" />
          <h1>Blogs</h1>
          <hr className="border-activepurple shadow-lg shadow-cyan-500/50 w-20 sm:w-40  md:w-60  lg:w-80 border-2 bg-activepurple" />
        </div>
        <Swiper
          // Responsive breakpoints
          breakpoints={{
            300: {
              spaceBetween: 30,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              spaceBetween: 20,
              slidesPerView: 2,
            },
            1100: {
              spaceBetween: 10,
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {data.map((card) => {
            return (
              <SwiperSlide>
                <Singlecard
                  name={card.name}
                  url={card.image_url}
                  designation={card.designation}
                  words={card.words}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Blogcards;
