import React from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const ToggleButton = ({toggleMenu, isMenuOpen}) => {
  return (
    <>
      <div className="sm:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-600 hover:text-gray-900 focus:outline-none"
        >
          {isMenuOpen ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <IoMenu className="h-6 w-6" />
          )}
        </button>
      </div>
    </>
  );
};

export default ToggleButton;
