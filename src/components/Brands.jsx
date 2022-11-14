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
    <div className="h-[70px] w-full bg-major flex justify-around py-[14.61px] mt-[67px]">
      {brands.map((brand) => (
        <img src={brand.name} alt="mbtoken_logo" className="h-[40.9px] w-[198.32px]" />
      ))}
    </div>
  );
};

export default Brands;
