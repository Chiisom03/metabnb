import React from "react";
import heroImg from "../assets/images/hero_img.png";

const Hero = () => {
  return (
    <div className=" mt-[125px] h-[495px] max-w-[1221px] mx-[100px] flex">
      <div className=" mr-[99px]">
        <h2 className="text-[56px] ">
          Rent a <span className="text-major">Place</span> away from{" "}
          <span className="text-major">Home</span> in{" "}
          <span className="text-major">Metaverse</span>
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
