import React from "react";
import { MdFastfood } from "react-icons/md";
import { FaSearchengin } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

const Nav = () => {
  return (
    <div className="w-full h-[100px]  flex  justify-between items-center px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood  className="w-[30px] h-[30px] text-green-500"/>
      </div>
      <form className="w-[60%] h-[60px] bg-white flex items-center">
        <FaSearchengin/>
        <input type="text" placeholder=" search" className="w-[80%]"></input>
      </form>
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
      <FiShoppingBag className="w-[30px] h-[30px] text-green-500"/>
      </div>
    </div>
  );
};

export default Nav;
