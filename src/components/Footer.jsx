import React from "react";
import facebook from "../assets/svg/facebook.svg";
import instagram from "../assets/svg/instagram.svg";
import twitter from "../assets/svg/twitter.svg";
import footerlogo from "../assets/svg/footerlogo.svg";

const Footer = () => {
  return (
    <footer className="h-[322px] w-full px-[113px] pt-[62.88px] pb-[37px] bg-[#1D1D1E] text-white flex justify-between items-center">
      <div className="">
        <img
          src={footerlogo}
          alt="metabnb logo"
          className="h-10 w-[233px] mb-[94px]"
        />
        <div className="mb-[59px] flex justify-between max-w-[118px]">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={twitter} alt="twitter" />
        </div>
        <p>&copy; 2022 Metabnb </p>
      </div>
      {[0, 1, 2].map((i) => (
        <ul key={i}>
          <h2 className="font-bold text-lg mb-[23px]">Community</h2>
          {["NFT", "Tokens", "Discord", "Landlords"].map((e) => (
            <li key={e} className="mb-4">
              {e}
            </li>
          ))}
        </ul>
      ))}
    </footer>
  );
};

export default Footer;
