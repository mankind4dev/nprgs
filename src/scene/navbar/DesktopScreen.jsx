import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const DesktopScreen = ({
  dropdownRef,
  toggleDropdown,
  isDropdownOpen,
  setIsDropdownOpen,
}) => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="hidden sm:flex flex-1 justify-center space-x-6 items-center">
      <Link
        to="/"
        className={`text-sm font-medium px-3 py-2 rounded-md ${
          isActive("/")
           ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
        }`}
      >
        Home
      </Link>

      <Link
        to="/aboutUs"
        className={`text-sm font-medium px-3 py-2 rounded-md ${
          isActive("/aboutUs")
             ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
        }`}
      >
        About Us
      </Link>
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={toggleDropdown}
          className="flex items-center space-x-1 text-sm font-medium focus:outline-none text-gray-900 hover:text-green-700"
        >
          <span>Our Services</span>
          <FaChevronDown className="text-xs" />
        </button>

        {isDropdownOpen && (
          <div className="absolute left-0 mt-6 w-56 bg-white rounded-md shadow-lg z-50">
            <Link
              to="/services/software-dev"
              className={`block px-4 py-2 text-sm ${
                isActive("/services/software-dev")
          ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Software Dev
            </Link>
            <Link
              to="/services/cyber-security"
              className={`block px-4 py-2 text-sm ${
                isActive("/services/cyber-security")
                   ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Cyber Security
            </Link>
            <Link
              to="/services/devops"
              className={`block px-4 py-2 text-sm ${
                isActive("/services/devops")
                  ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              DevOps
            </Link>
            <Link
              to="/services/computer-training"
              className={`block px-4 py-2 text-sm ${
                isActive("/services/computer-training")
                   ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Computer Training
            </Link>
            <Link
              to="/services/access-to-funds"
              className={`block px-4 py-2 text-sm ${
                isActive("/services/access-to-funds")
                 ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Access To Funds
            </Link>
            <Link
              to="/services/innovation-labs"
              className={`block px-4 py-2 text-sm ${
                isActive("/services/innovation-labs")
                  ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              Innovation Labs
            </Link>
            <Link
              to="/services/ai-training"
              className={`block px-4 py-2 text-sm ${
                isActive("/services/ai-training")
                  ? "text-green-800"
                  : "text-gray-700 hover:text-green-700"
              }`}
              onClick={() => setIsDropdownOpen(false)}
            >
              AI Training
            </Link>
          </div>
        )}
      </div>

      <Link
        to="/news-room"
        className={`text-sm font-medium px-3 py-2 rounded-md ${
          isActive("/news-room")
            ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
        }`}
      >
        News Room
      </Link>

      <Link
        to="/contactUs"
        className={`text-sm font-medium px-3 py-2 rounded-md ${
          isActive("/contactUs")
            ? "text-green-800"
            : "text-gray-700 hover:text-green-700"
        }`}
      >
        Contact Us
      </Link>
    </div>
  );
};

export default DesktopScreen;
