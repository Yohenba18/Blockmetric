import { Singlecard } from "./Singlecard";
import data from "../../data/BlogCard.json";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"

SwiperCore.use([Pagination, Navigation]);

const Blogcards: React.FC = () => {
  return (
    <div className=" flex flex-col h-auto bg-gradient-to-t from-bloglightblue py-20">
      <div className="text-center font-bold text-2xl md:text-4xl ">
        <h1>Blogs</h1>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mt-10 flex max-w-7xl mx-auto"
      >
        {data.data.cards.map((card) => {
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
  );
};

export default Blogcards;
