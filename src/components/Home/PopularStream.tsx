import React from "react";
import Titles from "../Titles";
import { FaFireFlameCurved } from "react-icons/fa6";
import LiveStream from "../LiveStream";
import useFetchData from "../hooks/useFetchData";

const PopularStream = () => {
  const { data } = useFetchData();
  return (
    <div className="my-16">
      <Titles title="Popular Streams" Icon={FaFireFlameCurved} />
      <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data && data.slice(0, 8).map((livestream, index) => (
          <LiveStream key={index} livestream={livestream} />
        ))}
      </div>
    </div>
  );
};

export default PopularStream;
