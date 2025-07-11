import React from "react";
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-300 text-gray-800">
      <div className="flex flex-wrap justify-between items-start gap-6 p-4 sm:px-10 sm:py-6">
        <div className="w-full sm:w-[350px]">
          <p className="mb-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam beatae
            ipsum repellat fugiat et.
          </p>
          <div className="flex flex-col gap-2">
            <p className="text-sm">Join our community to receive updates</p>
            <form className="flex border rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 text-sm outline-none"
              />
              <button
                type="submit"
                className="bg-green-800 text-white text-sm px-4 py-2 hover:bg-green-700 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 flex-1">
          <div className="flex flex-col">
            <h1 className="font-semibold mb-2">Training Center</h1>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-2 sm:gap-6 text-sm">
              <Link to="/" className="hover:underline">
                {" "}
                Web Dev
              </Link>
              <Link to="/" className="hover:underline"> 
                Beauty & Cosmetology
              </Link>
              <Link to="/" className="hover:underline"> 
                Solar Installation
              </Link>
              <Link to="/" className="hover:underline"> 
                Graphic Design
              </Link>
              <Link to="/" className="hover:underline"> 
                AI Training
              </Link>
              <Link to="/" className="hover:underline"> 
                Fashion & Tailoring
              </Link>
              <Link to="/" className="hover:underline"> 
                Cyber Security
              </Link>
              <Link to="/" className="hover:underline"> 
                Cloud Engineering
              </Link>
            </div>
          </div>
          <div className="flex flex-col px-4">
            <h1 className="font-semibold mb-2">Legal</h1>
            <div className="flex flex-col gap-1 text-sm">
              <Link to="/" className="hover:underline">
                Privacy Policy
              </Link>
              <Link to="/" className="hover:underline">
                Terms of Service
              </Link>
              <Link to="/" className="hover:underline">
                Cookie Policy
              </Link>
              <Link to="/" className="hover:underline">
                Disclaimer
              </Link>
            </div>
          </div> 
          <div className="flex flex-col">
            <h1 className="font-semibold mb-2">Support</h1>
            <div className="flex flex-col gap-1 text-sm">
              <Link to="/" className="hover:underline">
                Help Center
              </Link>
              <Link to="/" className="hover:underline">
                Contact Us
              </Link>
              <Link to="/" className="hover:underline">
                FAQs
              </Link>
              <Link to="/" className="hover:underline">
                Documentation
              </Link>
            </div>
          </div>
        </div>
      </div> 
      <div className="border-t border-slate-300 px-6 py-3 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-center sm:text-left mb-2 sm:mb-0 text-sm">
          &copy; {new Date().getFullYear()}
          <b className="text-green-600"> NPRGS</b>. All rights
          reserved.
        </p>
        <div className="flex space-x-3 items-center text-xl">
          <Link to="https://www.instagram.com/dr_abiola_arogundade?igsh=MWg1dDE0NnByZGt1Mg==">
            <IoLogoInstagram />
          </Link>
          <Link to="https://www.facebook.com/share/19YEUQ8Tw5/">
            <FaFacebookSquare />
          </Link>
          <Link to="https://www.linkedin.com/in/abiola-arogundade?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin />
          </Link> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;
