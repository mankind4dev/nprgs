import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const SmallDevice = ({ isMenuOpen, toggleMenu }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {isMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-4 space-y-2 border-t border-slate-300 bg-white shadow-md overflow-y-scroll">
          <Link
            to="/"
            onClick={toggleMenu}
            className={`block text-sm ${
              isActive("/")
                ? "text-green-500"
                : "text-gray-900 hover:text-indigo-600"
            }`}
          >
            Home
          </Link>

          <Link
            to="/aboutUs"
            onClick={toggleMenu}
            className={`block text-sm ${
              isActive("/aboutUs")
                ? "text-green-500"
                : "text-gray-900 hover:text-indigo-600"
            }`}
          >
            About Us
          </Link>
          <div className="space-y-1">
            <button
              onClick={() => setOpen(!open)}
              className="flex justify-between items-center pr-2 text-gray-800 font-semibold text-left w-full focus:outline-none"
            >
              <div className="">Our Services</div>
              <p className="">
                {open ? (
                  <FaChevronUp className="text-xs" />
                ) : (
                  <FaChevronDown className="text-xs" />
                )}
              </p>
            </button>
            {open && (
              <div className="pl-4 space-y-2 text-sm">
                <Link
                  to="/services/software-dev"
                  onClick={toggleMenu}
                  className={`flex ${
                    isActive("/services/software-dev")
                      ? "text-green-500"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  <li>Software Dev</li>
                </Link>
                <Link
                  to="/services/cyber-security"
                  onClick={toggleMenu}
                  className={`block ${
                    isActive("/services/cyber-security")
                      ? "text-green-500"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  <li>Cyber Security</li>
                </Link>
                <Link
                  to="/services/devops"
                  onClick={toggleMenu}
                  className={`block ${
                    isActive("/services/devops")
                      ? "text-green-500"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  <li>DevOps</li>
                </Link>
                <Link
                  to="/services/computer-training"
                  onClick={toggleMenu}
                  className={`block ${
                    isActive("/services/computer-training")
                      ? "text-green-500"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  <li>Computer Training</li>
                </Link>
                <Link
                  to="/services/access-to-funds"
                  onClick={toggleMenu}
                  className={`block ${
                    isActive("/services/access-to-funds")
                      ? "text-green-500"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  <li>Access To Funds</li>
                </Link>
                <Link
                  to="/services/innovation-labs"
                  onClick={toggleMenu}
                  className={`block ${
                    isActive("/services/innovation-labs")
                      ? "text-green-500"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  <li>Innovation Labs</li>
                </Link>
                <Link
                  to="/services/ai-training"
                  onClick={toggleMenu}
                  className={`block ${
                    isActive("/services/ai-training")
                      ? "text-green-500"
                      : "text-gray-700 hover:text-indigo-600"
                  }`}
                >
                  <li>AI Training</li>
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/news-room"
            onClick={toggleMenu}
            className={`block text-sm ${
              isActive("/news-room")
                ? "text-green-500"
                : "text-gray-900 hover:text-indigo-600"
            }`}
          >
            News Room
          </Link>

          <Link
            to="/contactUs"
            onClick={toggleMenu}
            className={`block text-sm ${
              isActive("/contactUs")
                ? "text-green-500"
                : "text-gray-900 hover:text-indigo-600"
            }`}
          >
            Contact Us
          </Link>

          <Link
            to="/sign-up"
            onClick={toggleMenu}
            className="block w-3/6 mt-2 rounded-full py-2 px-4 bg-green-500 text-white text-center text-sm hover:bg-green-600"
          >
            Register
          </Link>
        </div>
      )}
    </>
  );
};

export default SmallDevice;
