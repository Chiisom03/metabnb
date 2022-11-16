import React from "react";
import metamask from "../assets/images/metamaskwallet.png";
import walletconnect from "../assets/images/walletconnect.png";

const Modal = ({ showModal }) => {
  const handleShowModal = () => (showModal ? "block" : "hidden");
  const closeModal = () => {
    return showModal ? !showModal : showModal;
  };

  return (
    <div
      className={`bg-modal absolute top-0 left-0 right-0 bottom-0 ${handleShowModal()} grid place-items-center`}
    >
      <div className=" w-[600px] bg-white rounded-2xl">
        <div className="py-6 px-8 flex justify-between border-b border-metagray">
          <p className="font-bold text-2xl">Connect Wallet</p>
          <p onClick={() => closeModal()} className="cursor-pointer">
            X
          </p>
        </div>
        <div className="p-8">
          <p>Choose your preferred wallet:</p>
          <div className="wallet">
            <span className="wallet-txt">
              <img
                src={metamask}
                alt="Metamask logo"
                className="w-11 h-11 mr-2"
              />
              Metamask
            </span>
          </div>
          <div className="wallet">
            <span className="wallet-txt">
              <img
                src={walletconnect}
                alt="Wallet connect"
                className="w-11 h-11 mr-2"
              />
              Wallet Connect
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
