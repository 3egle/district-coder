import { useState } from "react";

import { CgMenuGridO } from "react-icons/cg";

import Navbar from "./Navbar";

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
  return <div className="relative w-full p-3 flex items-center "></div>;
};

export default Header;
