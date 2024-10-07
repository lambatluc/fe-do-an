import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Search } from "lucide-react";
import { FaHeart } from "react-icons/fa";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";
const NavBar = () => {
  const hover = "hover: text-subMain transitions text-white";
  const Hover = ({ isActive }: any) => (isActive ? "text-subMain" : hover);
  const [focus, setFocus] = useState(false);
  return (
    <>
      <div className="backdrop-blur-xl shadow-md sticky top-0 z-20">
        <div className="container py-6 px-2 lg:grid gap-10 grid-cols-5 justify-between items-center">
          <div className="col-span-1 lg:block hidden">
            <Link to="/">
              <img
                src="/images/logo.png"
                alt="logo"
                className="w-full h-12 object-contain"
              />
            </Link>
          </div>
          <form
            className={cn(
              "relative bg-main duration-500 rounded-full",
              focus ? "w-[500px]" : "w-12"
            )}
            onFocus={() => setFocus(true)}
          >
            <Search className="w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3" />
            <input
              placeholder="Search..."
              className={cn(
                "p-3 bg-main sm:text-sm block w-full transition-colors pl-10 rounded-full",
                focus ? "" : "cursor-pointer"
              )}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          </form>
          <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
            <NavLink to="/lives" className={Hover}>
              Lives
            </NavLink>
            <NavLink to="/about-us" className={Hover}>
              About Us
            </NavLink>
            <NavLink to="/contact-us" className={Hover}>
              Contact Us
            </NavLink>
            <NavLink to="/login" className={Hover}>
              <User className="w-8 h-8" />
            </NavLink>
            <NavLink to="/favorites" className={`${Hover} relative`}>
              <FaHeart className="w-6 h-6" />
              <div className="w-5 h-5 flex-colo rounded-full text-xs bg-subMain text-white absolute -top-5 -right-1">
                3
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
