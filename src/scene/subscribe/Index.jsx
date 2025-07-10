import React from "react";
import { Link } from "react-router-dom";

const Subscribe = () => {
  return (
    <div>
      <div className="hidden sm:flex items-center">
        <Link
          to="/subscribe"
          className="rounded-full py-2 px-6 bg-amber-500 hover:bg-amber-600 transition"
        >
          <p className="capitalize text-white text-sm">Subscribe</p>
        </Link>
      </div>
    </div>
  );
};

export default Subscribe;
