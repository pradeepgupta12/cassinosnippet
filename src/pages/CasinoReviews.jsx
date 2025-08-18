

import React, { useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { casinoData } from "../Data/casinoData";

const CasinoReviews = () => {
  const { id } = useParams();
  const casino = casinoData.casinos.find((casino) => casino.id === id);
  const similarCasinos = casinoData.casinos.filter((c) => c.id !== id);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!casino) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          Casino Not Found
        </h2>
        <p className="text-gray-600">Sorry, we couldn't find the casino you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
      {/* Left Column: Casino Content */}
      <div className="w-full lg:w-2/3">
        {/* Title and Meta */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 leading-tight">
          {casino.name} Review
        </h1>
        <div className="flex items-center text-yellow-500 mb-6">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < Math.round(casino.rating) ? "text-yellow-500" : "text-gray-300"}
            />
          ))}
          <span className="ml-2 text-sm text-gray-500">
            {casino.rating.toFixed(1)}/5
          </span>
        </div>

        {/* Hero Image */}
        <img
          src={casino.image}
          alt={`${casino.name} logo`}
          className="w-full md:h-[400px] h-[250px] object-cover rounded-xl mb-8 shadow-md"
        />

        {/* Description */}
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          {casino.description}
        </p>

        {/* Content Section */}
        <div className="space-y-12">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              About {casino.name}
            </h2>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              {casino.description}
            </p>
          </div>
          {/* Bonus Information */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Bonus Details
            </h2>
            <p className="text-gray-700 leading-relaxed text-[16px]">
              {casino.bonus} - {casino.review.bonuses}
            </p>
          </div>
          {/* Additional Review Details */}
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
              Full Review
            </h2>
            {Object.entries(casino.review).map(([key, value]) => (
              <div key={key} className="mb-4">
                <h5 className="text-lg font-semibold text-gray-800 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h5>
                <p className="text-gray-700 leading-relaxed text-[16px]">{value}</p>
              </div>
            ))}
            <a
              href={casino.website}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#FFD700] hover:bg-[#FFC107] text-[#333333] font-semibold text-center py-2 px-6 rounded transition inline-block mt-4"
            >
              Visit Casino
            </a>
          </div>
        </div>
      </div>

      {/* Right Column: Ad and Similar Casinos */}
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
          {/* Similar Casinos Section */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-700">Similar Casinos</h3>
            <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:space-y-4 lg:grid-cols-1">
              {similarCasinos.slice(0, 3).map((similarCasino) => (
                <Link
                  key={similarCasino.id}
                  to={`/casino-reviews/${similarCasino.id}`}
                  className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-[#FFD700] transition-transform duration-300 transform hover:-translate-y-1 flex"
                >
                  <img
                    src={similarCasino.image}
                    alt={`${similarCasino.name} logo`}
                    className="w-30 h-24 object-cover rounded-l-lg"
                  />
                  <div className="p-3 flex-1">
                    <h4 className="text-sm font-semibold text-[#333333] mb-1">
                      {similarCasino.name.length > 30 ? `${similarCasino.name.slice(0, 30)}...` : similarCasino.name}
                    </h4>
                    <div className="flex items-center text-yellow-500 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={
                            i < Math.round(similarCasino.rating)
                              ? "text-yellow-500"
                              : "text-gray-300"
                          }
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600">
                      {similarCasino.description.length > 50 ? `${similarCasino.description.slice(0, 50)}...` : similarCasino.description}
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

export default CasinoReviews;