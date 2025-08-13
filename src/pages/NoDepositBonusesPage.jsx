

import React from "react";
import { noDepositBonuses } from "../Data/noDepositBonuses";

const NoDepositBonusesPage = () => {
  return (
    <div className="bg-gray-50 text-black py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Page Heading */}
        <h1 className="text-2xl font-bold mb-8 text-center text-gray-800">
          Latest No Deposit Bonuses
        </h1>

        {/* Bonuses Grid */}
        <div className="grid gap-6 sm:grid-cols-1 sm:mx-auto lg:grid-cols-2 ">
          {noDepositBonuses.map((bonus) => (
            <div
              key={bonus.id}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm sm:w-full sm:max-w-[340px] md:max-w-full lg:max-w-full xl:max-w-full max-w-full"
            >
              {/* Tag */}
              <div className="bg-purple-100 text-purple-700 text-sm font-semibold px-3 py-1">
                #{bonus.rank} {bonus.tag}
              </div>

              {/* Top Section */}
              <div className="flex flex-col sm:flex-row p-4 gap-4 ">
                {/* Casino Info */}
                <div className="flex flex-col items-center sm:w-1/3">
                  {/* Moving casino logo up */}
                  <img
                    src={bonus.casinoLogo}
                    alt={bonus.casinoName}
                    className="w-36 h-36 object-contain mb-2 sm:w-30 sm:h-30"
                  />
                  {/* Moving flag logo up */}
                  <img
                    src={bonus.flagLogo}
                    alt={bonus.country}
                    className="w-12 h-12 mt-0 sm:w-10 sm:h-10"
                  />
                  {/* Moving expert rating up */}
                  <div className="mt-0 text-base sm:text-sm">
                    <span className="font-semibold">Expert Rating:</span>
                    <div className="flex items-center gap-1">
                      <span className="text-yellow-500 text-lg">★</span>
                      <span className="text-yellow-500 text-lg">★</span>
                      <span className="text-yellow-500 text-lg">★</span>
                      <span className="text-yellow-500 text-lg">★</span>
                      <span className="text-gray-300 text-lg">★</span>
                      <span className="ml-1">{bonus.expertRating}</span>
                    </div>
                  </div>
                </div>

                {/* Bonus Details */}
                <div className="sm:w-2/3 grid grid-cols-2 gap-2 text-base sm:text-sm">
                  <div>
                    <p className="text-gray-500">Valid for</p>
                    <p className="font-semibold">{bonus.validFor}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Wagering</p>
                    <p className="font-semibold">{bonus.wagering}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Bonus code</p>
                    <p className="font-semibold">{bonus.bonusCode}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Expires</p>
                    <p className="font-semibold">{bonus.expires}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Max Cashout</p>
                    <p className="font-semibold">{bonus.maxCashout}</p>
                  </div>
                  <div>
                    <p className="text-gray-500">Valid games</p>
                    <p className="font-semibold">{bonus.validGames}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NoDepositBonusesPage;