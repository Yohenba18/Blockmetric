import { Singlecard } from "./Singlecard";
import data from "../../data/BlogCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Pagination, Navigation]);

const Blogcards: React.FC = () => {
  return (
    <div className="bg-gradient-to-t from-background-secondary1 py-20">
      <div className="max-w-7xl mx-auto flex flex-col h-auto">
        <div className="text-center font-bold text-2xl md:text-4xl mb-10">
          <h1>Blogs</h1>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={25}
          slidesPerGroup={3}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          className="h-auto flex w-full"
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
