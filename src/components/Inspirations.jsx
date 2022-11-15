import React from "react";
import NFT from "./NFT";
import inspiro from "../assets/images/inspiro.png";
import { images } from "../nfts";

const Inspirations = () => {
  return (
    <div className="mt-[58px] mx-[100px]">
      <h2 className="text-5xl font-bold mb-[43px] text-center">
        Inspiration for your next adventure
      </h2>
      <div className="grid grid-cols-4 gap-6">
        {images.map((link) => (
          <NFT image={inspiro} />
        ))}
      </div>
    </div>
  );
};

export default Inspirations;
