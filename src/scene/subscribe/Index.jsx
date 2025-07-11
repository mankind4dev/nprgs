import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div>
      <div className="hidden sm:flex items-center">
        <Link
          to="/sign-up"
          className="rounded-full py-2 px-6 bg-green-800 hover:bg-green-700 transition"
        >
          <p className="capitalize text-white text-sm">Register</p>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
