import React, { useState } from "react";

const SearchPage = () => {
  const [sidebarData, setSidebarData] = useState({
    searchTerm: "",
    sort: "desc",
    category: "uncategorized",
  });

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);

  const handleChange = (e) => {
    setSidebarData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Replace with your API call logic
      const res = await fetch(
        `/api/posts?search=${sidebarData.searchTerm}&sort=${sidebarData.sort}&category=${sidebarData.category}`
      );
      const data = await res.json();
      setPosts(data.posts);
      setShowMore(data.posts.length >= 10); // Example condition
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleShowMore = () => {
    // Example pagination logic
    console.log("Load more posts...");
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="p-7 border-b md:border-r md:min-h-screen border-gray-500">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
          <div className="flex items-center gap-2">
            <label htmlFor="searchTerm" className="font-semibold">
              Search Term:
            </label>
            <input
              id="searchTerm"
              type="text"
              placeholder="Search..."
              value={sidebarData.searchTerm}
              onChange={handleChange}
              className="border p-2 rounded w-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="font-semibold">
              Sort:
            </label>
            <select
              id="sort"
              value={sidebarData.sort}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="desc">Latest</option>
              <option value="asc">Oldest</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label htmlFor="category" className="font-semibold">
              Category:
            </label>
            <select
              id="category"
              value={sidebarData.category}
              onChange={handleChange}
              className="border p-2 rounded"
            >
              <option value="uncategorized">Uncategorized</option>
              <option value="reactjs">React.js</option>
              <option value="nextjs">Next.js</option>
              <option value="javascript">JavaScript</option>
            </select>
          </div>

          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold py-2 px-4 rounded hover:opacity-90"
          >
            Apply Filters
          </button>
        </form>
      </div>

      <div className="w-full">
        <h1 className="text-3xl font-semibold border-b border-gray-500 p-3 mt-5">
          Posts results:
        </h1>

        <div className="p-7 flex flex-wrap gap-4">
          {!loading && posts.length === 0 && (
            <p className="text-xl text-gray-500">No posts found.</p>
          )}
          {loading && <p className="text-xl text-gray-500">Loading...</p>}

          {!loading &&
            posts.map((post) => (
              <div
                key={post._id}
                className="border rounded p-4 shadow-md w-full sm:w-1/2 md:w-1/3"
              >
                <h2 className="font-bold text-lg">{post.title}</h2>
                <p className="text-gray-600 text-sm">{post.category}</p>
                <p className="mt-2">{post.content.slice(0, 100)}...</p>
              </div>
            ))}

          {showMore && (
            <button
              onClick={handleShowMore}
              className="text-teal-500 text-lg hover:underline p-7 w-full"
            >
              Show More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
