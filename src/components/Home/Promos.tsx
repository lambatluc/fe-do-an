import React from "react";
import { User } from 'lucide-react';
const Promos = () => {
  return (
    <div className="my-20 py-10 md:px-20 px-8 bg-dry">
      <div className="lg:grid lg:grid-cols-2 lg:gap-10 items-center">
        <div className="flex lg:gap-10 gap-6 flex-col">
          <h1 className="xl:text-3xl text-xl capitalize font-sans font-medium xl:leading-relaxed">
            Download Your Movie Watch Offline <br /> Enjoy On Your Mobile
          </h1>
          <p className="text-text text-sm xl:text-base leading-6 xl:leading-8">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
            quibusdam nobis aliquam ipsa numquam vero aut odio, neque ea
            possimus consectetur impedit unde reiciendis ex, cupiditate officiis
            magnam iste doloremque?
          </p>
          <div className="flex gap-4 md:text-lg text-sm">
            <div className="flex-colo bg-black text-subMain px-6 py-3 rounded font-bold">
              HD 4K
            </div>
            <div className="flex-rows gap-4 bg-black text-subMain px-6 py-3 rounded font-bold">
              <User/> 2K
            </div>
          </div>
        </div>
        <div>
          <img src="/images/imgPromos.png" alt="mobile app" className="w-full object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default Promos;
