


import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A3D] text-[#D3D3D3] py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-[#FFD700] text-2xl font-bold flex items-center gap-2">
            <span className="text-3xl">🎯</span> CasinoSniper
          </h2>
          <p className="mt-4 text-[#D3D3D3] text-sm">
            CasinoSniper is the trusted source for casino reviews, bonuses,
            and online gambling tips. Our experts ensure that you find the
            safest and most rewarding casinos.
          </p>
          <div className="flex items-center gap-4 mt-4 text-[#FFD700] text-lg">
            <FaFacebookF className="hover:text-[#FFC107] cursor-pointer" />
            <FaTwitter className="hover:text-[#FFC107] cursor-pointer" />
            <FaInstagram className="hover:text-[#FFC107] cursor-pointer" />
            <FaYoutube className="hover:text-[#FFC107] cursor-pointer" />
          </div>
        </div>
        <div>
          <h3 className="text-[#FFD700] text-lg font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-[#D3D3D3]">
            <li className="hover:text-[#FFD700] cursor-pointer">Home</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Casino Reviews</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Best Bonuses</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Game Guides</li>
            <li className="hover:text-[#FFD700] cursor-pointer">News</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#FFD700] text-lg font-semibold mb-3">
            Information
          </h3>
          <ul className="space-y-2 text-sm text-[#D3D3D3]">
            <li className="hover:text-[#FFD700] cursor-pointer">About Us</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Privacy Policy</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Sitemap</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Contact Us</li>
          </ul>
        </div>
        <div>
          <h3 className="text-[#FFD700] text-lg font-semibold mb-3">
            Responsible Gaming
          </h3>
          <ul className="space-y-2 text-sm text-[#D3D3D3]">
            <li className="hover:text-[#FFD700] cursor-pointer">Play Responsibly</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Self-Exclusion</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Gambling Addiction</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Underage Policy</li>
            <li className="hover:text-[#FFD700] cursor-pointer">Help & Support</li>
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