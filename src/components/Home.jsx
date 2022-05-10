import React from "react";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full caret-transparent">
        <p className="text-white text-xl">Hi, I'm</p>
        <h1 className="text-4xl sm:text-6xl font-bold text-white">Alex Ryan</h1>
        <h2 className="text-5xl font-bold text-[#06cdd6]">
          Computer Science Student
        </h2>
        <p className="text-white py-4 max-w-[700px] ">
          I am a student at Penn State studying Computer Science. In the summer
          of 2022, I will be working as a Software Engineer Intern for Paylocity
          in Chicago, IL.
        </p>
      </div>
    </div>
  );
};

export default Home;
