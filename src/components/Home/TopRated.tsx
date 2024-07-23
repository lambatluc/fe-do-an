import React, { useState } from "react";
import Titles from "../Titles";
import { BookmarkCheck } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useFetchData } from "./hooks/useFetchData";
import { Link } from "react-router-dom";
import Rating from "../Stars";
import { BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { Button } from "../ui/button";

const TopRated = () => {
  const { data } = useFetchData();
  const [nextEl, setNextEl] = useState<HTMLButtonElement | null>(null);
  const [prevEl, setPrevEl] = useState<HTMLButtonElement | null>(null);
  const classNames = 'hover:bg-dry transitions text-sm rounded w-8 h-8 flex-colo bg-subMain text-white';
  return (
    <div className="my-16">
      <Titles title="Top Rated" Icon={BookmarkCheck} />
      <div className="mt-20">
        <Swiper
          navigation={{ nextEl, prevEl }}
          slidesPerView={4}
          spaceBetween={40}
          autoplay={true}
          speed={1000}
          loop={true}
          modules={[Navigation, Autoplay]}
        >
          {data.map((livestream, index) => (
            <SwiperSlide key={index}>
              <div className="p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden">
                <img
                  src={`/images/livestream/${livestream.titleImage}`}
                  alt={livestream.streamerName}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="px-4 gap-6 hoveres text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0">
                  <Button className="w-12 h-12 flex-colo transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white">
                    <FaHeart />
                  </Button>
                  <Link
                    to={`/livestream/${livestream.streamerName}`}
                    className="font-semibold text-xl trancuted line-clamp-2"
                  >
                    {livestream.streamerName}
                  </Link>
                  <div className="flex gap-2 text-star">
                    <Rating value={livestream.rating}/>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-full px-1 flex-rows gap-6 pt-12">
          <Button className={classNames} ref={(node) => setPrevEl(node)}>
            <BsCaretLeftFill/>
          </Button>
          <Button className={classNames} ref={(node) => setNextEl(node)}>
            <BsCaretRightFill/>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
