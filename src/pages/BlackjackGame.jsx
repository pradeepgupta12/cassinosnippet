import React, { useState } from 'react';
import { Star, Shield, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { blackjackCasinos } from '../Data/blackjackCasinos';

// Main component defined first
const BlackjackGame = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section (updated for Blackjack) */}
      <div className="bg-gradient-to-r from-[#1A1A3D] to-[#2E2E5A] py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFD700] mb-4">
            Blackjack Game
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Discover the best online casinos for Blackjack in India. Play with trusted operators and enjoy exclusive bonuses.
          </p>
          <div className="flex items-center justify-center gap-4 text-white/80">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span className="text-sm sm:text-base">Licensed & Secure</span>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm sm:text-base">High Win Rates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Casino Cards Section */}
      <div className="py-6 sm:py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {blackjackCasinos.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">No Casinos Found</h3>
              <p className="text-gray-500">Check back later for more Blackjack casinos!</p>
            </div>
          ) : (
            <div className="space-y-4 sm:space-y-6">
              {blackjackCasinos.map((casino) => (
                <CasinoCard key={casino.id} casino={casino} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Child component defined after main component
const CasinoCard = ({ casino }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Left Section - Casino Info */}
          <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
            {/* Casino Logo/Image */}
            <div className="flex-shrink-0">
              <img
                src={imageError ? '' : casino.logo}
                alt={`${casino.name} logo`}
                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover shadow-lg ${imageError ? 'hidden' : ''}`}
                onError={() => setImageError(true)}
              />
              <div
                className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg ${imageError ? 'flex' : 'hidden'}`}
              >
                {casino.name.slice(0, 2).toUpperCase()}
              </div>
            </div>

            {/* Casino Details */}
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-bold text-lg sm:text-xl text-gray-900 truncate">{casino.name}</h3>
                {casino.country && (
                  <span className="text-xl" aria-label={`Region: ${casino.country}`}>
                    {casino.country === 'IN' ? '🇮🇳' : casino.country}
                  </span>
                )}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(casino.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                  />
                ))}
                <span className="text-sm font-medium text-gray-600 ml-1">{casino.rating}/5</span>
              </div>
            </div>
          </div>

          {/* Middle Section - Bonus Info */}
          <div className="flex-1 min-w-0">
            <div className="text-center sm:text-left">
              <h4 className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                {casino.bonus}
              </h4>
              <p className="text-sm text-gray-600 mb-3">{casino.package}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 sm:gap-4 justify-center sm:justify-start">
                <div className="flex items-center gap-1 text-xs sm:text-sm text-green-600">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Payout: {casino.payout}</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-blue-600">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Win Rate: {casino.winRate}</span>
                </div>
                <div className="flex items-center gap-1 text-xs sm:text-sm text-purple-600">
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span>Licensed & Secure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - CTA Button */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <a
              href={casino.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-bold py-3 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              aria-label={`Visit ${casino.name} website`}
            >
              <span>Play</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Security Badges moved under Visit Site button */}
            <div className="flex items-center justify-center gap-2">
              <span className="text-xs text-gray-500 flex items-center gap-1">
                <Shield className="w-3 h-3 text-green-500" />
                SSL Secured
              </span>
              <span className="text-xs text-gray-500">18+ Only</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackjackGame;