import React from "react";
import rating from "../assets/images/rating.png"

const NFT = ({image}) => {
  return (
    <div className="rounded-[15px] border border-metafade h-[372px] w-[292px] p-4">
      <img
        src={image}
        alt=""
        className="w-[260px] h-[265px] rounded-[15px] mb-4"
      />
      <div className="flex text-xs justify-between mb-[10px]">
        <p>Desert king</p>
        <p>1MBT per night</p>
      </div>
      <div className="flex text-xs justify-between">
        <p>2345km away</p>
        <p>available for 2weeks stay</p>
      </div>
      <img src={rating} alt="" className="w-[92px] h-[12] mt-[9px] mb-4" />
    </div>
  );
};

export default NFT;
