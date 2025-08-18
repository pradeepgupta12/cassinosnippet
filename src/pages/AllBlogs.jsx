


import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { casinoBlogs } from "../Data/casinoBlogs";

const AllBlogs = () => {
  const allBlogs = casinoBlogs.blogs || [];

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] overflow-visible">
      <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-6">
        All Casino Blogs
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {allBlogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.category.toLowerCase().replace(/ /g, '-')}/${blog.slug}`}
            className="rounded-lg bg-white shadow-md border border-gray-200 hover:shadow-lg hover:border-[#FFD700] hover:-translate-y-2 duration-300 flex flex-col min-h-[200px] p-0"
          >
            <img src={blog.image_url} alt={`${blog.title} image`} className="w-full h-60 object-cover object-center rounded-t-lg" />
            <div className="p-4">
              <h4 className="text-lg font-semibold text-[#333333] mb-2">{blog.title.length > 30 ? `${blog.title.slice(0, 30)}...` : blog.title}</h4>
              <p className="text-gray-600 text-sm mb-2">{blog.excerpt.length > 100 ? `${blog.excerpt.slice(0, 100)}...` : blog.excerpt}</p>
              <div className="flex justify-between text-xs text-gray-500 mb-2">
                <span>{blog.author}</span>
                <span>{new Date(blog.published_date).toLocaleDateString()}</span>
              </div>
              <span
                className="text-[#E63946] hover:text-[#D62828] font-semibold flex items-center gap-2 cursor-pointer"
              >
                Readmore <FaArrowRight className="text-[#E63946] hover:text-[#D62828]" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;
