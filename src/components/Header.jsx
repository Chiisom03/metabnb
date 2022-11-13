import React from "react";
import logo from "../assets/svg/logo.svg";
import Button from "./Button";

const Header = () => {
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
    <div className=" mx-[100px] h-12 flex items-center justify-between mt-[43px]">
      <a href="/">
        <img
          src={logo}
          alt="metabnb logo"
          className="w-[188.1px] h-[32.19px]"
        />
      </a>
      <ul className="flex">
        {navLinks.map((nav) => (
          <a key={nav.name} href={nav.link} className="mr-12">
            <li>{nav.name}</li>
          </a>
        ))}
      </ul>
      <Button link="/wallet" btnName="Connect Wallet" />
    </div>
  );
};

export default Header;
