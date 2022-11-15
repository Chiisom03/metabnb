import React from "react";
import heroImg from "../assets/images/hero_img.png";
import Search from "./Search";

const Hero = () => {
  return (
    <div className="mt-[30px] md:mt-[125px] h-[495px] w-full md:max-w-[960px] px-6 md:mx-auto md:flex flex-col md:flex-row md:items-center md:justify-center text-metablack">
      <div className="lg:mr-[99px] md:mr-[50px]">
        <h2 className="text-5xl md:text-[56px] md:leading-[78.4px] md:tracking-[-2%]">
          Rent a <span className="text-major font-bold">Place </span> away from
          <span className="text-major font-bold"> Home</span> in
          <span className="text-major font-bold"> Metaverse</span>
        </h2>
        <p className="text-xl md:text-2xl mt-12">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <Search />
      </div>
      <img
        src={heroImg}
        alt="hero_img"
        className="h-[476px] w-[459px] mr-[19px] hidden md:block"
      />
    </div>
  );
};

export default Hero;
