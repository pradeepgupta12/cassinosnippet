

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A3D] text-[#D3D3D3] py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1 md:pr-4">
          <h2 className="text-[#FFD700] text-2xl font-bold flex items-center gap-1">
            <span className="text-2xl">🎯</span> CasinoSniper
          </h2>
          <p className="mt-4 text-[#D3D3D3] text-sm">
            CasinoSniper is the trusted source for casino reviews, bonuses,
            and online gambling tips. Our experts ensure that you find the
            safest and most rewarding casinos.
          </p>
          <div className="flex items-center gap-4 mt-4 text-[#FFD700] text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="hover:text-[#FFC107] cursor-pointer" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="hover:text-[#FFC107] cursor-pointer" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-[#FFC107] cursor-pointer" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="hover:text-[#FFC107] cursor-pointer" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-[#FFD700] text-lg font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-[#D3D3D3]">
            <li>
              <Link to="/" className="hover:text-[#FFD700] cursor-pointer">Home</Link>
            </li>
            <li>
              <Link to="/all-casino-reviews" className="hover:text-[#FFD700] cursor-pointer">Casino Reviews</Link>
            </li>
            <li>
              <Link to="/casino-bonuses" className="hover:text-[#FFD700] cursor-pointer">Best Bonuses</Link>
            </li>
            <li>
              <Link to="/all-guides" className="hover:text-[#FFD700] cursor-pointer">Game Guides</Link>
            </li>
            <li>
              <Link to="/all-news-stories" className="hover:text-[#FFD700] cursor-pointer">News</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#FFD700] text-lg font-semibold mb-3">
            Information
          </h3>
          <ul className="space-y-2 text-sm text-[#D3D3D3]">
            <li>
              <Link to="/about-us" className="hover:text-[#FFD700] cursor-pointer">About Us</Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-[#FFD700] cursor-pointer">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms-conditions" className="hover:text-[#FFD700] cursor-pointer">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#FFD700] cursor-pointer">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-[#FFD700] text-lg font-semibold mb-3">
            Responsible Gaming
          </h3>
          <ul className="space-y-2 text-sm text-[#D3D3D3]">
            <li>
              <Link to="/" className="hover:text-[#FFD700] cursor-pointer">Top Rated Casino</Link>
            </li>
            <li>
              <Link to="/all-games" className="hover:text-[#FFD700] cursor-pointer">Casino Games</Link>
            </li>
            <li>
              <Link to="/all-blogs" className="hover:text-[#FFD700] cursor-pointer">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-[#2E2E5A] pt-4 text-center text-xs text-[#D3D3D3]">
        <p>© 2023 CasinoSniper. All rights reserved. Gambling may be addictive. Please play responsibly.</p>
        <p className="mt-1">This site is for informational purposes only and does not offer real money gambling.</p>
      </div>
    </footer>
  );
}