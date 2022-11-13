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
    <div className="flex">
      <img src={logo} alt="metabnb logo" className="w-[233px] h-[33.67px]" />
      <ul>
        {navLinks.map((nav) => (
          <a key={nav.name} href={nav.link}>
            <li>{nav.name}</li>
          </a>
        ))}
      </ul>
      <Button link="/wallet" btnName="Connect Wallet" />
    </div>
  );
};

export default Header;
