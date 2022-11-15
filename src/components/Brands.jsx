import React from "react";
import mbtoken from "../assets/images/MBToken.png";
import metamask from "../assets/images/metamask.png";
import opensea from "../assets/images/opensea.png";

const Brands = () => {
  const brands = [
    { name: mbtoken },
    { name: metamask },
    { name: opensea },
  ];
  return (
    <div className="h-[70px] w-full bg-major flex items-center justify-around py-[14.61px] mt-[67px]">
      {brands.map((brand) => (
        <img key={brand.name} src={brand.name} alt="mbtoken_logo" className="h-[25px] w-[90px] md:h-[40.9px] md:w-[198.32px]" />
      ))}
    </div>
  );
};

export default Brands;
