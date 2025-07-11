import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { Link } from "react-router-dom";

const NewsUpdate = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("/api/post/getPosts");
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="my-4">
        <div className="max-[80%] mx-auto p-3 flex flex-col gap-8 py-7">
          {/* {posts && posts.length > 0 && ( */}
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-start">
                Recent News:
              </h2>
              <div className="flex flex-wrap gap-4">
                {/* {posts.map((post) => ( */}
                  <NewsCard 
                //   key={post._id} 
                //   post={post} 
                  />
                {/* ))} */}
              </div>
              <Link
                to={"/search"}
                className="text-lg text-teal-500 hover:underline text-center"
              >
                View all posts
              </Link>
            </div>
          {/* )} */}
        </div>
      </div>
    </>
  );
};

export default NewsUpdate;
