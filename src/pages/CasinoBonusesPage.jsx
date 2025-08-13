


import React from "react";
import { casinoBonusesData } from "../Data/casinoBonusesData";

export default function CasinoBonusesPage() {
  const topThree = casinoBonusesData.slice(0, 3);
  const rest = casinoBonusesData.slice(3);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white text-black">
      {/* Top 3 Casinos */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
        {topThree.map((item, index) => (
          <div
            key={item.rank}
            className={`relative border border-gray-200 rounded-lg shadow p-6 flex flex-col items-center text-center min-h-[440px] w-full md:w-64 ${
              index === 1 ? "border-2 border-purple-500" : ""
            }`}
          >
            {/* Rank Badge */}
            <div className="absolute top-0 left-0 bg-purple-100 text-purple-700 text-sm font-semibold px-2 py-1 rounded-br-md">
              {item.rank}
            </div>

            {/* Top Rated Tag for #1 */}
            {index === 1 && (
              <div className="absolute -top-5 bg-purple-200 text-purple-800 text-xs px-4 py-1 font-bold rounded-full shadow">
                #1 TOP RATED CASINO
              </div>
            )}

            {/* Logo and Flag (stay at top) */}
            <div className="mt-8 mb-3 flex flex-col items-center">
              <img src={item.logo} alt={item.name} className="h-10 mb-2" />
              <img src={item.flag} alt="Flag" className="h-4 w-6" />
            </div>

            {/* TEXT CONTENT moved lower */}
            <div className="mt-6 mb-4 flex flex-col items-center flex-grow">
              <div className="text-lg font-bold mb-1">{item.bonusText}</div>
              <div className="text-sm font-semibold text-black mb-2">
                {item.bonusLabel}
              </div>
              <div className="text-sm mb-1">Payout: {item.payout}</div>
              <div className="text-sm mb-2">Win Rate: {item.winRate}</div>
            </div>

            {/* CTA Button */}
            <div className="mt-auto flex flex-col items-center">
              <a
                href={item.ctaUrl}
                className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
              >
                {item.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Remaining Casinos */}
      <div className="space-y-6">
        {rest.map((item) => (
          <div
            key={item.rank}
            className="relative border border-gray-200 rounded-lg shadow p-6 flex flex-col sm:flex-row sm:items-center justify-between"
          >
            {/* Rank Badge */}
            <div className="absolute top-0 left-0 bg-purple-100 text-purple-700 text-sm font-semibold px-2 py-1 rounded-br-md">
              {item.rank}
            </div>

            {/* Left Section */}
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <img src={item.logo} alt={item.name} className="h-10 w-18" />
              <div>
                <div className="text-xl font-semibold">{item.name}</div>
                <div className="text-sm text-indigo-800 font-bold">
                  {item.bonusText}
                </div>
                <div className="text-sm text-black font-semibold mt-1">
                  Bonus
                </div>
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <img src={item.flag} alt="flag" className="h-4 w-6" />
                  <span>⏱ Payout: {item.payout}</span>
                  <span>⚡ Win Rate: {item.winRate}</span>
                </div>
              </div>
            </div>

            {/* Right CTA Section */}
            <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
              <a
                href={item.ctaUrl}
                className="bg-yellow-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-yellow-600 transition"
              >
                {item.ctaText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}