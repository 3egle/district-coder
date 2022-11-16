import { GiBriefcase } from "react-icons/gi";
import { FaBlog, FaServicestack } from "react-icons/fa";
import {
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";
import { TbAffiliate } from "react-icons/tb";

const Navbar = ({ sidebar }) => {
  const socialLinksStyle = `${
    sidebar ? "w-full" : "w-[30px]"
  } p-1  text-center gap-3 flex items-center justify-center border cursor-pointer`;

  return (
    <div
      className={`absolute ${
        sidebar ? "w-[150px]" : "w-[40px]"
      } backdrop-blur-md h-[calc(100vh-50px)] left-0 top-[50px] bottom-0 border-r bg-slate-900 md:flex flex-col items-center justify-between overflow-auto hidden`}
    >
      <ul className="w-full">
        <a
          href="#"
          className=" flex text-blue-900 items-center p-3 g-3 hover:text-pink-500 w-full cursor-pointer"
        >
          <FaBlog />
          {sidebar && <strong className="ml-3">blog</strong>}
        </a>
        <a
          href="#"
          className=" flex text-blue-900 items-center p-3 g-3 hover:text-pink-500 w-full cursor-pointer"
        >
          <FaServicestack />
          {sidebar && <strong className="ml-3">services</strong>}
        </a>

        <a
          href="#"
          className=" flex text-blue-900 items-center p-3 g-3 hover:text-pink-500 w-full cursor-pointer"
        >
          <GiBriefcase />
          {sidebar && <strong className="ml-3">Products</strong>}
        </a>
        <a
          href="#"
          className=" flex text-blue-900 items-center p-3 g-3 hover:text-pink-500 w-full cursor-pointer"
        >
          <TbAffiliate />
          {sidebar && <strong className="ml-3">Affiliate</strong>}
        </a>
      </ul>

      <div className=" relative  w-full p-3 text-blue-900 flex flex-col items-center gap-3">
        <a
          href="#"
          className={`${socialLinksStyle} rounded bg-green-600 hover:bg-green-500`}
        >
          {sidebar && <p>connect</p>}
          <AiOutlineWhatsApp />
        </a>
        <a
          href="#"
          className={`${socialLinksStyle} rounded bg-cyan-600 hover:bg-cyan-500`}
        >
          {sidebar && <p>connect</p>}
          <BsTelegram />
        </a>
        <a
          href="#"
          className={`${socialLinksStyle} rounded bg-sky-600 hover:bg-sky-500`}
        >
          {sidebar && <p>connect</p>}
          <AiFillLinkedin />
        </a>
        <a
          href="#"
          className={`${socialLinksStyle} rounded bg-green-600 hover:bg-green-500`}
        >
          {sidebar && <p>connect</p>}
          <SiUpwork />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
