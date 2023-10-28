//Login page when adding attractive forms and dynamic codec
// Author Dayron Castillo Hernández

import React from "react";
import Image from "next/image";
import cover_image from "../../../public/assets/cover_image.jpeg";
import google_icon from "../../../public/assets/google_icon.png";

const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disable: "#D9D9D9",
};

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen flex items-start">
      <div className="relative w-1/2 h-full flex flex-col">
        <div className="absolute top-[20%] left-[10%] flex flex-col">
          <h1 className="text-4xl text-white font-extrabold my-4">
            Turn your ideas into reality
          </h1>
          <p className="text-xl text-white font-normal">
            Start for free and get attractive offers from the community
          </p>
        </div>
        <Image
          className="w-full h-screen object-cover"
          src={cover_image}
          alt="Cover de Imagen"
        />
      </div>

      <div className="w-1/2 h-screen bg-[#f5f5f5] flex flex-col p-20 justify-between items-center">
        <h1 className="w-full max-w-[500px] mx-auto text-xl text-[#060606] font-semibold mt-15 mr-auto">
          Interactive Brand
        </h1>

        <div className="w-full flex flex-col max-w-[550px]">
          <div className="w-full flex flex-col mb-2">
            <h3 className="text-3xl font-semibold mb-2">Login</h3>
            <p className="text-base mb-2">
              Welcome Back! Please enter your details.
            </p>
          </div>

          <div className="w-full flex flex-col">
            <input
              type="email"
              placeholder="Email"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
            />

            <div className="w-full flex items-center justify-between">
              <div className="w-full flex items-center">
                <input className="w-4 h-4 mr-2" type="checkbox" />
                <p className="text-sm">Remember me for 30 days</p>
              </div>

              <p className="text-sm font-medium whitespace-nowrap  cursor-pointer underline underline-offset-2 hover:text-black/40 transition-colors duration-300">
                Forgot Password ?
              </p>
            </div>

            <div className="w-full flex flex-col my-4">
              <button className="w-full my-2 font-semibold bg-[#060606] hover:bg-[#bebcbc] hover:shadow-md hover:text-black transition-colors duration-300 rounded-md p-4 text-center flex items-center justify-center text-white">
                Log in
              </button>
              <button className="w-full my-2 font-semibold bg-[#f5f5f5] border border-black/40 hover:shadow-md hover:text-black/40 hover:border-[#f5f5f5] hover:text-black transition-colors duration-300 rounded-md p-4 text-center flex items-center justify-center">
                Register
              </button>
            </div>

            <div className="w-full flex items-center justify-center relative py-2">
              <p className="w-full h-[1px] bg-black/40"></p>
              <p className="text-lg absolute text-black/80 bg-[#f5f5f5]">or</p>
            </div>

            <div className="w-full my-2 font-semibold bg-[#f5f5f5] border border-black/40 hover:text-black/40 hover:shadow-md hover:border-[#f5f5f5] hover:text-black transition-colors duration-300 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                <Image src={google_icon} alt="Logo Google" className="h-6 w-auto  mr-2"/>
              Sign in with Google
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <p className="text-sm font-normal text-[#060606]">
            Dont no have a account?{" "}
            <span className="font-semibold underline underline-offset-2 cursor-pointer hover:text-black/40 transition-colors duration-300">
              Sign up for free
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
