import React from "react";
import Sidebar from "./Sidebar";
const Header = () => {
    return (
        <div className="flex sticky w-full h-[60px] bg-slate-900 items-center justify-between p-3">
            <div>
                <p>district</p>
            </div>

            <Sidebar />
        </div>
    );
};

export default Header;
