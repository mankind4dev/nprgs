import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import SmallDevice from "./SmallDevice";
import Subscribe from "../subscribe/Index";
import DesktopScreen from "./DesktopScreen";
import ToggleButton from "./ToggleButton";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const isActive = (path) => currentPath.startsWith(path);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/images/logo.jpg"
                alt="Renewed Hope Tech Logo"
                className="w-12 h-10"
              />
              <span className="text-sm font-bold text-gray-800 hidden sm:block">
                Renewed Hope
              </span>
            </Link>
          </div>
          <DesktopScreen
            isActive={isActive}
            toggleDropdown={toggleDropdown}
            dropdownRef={dropdownRef}
            isDropdownOpen={isDropdownOpen}
            setIsDropdownOpen={setIsDropdownOpen}
          />
          <Subscribe />
          <ToggleButton toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </div>
      </div>
      <div className="h-full overflow-y-scroll">
        <SmallDevice
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      </div>
    </nav>
  );
};

export default Navbar;
