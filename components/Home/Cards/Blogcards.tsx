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
  const [slides, setSlides] = useState(3);
  const [center, setCenter] = useState(false);
  const [space,setSpace] = useState(150)

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    var size = getWindowDimensions();

    if (size.width <= 1024 && size.width > 640) {
      setSlides(2)
      setSpace(10)
      setCenter(true)
    }
    else if (size.width <= 640 ) {
      setSlides(1)
      setCenter(true)
    }
  }, []);

  return (
    <div className="bg-gradient-to-t from-background-secondary1 pb-20">
      <div className="max-w-7xl mx-auto flex flex-col h-auto">
        <div className="text-center font-bold text-2xl md:text-4xl mb-10 sm">
          <h1>Blogs</h1>
        </div>
        <Swiper
          slidesPerView={slides}
          spaceBetween={space}
          centeredSlides={center}
          slidesPerGroup={slides}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="h-80 flex w-full"
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
