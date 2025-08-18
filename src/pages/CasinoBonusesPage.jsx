


import React from "react";
import { casinoBonusesData } from "../Data/casinoBonusesData";
import { FaStar, FaCrown, FaCheck, FaArrowRight, FaClock, FaBolt } from "react-icons/fa";

export default function CasinoBonusesPage() {
  const topThree = casinoBonusesData.slice(0, 3);
  const rest = casinoBonusesData.slice(3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-white text-gray-900">
        <div className="relative max-w-7xl mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Casino Bonuses
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Top 3 Casinos - Premium Cards */}
        <div className="mb-18">
          
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {topThree.map((item, index) => (
              <div
                key={item.rank}
                className={`relative group ${
                  index === 1 
                    ? "md:-mt-4 md:mb-4 transform md:scale-110" 
                    : "md:mt-4"
                }`}
              >
                {/* Winner Crown for #1 */}
                {index === 1 && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-4 py-2 rounded-full font-bold shadow-lg flex items-center gap-2">
                      <FaCrown className="text-sm" />
                      #1 BEST CHOICE
                    </div>
                  </div>
                )}

                <div className={`relative bg-white rounded-3xl shadow-2xl border-2 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:-translate-y-2 min-h-[500px] ${
                  index === 1 
                    ? "border-gradient-to-r from-yellow-400 to-orange-500 bg-gradient-to-br from-yellow-50 to-orange-50" 
                    : "border-purple-200 hover:border-purple-400"
                }`}>
                  
                  {/* Rank Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg ${
                      index === 0 ? "bg-gradient-to-r from-yellow-500 to-yellow-600" :
                      index === 1 ? "bg-gradient-to-r from-orange-500 to-red-500" :
                      "bg-gradient-to-r from-purple-500 to-purple-600"
                    }`}>
                      {item.rank}
                    </div>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500 rounded-full translate-y-12 -translate-x-12"></div>
                  </div>

                  <div className="relative p-8 h-full flex flex-col">
                    {/* Logo Section */}
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <img src={item.logo} alt={item.name} className="h-12 max-w-full object-contain" />
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <img src={item.flag} alt="Flag" className="h-5 w-8 rounded shadow" />
                        <span className="text-sm text-gray-600 font-medium">{item.name}</span>
                      </div>
                    </div>

                    {/* Bonus Information */}
                    <div className="text-center mb-8 flex-grow">
                      <div className="text-3xl font-black text-gray-800 mb-2 leading-tight">
                        {item.bonusText}
                      </div>
                      <div className="text-lg font-bold text-purple-600 mb-4">
                        {item.bonusLabel}
                      </div>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                          <div className="flex items-center justify-center gap-2 text-green-700 mb-2">
                            <FaClock className="text-sm" />
                            <span className="text-xs font-semibold">PAYOUT</span>
                          </div>
                          <div className="font-bold text-lg text-green-800">{item.payout}</div>
                        </div>
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200">
                          <div className="flex items-center justify-center gap-2 text-blue-700 mb-2">
                            <FaBolt className="text-sm" />
                            <span className="text-xs font-semibold">WIN RATE</span>
                          </div>
                          <div className="font-bold text-lg text-blue-800">{item.winRate}</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-auto">
                      <a
                        href={item.ctaUrl}
                        className="block w-full text-center py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl bg-gradient-to-r from-yellow-500 to-orange-500 text-white hover:from-yellow-600 hover:to-orange-600"
                      >
                        <span className="flex items-center justify-center gap-2">
                          {item.ctaText}
                          <FaArrowRight className="text-sm" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Remaining Casinos - Horizontal Cards */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            More Great Casino Bonuses
          </h2>
          
          <div className="space-y-6">
            {rest.map((item, index) => (
              <div
                key={item.rank}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-purple-200 overflow-hidden transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative p-6">
                  {/* Rank Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                      {item.rank}
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ml-16 lg:ml-0">
                    {/* Left Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 flex-1">
                      {/* Logo & Basic Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center border border-gray-100">
                          <img src={item.logo} alt={item.name} className="h-10 max-w-full object-contain" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                            <img src={item.flag} alt="flag" className="h-4 w-6 rounded shadow" />
                          </div>
                          <div className="flex items-center gap-1 mb-2">
                            {[...Array(5)].map((_, i) => (
                              <FaStar key={i} className="text-yellow-400 text-sm" />
                            ))}
                            <span className="text-sm text-gray-600 ml-2">4.8/5</span>
                          </div>
                        </div>
                      </div>

                      {/* Bonus Info */}
                      <div className="flex-1">
                        <div className="text-2xl font-black text-purple-600 mb-1">
                          {item.bonusText}
                        </div>
                        <div className="text-sm font-bold text-gray-700 mb-3">
                          Welcome Bonus Package
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <FaClock className="text-green-500" />
                            <span>Payout: <strong>{item.payout}</strong></span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaBolt className="text-blue-500" />
                            <span>Win Rate: <strong>{item.winRate}</strong></span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaCheck className="text-purple-500" />
                            <span>Licensed & Secure</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right CTA Section */}
                    <div className="flex flex-col items-center lg:items-end gap-3">
                      <a
                        href={item.ctaUrl}
                        className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                      >
                        <span className="flex items-center gap-2">
                          {item.ctaText}
                          <FaArrowRight className="text-sm" />
                        </span>
                      </a>
                      <div className="text-xs text-gray-500 text-center">
                        🔒 SSL Secured • 18+ Only
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}