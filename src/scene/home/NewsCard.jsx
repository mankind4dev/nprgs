import React from "react";
import { Link } from "react-router-dom";

const NewsCard = () => {
  return (
    <>
      <div className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
        <Link
        // to={`/post/${post.slug}`}
        >
          <img
            // src={post.image}
            src="/images/nprs.jpg"
            alt="post cover"
            className="h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          />
        </Link>
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">
            {/* {post.title} */}
            <p>NPRGS </p>
          </p>
          <span className="italic text-sm">
            {/* {post.category} */}
            National poverty Reduction with Growth Strategy
          </span>
          <Link
            // to={`/post/${post.slug}`}
            className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
          >
            Read article
          </Link>
        </div>
      </div>
      <div className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
        <Link
        // to={`/post/${post.slug}`}
        >
          <img
            // src={post.image}
            src="/images/nprs2.jpg"
            alt="post cover"
            className="h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          />
        </Link>
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">
            {/* {post.title} */}
            <p>Web Development</p>
          </p>
          <span className="italic text-sm">
            {/* {post.category} */}
            web dev
          </span>
          <Link
            // to={`/post/${post.slug}`}
            className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
          >
            Read article
          </Link>
        </div>
      </div>
      <div className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
        <Link
        // to={`/post/${post.slug}`}
        >
          <img
            // src={post.image}
            src="/images/nprs1.jpg"
            alt="post cover"
            className="h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          />
        </Link>
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">
            {/* {post.title} */}
            <p>Cyber Security </p>
          </p>
          <span className="italic text-sm">
            {/* {post.category} */}
            web dev
          </span>
          <Link
            // to={`/post/${post.slug}`}
            className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
          >
            Read article
          </Link>
        </div>
      </div>
      <div className="group relative w-full border border-teal-500 hover:border-2 h-[400px] overflow-hidden rounded-lg sm:w-[430px] transition-all">
        <Link
        // to={`/post/${post.slug}`}
        >
          <img
            // src={post.image}
            src="/images/nprs4.jpg"
            alt="post cover"
            className="h-[260px] w-full  object-cover group-hover:h-[200px] transition-all duration-300 z-20"
          />
        </Link>
        <div className="p-3 flex flex-col gap-2">
          <p className="text-lg font-semibold line-clamp-2">
            {/* {post.title} */}
            <p>Testing </p>
          </p>
          <span className="italic text-sm">
            {/* {post.category} */}
            web dev
          </span>
          <Link
            // to={`/post/${post.slug}`}
            className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white transition-all duration-300 text-center py-2 rounded-md !rounded-tl-none m-2"
          >
            Read article
          </Link>
        </div>
      </div>
    </>
  );
};

export default NewsCard;
