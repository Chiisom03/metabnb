import React from "react";

const Modal = ({ display }) => {
  return (
    <div
      className={`bg-modal absolute top-0 left-0 right-0 bottom-0 ${display}`}
    >
      <div className="h-[326px] w-[600px] bg-white "></div>
    </div>
  );
};

export default Modal;
