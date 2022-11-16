import React from "react";

const Hero = () => {
  return (
    <div className="text-white w-full flex flex-col p-3">
      <h1>
        Welcome to{" "}
        <span className="text-bold capitalize"> district programmer </span>
        where all your business dreams are posible
      </h1>
      <p>
        we provide quality services from{" "}
        <strong className="text-pink-500">Front End to Back End</strong> and we
        provide responsive web pages that are scalable and SEO optimized to help
        your business rocket to the moon
      </p>
    </div>
  );
};

export default Hero;
