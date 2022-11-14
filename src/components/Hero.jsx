import React from "react";
import heroImg from "../assets/images/hero_img.png";

const Hero = () => {
  return (
    <div className=" mt-[125px] h-[495px] max-w-[1221px] mx-[100px] flex text-metablack">
      <div className=" mr-[99px]">
        <h2 className="text-[56px] leading-[78.4px] tracking-[-2%]">
          Rent a <span className="text-major font-bold">Place</span> away from{" "}
          <span className="text-major font-bold">Home</span> in{" "}
          <span className="text-major font-bold">Metaverse</span>
        </h2>
        <p className="text-2xl">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
      </div>
      <img
        src={heroImg}
        alt="hero_img"
        className="h-[476px] w-[459px] mr-[19px]"
      />
    </div>
  );
};

export default Hero;
