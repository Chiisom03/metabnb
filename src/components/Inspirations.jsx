import React from "react";
import NFT from "./NFT";
import inspiro from "../assets/images/inspiro.png";


const Inspirations = () => {
  return (
    <div className="mt-[58px] px-[100px]">
      <h2 className="text-5xl font-bold mb-[43px]">
        Inspiration for your next adventure
      </h2>
      <NFT image={inspiro} />
    </div>
  );
};

export default Inspirations;
