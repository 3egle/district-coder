import { useState } from "react";

import { CgMenuGridO } from "react-icons/cg";

import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";
const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  function toggleSidebar() {
    console.log("side bar toggled");
    if (sidebar) {
      setSidebar(false);
    } else {
      setSidebar(true);
    }
  }
  return (
    <div className="relative w-full p-3 flex items-center ">
      <header className="flex items-center justify-between text-center w-full">
        <div className="text-[25px] cursor-pointer">
          <CgMenuGridO onClick={toggleSidebar}></CgMenuGridO>{" "}
        </div>
        <p>District Programmer</p>
        <div className="capitalize border rounded w-[45px] flex items-center justify-center text-center bg-pink-600 hover:bg-green-900">
          join
        </div>
      </header>
      <Navbar sidebar={sidebar} />
      <NavbarMobile sidebar={sidebar} setSidebar={setSidebar} />
    </div>
  );
};

export default Header;
