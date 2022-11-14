import React from "react";
import inspiro from "../assets/images/inspiro.png";

const NFT = () => {
  return (
    <div className="rounded-[15px] border border-metablack h-[372px] w-[292px] p-4">
      <img
        src={inspiro}
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
    </div>
  );
};

export default NFT;
