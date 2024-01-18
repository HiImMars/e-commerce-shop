import React from "react";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { MdPinDrop } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="py-[60px] bg-grey">
      <div className="container flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex justify-center items-center gap-2">
          <MdPinDrop className="text-[30px] text-white" />
          <p className="text-[30px] text-white">Kyiv, Ukraine</p>
        </div>
        <a
          href="mailto:info@fakestore.com"
          target="_blank"
          rel="noreferrer"
          className="text-[20px] text-white hover:text-orange focus:text-orange duration-300"
        >
          info@fakestore.com
        </a>
        <div className="flex justify-center items-center gap-3 text-white text-[30px]">
          <FaFacebookSquare className=" hover:text-orange focus:text-orange duration-300 cursor-pointer" />
          <FaTwitter className=" hover:text-orange focus:text-orange duration-300 cursor-pointer" />
          <FaInstagram className=" hover:text-orange focus:text-orange duration-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
