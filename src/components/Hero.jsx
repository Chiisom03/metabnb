import React from "react";
import heroImg from "../assets/images/hero_img.png";

const Hero = () => {
  return (
    <div className="">
      <div>
        <h2 className="text-[56px]">
          Rent a <span className="text-major">Place</span> away from{" "}
          <span className="text-major">Home</span> in{" "}
          <span className="text-major">Metaverse</span>
        </h2>
        <p className="text-xs">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
      </div>
      <img src={heroImg} alt="hero_img" className="h-[476px] w-[459px]" />
    </div>
  );
};

export default Hero;
