import React from "react";

const Search = () => {
  return (
    <div className="mt-12 w-full md:w-[618.7px] flex">
      <input
        type="text"
        className="w-[70%] md:py-[17px] pl-[15px] border border-metagray outline-none rounded-tl-lg rounded-bl-lg"
        placeholder="Search for location"
      />
      <a href="/" className="bg-major w-[30%] md:w-[230px] py-[10px] px-[30px] md:py-[17px] md:px-[87px] rounded-tr-lg rounded-br-lg text-white">Search</a>
    </div>
  );
};

export default Search;
