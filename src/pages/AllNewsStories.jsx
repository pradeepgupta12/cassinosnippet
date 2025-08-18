


import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaUser, FaCalendarAlt } from "react-icons/fa";
import { casinoNewsAndStories } from "../Data/casinoNewsAndStories";

const AllNewsStories = () => {
  const allItems = [...(casinoNewsAndStories.news || []), ...(casinoNewsAndStories.stories || [])];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white text-gray-900">
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Casino News
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Content with Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Articles List */}
          <div className="lg:col-span-2 space-y-6">
            {allItems.map((item, index) => (
              <Link
                key={item.id}
                to={`/news/${item.category.toLowerCase().replace(/ /g, '-')}/${item.slug}`}
                className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 hover:-translate-y-1 max-w-full sm:max-w-[90%]"
              >
                {/* Image */}
                <div className="sm:w-64 h-48 sm:h-auto flex-shrink-0 relative overflow-hidden pointer-events-none">
                  <img 
                    src={item.image_url} 
                    alt={item.title}
                    className="w-full h-full object-cover-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Featured Badge for first few items */}
                  {index < 3 && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 pointer-events-none">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <FaUser className="w-4 h-4" />
                        <span>{item.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCalendarAlt className="w-4 h-4" />
                        <span>{new Date(item.published_date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="flex items-center justify-between pointer-events-auto">
                    <span className="text-[#E63946] hover:text-[#D62828] flex items-center gap-2 transition-colors duration-300">
                      Read Article
                      <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                    
                    <div className="text-xs text-gray-400">
                      {Math.ceil(item.description.length / 200)} min read
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            {/* No Results */}
            {allItems.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <FaSearch className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                <p className="text-gray-500">Try adjusting your search terms or filters</p>
              </div>
            )}
          </div>

          {/* Ads Section */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Sponsored Ads</h3>
              <div className="space-y-4">
                {/* Example Ad 1 */}
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
                  <img 
                    src="https://via.placeholder.com/300x100?text=Ad+Banner+1" 
                    alt="Ad Banner 1"
                    className="w-full h-24 object-cover rounded-md mb-2"
                  />
                  <h4 className="text-base font-semibold text-gray-900">Exclusive Casino Offer</h4>
                  <p className="text-sm text-gray-600">Join now and get a 100% welcome bonus!</p>
                  <a 
                    href="#"
                    className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-2 mt-2"
                  >
                    Learn More <FaArrowRight className="w-4 h-4" />
                  </a>
                </div>
                {/* Example Ad 2 */}
                <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-300">
                  <img 
                    src="https://via.placeholder.com/300x100?text=Ad+Banner+2" 
                    alt="Ad Banner 2"
                    className="w-full h-24 object-cover rounded-md mb-2"
                  />
                  <h4 className="text-base font-semibold text-gray-900">Free Spins Available</h4>
                  <p className="text-sm text-gray-600">Sign up today for 50 free spins!</p>
                  <a 
                    href="#"
                    className="text-indigo-600 font-semibold hover:text-indigo-800 flex items-center gap-2 mt-2"
                  >
                    Learn More <FaArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllNewsStories;