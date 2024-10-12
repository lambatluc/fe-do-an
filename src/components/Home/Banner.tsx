import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import useFetchData from "../hooks/useFetchData";
import FlexLiveStreamItem from "../FlexLiveStreamItem";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { FaHeart } from "react-icons/fa";
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { ILiveStream } from "@/types/lives";
const Banner = () => {
  const { data } = useFetchData();
  const [currentImage, setCurrentImage] = useState<string>("");
  const [currentSlideData, setCurrentSlideData] = useState<ILiveStream>();
  useEffect(() => {
    if (data && data.length > 0) {
      setCurrentImage(`/images/livestream/${data[0].titleImage}`);
    }
  }, [data]);

  const handleSlideChange = (swiper: any) => {
    const currentSlideIndex = swiper.realIndex;
    if (!swiper || !data) return;
    if (data[currentSlideIndex]) {
      setCurrentImage(
        `/images/livestream/${data[currentSlideIndex].titleImage}`
      );
      setCurrentSlideData(data[currentSlideIndex]);
    }
  };
  return (
    <div className="relative h-screen">
      <div className="absolute bottom-0 left-0 bg-opacity-50 w-full h-full">
        <img
          src={currentImage}
          alt="banner"
          className="w-full h-full object-cover"
        />
        {currentSlideData && (
          <div className="absolute linear-bg xl:pl-10 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 ">
            <h1 className="xl:text-6xl px-12 truncate capitalize font-sans sm:text-2xl text-xl font-bold">
              {currentSlideData.title}
            </h1>
            <div className="flex gap-5 px-12 items-center text-dryGray">
              <FlexLiveStreamItem livestream={currentSlideData} />
            </div>
            <div className="flex gap-5 px-12 items-center">
              <Link
                to={`/live/${currentSlideData.streamerName}`}
                className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs"
              >
                Watch
              </Link>
              <Button className="bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30">
                <FaHeart />
              </Button>
            </div>
          </div>
        )}
      </div>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
        }}
        scrollbar={true}
        navigation={true}
        loop={true}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]}
        onSlideChange={handleSlideChange}
        className="mySwiper absolute bg-slate-600 w-2/4 h-96 translate-x-2/4 translate-y-2/4"
      >
        {data?.slice(0, 6).map((livestream, index) => (
          <SwiperSlide
            key={index}
            className="relative flex justify-center items-center rounded overflow-hidden"
          >
            <div className="flex justify-center items-center w-full h-full">
              <img
                src={`/images/livestream/${livestream.titleImage}`}
                alt={livestream.title}
                className="w-80 h-80 object-center object-cover"
              />
              <div className="absolute linear-bg xl:pl-10 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4 ">
                <h1 className="xl:text-2xl mt-44 truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                  {livestream.title}
                </h1>
                <div className="flex gap-5 items-center text-dryGray">
                  <FlexLiveStreamItem livestream={livestream} />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
