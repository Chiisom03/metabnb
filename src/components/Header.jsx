import React from "react";
import logo from "../assets/svg/logo.svg";
import Button from "./Button";

const Header = ({showModal}) => {
  const navLinks = [
    {
      name: "Home",
      link: "\\",
    },
    {
      name: "Place to stay",
      link: "\\places",
    },
    {
      name: "NFTs",
      link: "\\nfts",
    },
    {
      name: "Community",
      link: "\\community",
    },
  ];
  return (
    <div className=" mx-auto w-[1000px] h-12 md:flex block items-center justify-around mt-[43px]">
      <a href="/">
        <img
          src={logo}
          alt="metabnb logo"
          className="w-[188.1px] h-[32.19px] absolute top-8 left-4 md:relative md:top-0 md:left-0"
        />
      </a>

      <ul className="md:flex block px-20 md:relative absolute bg-white p-10 md:p-0 md:bg-transparent top-0 left-0 right-0 opacity-1">
        {navLinks.map((nav) => (
          <a key={nav.name} href={nav.link} className="mr-12">
            <li className="text-2xl md:text-base">{nav.name}</li>
          </a>
        ))}
      </ul>
      <Button link="#" btnName="Connect Wallet" showModal={showModal} />
    </div>
  );
};

export default Header;
