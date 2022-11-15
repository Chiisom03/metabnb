import React from "react";
import NFT from "./NFT";
import inspiro from "../assets/images/inspiro.png";
import { images } from "../nfts";

const Inspirations = () => {
  return (
    <div className="mt-[58px] md:mx-[100px] mx-4">
      <h2 className="text-4xl md:text-5xl font-bold mb-[43px] text-center">
        Inspiration for your next adventure
      </h2>
      <div className="grid grid-cols-1 place-items-center gap-y-6 md:grid-cols-4 md:gap-6 mb-[53px]">
        {images.map((i) => (
          <NFT key={i.link} image={inspiro} />
        ))}
      </div>
    </div>
  );
};

export default Inspirations;
