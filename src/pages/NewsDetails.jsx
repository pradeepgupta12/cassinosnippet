

import React, { useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { casinoNewsAndStories } from "../Data/casinoNewsAndStories";

const NewsDetails = () => {
  const { category, slug } = useParams();
  const allItems = [...(casinoNewsAndStories.news || []), ...(casinoNewsAndStories.stories || [])];
  const item = allItems.find((i) => i.category.toLowerCase().replace(/ /g, '-') === category && i.slug === slug);
  const similarItems = allItems.filter((i) => i.id !== item?.id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [category, slug]);

  if (!item) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          News/Story Not Found
        </h2>
        <p className="text-gray-600">Sorry, we couldn't find the news or story you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
      {/* Left Column: News/Story Content */}
      <div className="w-full lg:w-2/3">
        {/* Title and Meta */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 leading-tight">
          {item.title}
        </h1>
        <p className="text-sm text-gray-500 mb-6">
          {new Date(item.published_date).toLocaleDateString()} • {item.read_time_minutes} min read
        </p>

        {/* Hero Image */}
        <img
          src={item.image_url}
          alt={item.title}
          className="w-full md:h-[400px] h-[250px] object-cover-contain rounded-xl mb-8 shadow-md"
        />

        {/* Intro / Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {item.description}
        </p>

        {/* Content Section */}
        <div className="space-y-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              {item.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              {item.content}
            </p>
          </div>
          {/* Additional Metadata */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Details
            </h2>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              <span className="font-semibold">Category:</span> {item.category}
            </p>
            <p className="text-gray-700 leading-relaxed text-[16px] mt-2">
              <span className="font-semibold">Tags:</span> {item.tags.join(", ")}
            </p>
            <p className="text-gray-700 leading-relaxed text-[16px] mt-2">
              <span className="font-semibold">Author:</span> {item.author}
            </p>
          </div>
        </div>
      </div>

      {/* Right Column: Ad and Similar News/Stories */}
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
          {/* Similar News/Stories Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Similar News & Stories</h3>
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:space-y-4 lg:grid-cols-1">
              {similarItems.slice(0, 3).map((similarItem) => (
                <Link
                  key={similarItem.id}
                  to={`/${similarItem.category.toLowerCase().replace(/ /g, '-')}/${similarItem.slug}`}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-[#FFD700] transition-transform duration-300 transform hover:-translate-y-1 flex"
                >
                  <img
                    src={similarItem.image_url}
                    alt={`${similarItem.title} image`}
                    className="w-30 h-24 object-cover rounded-l-lg"
                  />
                  <div className="p-3 flex-1">
                    <h4 className="text-sm font-semibold text-[#333333] mb-1">
                      {similarItem.title.length > 30 ? `${similarItem.title.slice(0, 30)}...` : similarItem.title}
                    </h4>
                    <p className="text-xs text-gray-600">
                      {similarItem.description.length > 50 ? `${similarItem.description.slice(0, 50)}...` : similarItem.description}
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

export default NewsDetails;