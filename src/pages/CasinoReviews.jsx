
import React, { useLayoutEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { casinoData } from "../Data/casinoData";

const CasinoReviews = () => {
  const { id } = useParams();
  const casino = casinoData.casinos.find((casino) => casino.id === id);
  const similarCasinos = casinoData.casinos.filter((c) => c.id !== id);

  // Scroll to top when the component mounts or ID changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!casino) {
    return (
      <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] mb-6">
          Casino Not Found
        </h2>
        <p className="text-gray-600">Sorry, we couldn't find the casino you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] overflow-visible">
      {/* Main Container */}
      <div className="flex flex-col gap-8">
        {/* Casino Details */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-6">
          {casino.name} Review
        </h2>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column: Image and Ad Sections */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            <img
              src={casino.image}
              alt={`${casino.name} logo`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            {/* First Ad Section */}
            <div className="w-full bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-[#1A1A3D] mb-4">Advertisement</h4>
              <img
                src="https://via.placeholder.com/300x600?text=Your+Ad+Here"
                alt="Ad Banner"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
            {/* Second Ad Section */}
            <div className="w-full bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-[#1A1A3D] mb-4">Advertisement</h4>
              <img
                src="https://via.placeholder.com/300x600?text=Your+Ad+Here"
                alt="Ad Banner"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Right Column: Casino Details */}
          <div className="w-full md:w-2/3 flex flex-col gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h3 className="text-2xl font-bold text-[#1A1A3D] mb-4">{casino.name}</h3>
              <div className="flex items-center text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.round(casino.rating) ? "text-yellow-500" : "text-gray-300"
                    }
                  />
                ))}
                <span className="ml-2 text-sm text-[#333333]">
                  {casino.rating.toFixed(1)}/5
                </span>
              </div>
              <p className="text-gray-700 text-base mb-4">{casino.description}</p>
              <a
                href={casino.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD700] hover:bg-[#FFC107] text-[#333333] font-semibold text-center py-2 px-6 rounded transition inline-block"
              >
                Visit Casino
              </a>
            </div>
            {/* Bonus Information */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-[#1A1A3D] mb-4">Bonus Details</h4>
              <p className="text-gray-700 text-base mb-4">
                {casino.bonus} - {casino.review.bonuses}
              </p>
            </div>
            {/* Additional Review Details */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
              <h4 className="text-xl font-semibold text-[#1A1A3D] mb-4">Full Review</h4>
              {Object.entries(casino.review).map(([key, value]) => (
                <div key={key} className="mb-4">
                  <h5 className="text-lg font-semibold text-[#333333] capitalize">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </h5>
                  <p className="text-gray-700 text-base">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Similar Casinos Section */}
        <div className="mt-8">
          <h3 className="text-2xl md:text-3xl font-bold text-[#333333] text-center mb-6">
            Similar Casinos Review
          </h3>
          <div className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0">
            {similarCasinos.map((similarCasino) => (
              <Link
                key={similarCasino.id}
                to={`/casino-reviews/${similarCasino.id}`}
                className="min-w-[300px] bg-white border border-transparent hover:border-[#FFD700] rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
              >
                <img
                  src={similarCasino.image}
                  alt={`${similarCasino.name} logo`}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <h3 className="text-[#1A1A3D] font-bold text-lg mb-2">
                    {similarCasino.name}
                  </h3>
                  <div className="flex items-center text-yellow-500 mb-2">
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
                    <span className="ml-2 text-sm text-[#333333]">
                      {similarCasino.rating.toFixed(1)}/5
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm mb-4">
                    {similarCasino.description}
                  </p>
                  <div
                    className="bg-[#FFD700] hover:bg-[#FFC107] text-[#333333] font-semibold text-center py-2 rounded transition mt-auto cursor-pointer"
                  >
                    Read Full Review
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasinoReviews;