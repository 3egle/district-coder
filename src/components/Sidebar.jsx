import React, { useState } from "react";
import { FaHome, FaUser } from "react-icons/fa";
import { RiListCheck } from "react-icons/ri";
import { BsBriefcaseFill } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";

const Sidebar = () => {
    const [sideBar, setSideBar] = useState(false);

    return (
        <nav className="text-white">
            {/*navlinks mobile*/}
            <div className="rotate-180 text-[25px]">
                <HiMenuAlt1
                    onClick={() => {
                        setSideBar(sideBar ? false : true);
                    }}
                />
            </div>
            {sideBar && (
                <ul className="md:hidden list-none flex flex-col absolute top-0 left-0 bottom-0 max-h-[100vh] h-screen w-[60%] bg-slate-900 ">
                    <a
                        href="#"
                        className="w-full p-3 flex gap-3 items-center  hover:bg-white hover:text-pink-500"
                    >
                        <FaHome />
                        <p>Home</p>
                    </a>
                    <a
                        href="#"
                        className="w-full p-3 flex gap-3 items-center hover:bg-white hover:text-pink-500"
                    >
                        <FaUser />
                        <p>About</p>
                    </a>
                    <a
                        href="#"
                        className="w-full p-3 flex gap-3 items-center hover:bg-white hover:text-pink-500"
                    >
                        <RiListCheck />
                        <p>Services</p>
                    </a>
                    <a
                        href="#"
                        className="w-full p-3 flex gap-3 items-center hover:bg-white hover:text-pink-500"
                    >
                        <BsBriefcaseFill />
                        <p>Portfolio</p>
                    </a>
                </ul>
            )}
        </nav>
    );
};

export default Sidebar;
