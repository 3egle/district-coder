import React from "react";
import { Link } from "react-router-dom";

import { AiOutlineClose, AiOutlineLinkedin } from "react-icons/ai";
import { TbAffiliate } from "react-icons/tb";
import { GiBriefcase } from "react-icons/gi";
import { FaBlog, FaServicestack } from "react-icons/fa";
import {
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";

const NavbarMobile = ({ sidebar, setSidebar }) => {
  return (
    <>
      {sidebar && (
        <div className="absolute flex flex-col justify-between md:hidden left-0 bottom-0 top-0 w-2/5 h-screen bg-slate-900">
          <ul className="list-none flex flex-col items-start">
            <div className="text-[25px] p-3 w-full flex items-center justify-start cursor-pointer hover:text-red-500">
              <AiOutlineClose
                onClick={() => {
                  setSidebar(false);
                }}
              />
            </div>
            <Link to="/" className="w-full flex items-center p-2 gap-3 ">
              <FaBlog />
              <p className="capitalize hover:text-pink-900">blog</p>
            </Link>
            <Link to="/" className="w-full flex items-center p-2 gap-3">
              <FaServicestack />
              <p className="capitalize hover:text-pink-900">services</p>
            </Link>
            <Link to="/" className="w-full flex items-center p-2 gap-3">
              <GiBriefcase />
              <p className="capitalize hover:text-pink-900">products</p>
            </Link>
            <Link to="/" className="w-full flex items-center p-2 gap-3">
              <TbAffiliate />
              <p className="capitalize hover:text-pink-900">Affiliate</p>
            </Link>
          </ul>
          <div className="p-3 text-[25px] flex gap-3">
            <a target="_blank" href="" className="">
              <BsTelegram fill="cyan" />
            </a>

            <a target="_blank" href="" className="">
              <AiOutlineWhatsApp fill="lime" />
            </a>
            <a target="_blank" href="" className="">
              <AiOutlineTwitter fill="cyan" />
            </a>
            <a target="_blank" href="https://linkedin.com" className="">
              <AiFillLinkedin fill="cyan" />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarMobile;
