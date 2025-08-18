


import React, { useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { casinoBlogs } from "../Data/casinoBlogs";

const BlogDetails = () => {
  const { category, slug } = useParams();
  const allBlogs = casinoBlogs.blogs || [];
  const blog = allBlogs.find((b) => b.category.toLowerCase().replace(/ /g, '-') === category && b.slug === slug);
  const similarBlogs = allBlogs.filter((b) => b.id !== blog?.id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [category, slug]);

  if (!blog) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          Blog Not Found
        </h2>
        <p className="text-gray-600">Sorry, we couldn't find the blog you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
      {/* Left Column: Blog Content */}
      <div className="w-full lg:w-2/3">
        {/* Title and Meta */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 leading-tight">
          {blog.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {new Date(blog.published_date).toLocaleDateString()} • {blog.read_time_minutes} min read
        </p>

        {/* Hero Image */}
        <img
          src={blog.image_url}
          alt={blog.title}
          className="w-full md:h-[400px] h-[250px] object-cover-contain rounded-xl mb-8 shadow-md"
        />

        {/* Intro / Excerpt */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {blog.excerpt}
        </p>

        {/* Content Section */}
        <div className="space-y-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              {blog.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              {blog.content}
            </p>
          </div>
          {/* Additional Metadata */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Details
            </h2>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              <span className="font-semibold">Category:</span> {blog.category}
            </p>
            <p className="text-gray-700 leading-relaxed text-[16px] mt-2">
              <span className="font-semibold">Tags:</span> {blog.tags.join(", ")}
            </p>
            <p className="text-gray-700 leading-relaxed text-[16px] mt-2">
              <span className="font-semibold">Author:</span> {blog.author}
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Ad and Similar Blogs */}
      <div className="w-full lg:w-1/3">
        <div className="lg:sticky top-20 space-y-6">
          {/* First Ad Section */}
          <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Sponsored</h3>
            <a
              href="https://your-affiliate-link.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300"
            >
              <img
                src="https://advertising.expedia.com/wp-content/uploads/2024/03/RF_Stocksy_txp5d066667Jyg300_Large_5091864-1024x1024.jpg"
                alt="Ad"
                className="w-full h-64 md:h-96 object-cover"
              />
            </a>
          </div>
          {/* Similar Blogs Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Similar Blogs</h3>
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:space-y-4 lg:grid-cols-1">
              {similarBlogs.slice(0, 3).map((similarBlog) => (
                <Link
                  key={similarBlog.id}
                  to={`/blog/${similarBlog.category.toLowerCase().replace(/ /g, '-')}/${similarBlog.slug}`}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-[#FFD700] transition-transform duration-300 transform hover:-translate-y-1 flex"
                >
                  <img
                    src={similarBlog.image_url}
                    alt={`${similarBlog.title} image`}
                    className="w-30 h-24 object-cover rounded-l-lg"
                  />
                  <div className="p-3 flex-1">
                    <h4 className="text-sm font-semibold text-[#333333] mb-1">
                      {similarBlog.title.length > 30 ? `${similarBlog.title.slice(0, 30)}...` : similarBlog.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {similarBlog.excerpt.length > 50 ? `${similarBlog.excerpt.slice(0, 50)}...` : similarBlog.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
