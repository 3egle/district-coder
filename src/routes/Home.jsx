import React from "react";

const Home = () => {
  return (
    <div className=" text-white p-2">
      <div className="flex flex-col-reverse md:justify-between md:flex-row md:items-center h-full">
        <div>
          <div>
            <h1 className=" ">
              Hello, I am{" "}
              <span className="bolder capitalize text-[25px]">
                {" "}
                Ternenge emmanuel
              </span>{" "}
            </h1>
          </div>

          <div className="my-2 text-[20px] ">
            <h2 className="">I am a web developer</h2>
          </div>

          <div className="text-[15px]">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat,
              rem? Quae nulla fugit eius modi ab iste. Possimus corrupti dicta
              accusantium. Aliquid voluptate natus error fuga quod veniam quis
              pariatur.
            </p>
          </div>
        </div>
        <div className="">
          <img
            src="/vite.svg"
            width="400px"
            height="100px"
            className="object-contain h-[200px] w-[400px]"
            alt="author"
            srcset=""
          />
        </div>
      </div>
      <div className="flex  w-full  items-center mt-9">
        <a
          href="#"
          target="_blank"
          className="flex items-center justify-center bg-pink-600 p-1 px-9 rounded-full text-center"
        >
          {" "}
          hire me
        </a>
      </div>
    </div>
  );
};

export default Home;
