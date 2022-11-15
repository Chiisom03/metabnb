import React from "react";
import metaNft from "../assets/images/metanft.png";
const Banner = () => {
  return (
    <div className="h-[744px] w-full bg-major text-white py-[100px] pl-[100px] pr-[90px] flex justify-between">
      <div className="">
        <h2 className="font-bold text-5xl mb-[35px]">Metabnb NFTs</h2>
        <p className="text-lg mb-[57px]">
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <a
          href="/"
          className="w-[156px] h-12 py-[15px] px-[33px] rounded-lg text-major bg-white"
        >
          Learn More
        </a>
      </div>
      <img src={metaNft} alt="meta NFTs" className="w-[704px] h-[574.85px]" />
    </div>
  );
};

export default Banner;
