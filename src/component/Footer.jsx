import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0C1122] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-yellow-400 text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">🎯</span> CasinoSniper
          </h2>
          <p className="mt-4 text-gray-300 text-sm">
            CasinoSniper is the trusted source for casino reviews, bonuses,
            and online gambling tips. Our experts ensure that you find the
            safest and most rewarding casinos.
          </p>
          <div className="flex items-center gap-4 mt-4 text-yellow-400 text-lg">
            <FaFacebookF className="hover:text-yellow-500 cursor-pointer" />
            <FaTwitter className="hover:text-yellow-500 cursor-pointer" />
            <FaInstagram className="hover:text-yellow-500 cursor-pointer" />
            <FaYoutube className="hover:text-yellow-500 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-yellow-500 cursor-pointer">Home</li>
            <li className="hover:text-yellow-500 cursor-pointer">Casino Reviews</li>
            <li className="hover:text-yellow-500 cursor-pointer">Best Bonuses</li>
            <li className="hover:text-yellow-500 cursor-pointer">Game Guides</li>
            <li className="hover:text-yellow-500 cursor-pointer">News</li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-3">
            Information
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-yellow-500 cursor-pointer">About Us</li>
            <li className="hover:text-yellow-500 cursor-pointer">Privacy Policy</li>
            <li className="hover:text-yellow-500 cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-yellow-500 cursor-pointer">Sitemap</li>
            <li className="hover:text-yellow-500 cursor-pointer">Contact Us</li>
          </ul>
        </div>

        {/* Responsible Gaming */}
        <div>
          <h3 className="text-yellow-400 text-lg font-semibold mb-3">
            Responsible Gaming
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-yellow-500 cursor-pointer">Play Responsibly</li>
            <li className="hover:text-yellow-500 cursor-pointer">Self-Exclusion</li>
            <li className="hover:text-yellow-500 cursor-pointer">Gambling Addiction</li>
            <li className="hover:text-yellow-500 cursor-pointer">Underage Policy</li>
            <li className="hover:text-yellow-500 cursor-pointer">Help & Support</li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400 px-4 max-w-7xl mx-auto">
        <p>© 2023 CasinoSniper. All rights reserved. Gambling may be addictive. Please play responsibly.</p>
        <p className="mt-1">This site is for informational purposes only and does not offer real money gambling.</p>
      </div>
    </footer>
  );
}
