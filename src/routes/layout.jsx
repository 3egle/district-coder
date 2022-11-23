import React from "react";
import { Footer, Header } from "../components";
const Layout = ({ children }) => {
  return (
    <div className="bg-slate-900 max-h-screen h-screen w-full md:flex overflow-auto">
      <Header />
      <main className="flex flex-col justify-between py-3">
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default Layout;
