import React, { useState } from "react";
import { FaHome, FaUser, FaWhatsapp } from "react-icons/fa";
import { RiContactsFill, RiListCheck } from "react-icons/ri";
import { BsBriefcaseFill, BsTelegram } from "react-icons/bs";
import { SiAndroidauto, SiUpwork } from "react-icons/si";
import { HiMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);

  const commonStyles =
    "flex items-center w-[50%] justify-start gap-4  border-b border-gray-500 pl-4 py-2 capitalize cursor-pointer hover:text-pink-600";

  return (
    <>
      <nav className="hidden md:flex flex-col max-h-screen h-screen overflow-auto max-w-[250px] w-[200px] text-white bg-slate-800 items-center justify-between py-3">
        <a
          href="/"
          className="w-full px-2 flex items-center justify-start gap-3"
        >
          <img src="/vite.svg" alt="" srcset="" />
          <div className="capitalize text-[14px] flex flex-col items-center justify-center py-2">
            <small>District</small>
            <small>Coder</small>
          </div>
        </a>
        <ul className="w-full h-auto flex items-center flex-col ">
          <a href="/" className={`${commonStyles}`}>
            <FaHome />
            <p>home</p>
          </a>
          <a href="/about" className={`${commonStyles}`}>
            <FaUser />
            <p>about</p>
          </a>
          <a href="/service" className={`${commonStyles}`}>
            <RiListCheck />
            <p>services</p>
          </a>
          <a href="/portfolio" className={`${commonStyles}`}>
            <BsBriefcaseFill />
            <p>portfolio</p>
          </a>
        </ul>

        <div className="flex justify-evenly gap-3 text-[20px] w-auto items-center container mx-auto ">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <BsTelegram />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <SiUpwork />
          </a>
        </div>
      </nav>

      {/** mobile menu */}

      <nav className="md:hidden flex flex-1 items-center p-3 bg-slate-900 justify-between text-white">
        <div>
          <img src="/vite.svg" alt="LOGO" srcset="" />
        </div>
        <div className=" flex flex-col cursor-pointer">
          <HiMenuAlt1 onClick={() => setSideBar(true)} />

          {sideBar && (
            <ul className="absolute top-0 right-0 bottom-0 h-screen w-[50%] bg-slate-800  flex flex-col justify-between backdrop-blur-0 pb-3 transition-all">
              <div className="w-full flex items-center p-3 cursor-pointer">
                <AiOutlineClose onClick={() => setSideBar(false)} />
              </div>
              <div className="w-full flex flex-col items-center">
                <a href="/" className={`${commonStyles}`}>
                  <FaHome />
                  <p>home</p>
                </a>
                <a href="/about" className={`${commonStyles}`}>
                  <FaUser />
                  <p>about</p>
                </a>
                <a href="/services" className={`${commonStyles}`}>
                  <RiListCheck />
                  <p>services</p>
                </a>
                <a href="portfolio" className={`${commonStyles}`}>
                  <BsBriefcaseFill />
                  <p>portfolio</p>
                </a>
              </div>
              <div className="flex justify-evenly gap-3 text-[20px] w-auto items-center container mx-auto ">
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <BsTelegram />
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                  <SiUpwork />
                </a>
              </div>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
