import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-[32rem] bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center w-full h-full items-center">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p> Hi, I'm Alex, take a look around.</p>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
            dolores itaque, aliquam at laboriosam iste modi vero voluptatem
            recusandae molestiae enim nam a quas minus esse consequatur rerum
            accusamus? Nemo.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
