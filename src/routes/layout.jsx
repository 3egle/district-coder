import React from "react";
import { Header } from "../components";
const Layout = ({ children }) => {
    return (
        <main className="text-white bg-slate-900">
            <Header />
            {children}
        </main>
    );
};

export default Layout;
