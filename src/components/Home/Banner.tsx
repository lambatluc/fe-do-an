import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { useFetchData } from "./hooks/useFetchData";
import FlexLiveStreamItem from "../FlexLiveStreamItem";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { Heart } from "lucide-react";
const Banner = () => {
  const { data } = useFetchData();
  useEffect(() => {
    // Thực hiện hành động khi data thay đổi
    if (data.length > 0) {
      console.log("Data has changed:", data);
    }
  }, [data]);
  return (
    <div className="relative w-full">
      <Swiper
        direction="vertical"
        slidesPerView={1}
        loop={true}
        speed={1000}
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        className="w-full xl:h-96 bg-dry lg:h-64 h-48"
      >
        {data.slice(0, 6).map((livestream, index) => (
          <SwiperSlide key={index} className="relative rounded overflow-hidden">
            <img
              src={`/images/livestream/${livestream.titleImage}`}
              alt={livestream.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 ">
              <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                {livestream.title}
              </h1>
              <div className="flex gap-5 items-center text-dryGray">
                <FlexLiveStreamItem livestream={livestream} />
              </div>
              <div className="flex gap-5 items-center">
                <Link
                  to={`/livestream/${livestream.streamerName}`}
                  className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
                >
                  Watch
                </Link>
                <Button className="bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                  <Heart />
                </Button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
