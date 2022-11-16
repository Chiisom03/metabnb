import React from "react";

const Button = ({ link, btnName, showModal }) => {
  const handleShowModal = () => {
    return showModal = !showModal;
  };
  return (
    <a
      href={link}
      className="bg-major h-12 w-[170px] rounded-xl text-white grid place-items-center md:relative absolute top-64 left-16 md:top-0 md:left-0 opacity-0 md:opacity-100"
      onClick={() => handleShowModal()}
    >
      {btnName}
    </a>
  );
};

export default Button;
