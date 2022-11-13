import React from "react";

const Button = ({ link, btnName }) => {
  return (
    <a
      href={link}
      className="bg-major h-12 w-[170px] rounded-xl text-white grid place-items-center"
    >
      {btnName}
    </a>
  );
};

export default Button;
