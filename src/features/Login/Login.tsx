import React from "react";
import logo from "@/assets/img/LogoHome.png";
import background from "@/assets/img/background.png";
import { Button } from "@/components/ui/button";
const Login = (): JSX.Element => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="flex bg-white bg-opacity-90 w-11/12 max-h-5/6 m-auto justify-center items-center border-2 rounded-xl translate-y-10 shadow-lg">
        <div className="w-5/12 shadow-xl border-r px-8">
          <div className="flex justify-center items-center mb-8">
            <img src={logo} alt="Fresher Logo" className="w-44 mr-28" />
            <p className="absolute text-2xl font-serif italic ml-28">
              Home <span className="text-orange-500">Real</span>
            </p>
          </div>
          <form className="space-y-6 flex flex-col justify-center items-center">
            <div className="relative w-10/12">
              <input
                type="text"
                id="email"
                className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-orange-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Email or Username
              </label>
            </div>
            <div className="relative w-10/12">
              <input
                type="text"
                id="password"
                className="block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer"
                placeholder=" "
              />
              <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-orange-500 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">
                Password
              </label>
            </div>
            <div className="flex justify-between items-center">
              <a href="/" className="text-sm text-orange-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <div className="w-10/12">
              <Button
                type="submit"
                className="w-full flex justify-center text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Sign In
              </Button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-500 pt-5">
            Don't have an account?{" "}
            <a href="/" className="text-orange-500 hover:underline">
              Sign Up!
            </a>
          </p>
          <div className="text-xs text-center text-gray-500 mt-[15%] mb-10">
            <div>
              @Copyright 2024 HomeReal |{" "}
              <a href="/" className="text-orange-500 hover:underline">
                Contact Us
              </a>{" "}
              |{" "}
              <a href="/" className="text-orange-500 hover:underline">
                Home
              </a>
            </div>
          </div>
        </div>
        <div className="w-7/12 flex flex-col items-center">
          <img src={background} alt="background" className="w-7/12" />
          <div className="text-center font-serif text-orange-600">
            <h1 className="text-5xl">Hello, Welcome!</h1>
            <h1 className="text-xl italic pt-5">Sign In And Join With Us</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
