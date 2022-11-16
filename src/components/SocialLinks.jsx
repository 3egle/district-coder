import React from "react";

import {
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsDash, BsTelegram } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { BsChat } from "react-icons/bs";

const SocialLinks = () => {
  return (
    <a
      href=""
      className="absolute right-[5%] bottom-[5%] cursor-pointer rounded-full bg-lime-500 p-2 shadow-md"
    >
      <div className="text-[18px]">
        <SiUpwork />
      </div>
    </a>
  );
};

export default SocialLinks;
