

import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { guidesData } from "../Data/guidesData";

const AllGuides = () => {
  const truncateDescription = (text, maxLength = 120) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <div className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] overflow-visible">
      <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-6">
        All Casino Guides
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {guidesData.guides.map((guide) => (
          <Link
            key={guide.guideId}
            to={`/guides/${guide.guideId}`}
            className="relative bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:border-[#FFD700] transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
          >
            {/* Guide Image */}
            <div className="relative h-48 w-full">
              <img
                src={guide.image}
                alt={`${guide.title} image`}
                className="w-full h-full object-cover-contain object-center"
              />
              {/* Category Badge */}
              <span className="absolute top-2 right-2 bg-[#FFD700] text-[#333333] text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {guide.category}
              </span>
            </div>
            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
              <h4 className="text-lg font-semibold text-[#333333] mb-2 line-clamp-2">
                {guide.title}
              </h4>
              <p className="text-gray-700 text-sm mb-4 flex-grow line-clamp-3">
                {truncateDescription(guide.description)}
              </p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-[#E63946] hover:text-[#D62828] font-semibold flex items-center gap-2">
                  Learn More <FaArrowRight className="text-[#E63946] hover:text-[#D62828]" />
                </span>
                <span className="text-xs text-gray-500">5 min read</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllGuides;