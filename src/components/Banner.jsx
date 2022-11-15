import React from "react";
import metaNft from "../assets/images/metanft.png";
const Banner = () => {
  return (
    <div className="h-full md:h-[744px] w-full bg-major text-white p-8 md:py-[100px] md:pl-[100px] md:pr-[90px] md:flex md:justify-between items-center">
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
      <img
        src={metaNft}
        alt="meta NFTs"
        className="w-full h-[300px] my-12 md:my-0 md:w-[704px] md:h-[574.85px]"
      />
    </div>
  );
};

export default Banner;
