

import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => setShowSearch(!showSearch);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Casino Reviews", href: "#" },
    { label: "Guides", href: "#" },
  { label: "Bonuses", href: "#" },
    { label: "Games", href: "#" },
    { label: "Blog", href: "#" },
    { label: "News", href: "#" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="relative bg-[#1A1A3D] text-[#D3D3D3] px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center space-x-2 text-[#FFD700] font-bold text-xl"
        >
          <span className="text-2xl">©</span>
          <span>CasinoSniper</span>
        </Link>
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className="relative hover:text-[#FFD700] transition text-[#D3D3D3]"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="relative hover:text-[#FFD700] transition text-[#D3D3D3]"
              >
                {item.label}
              </a>
            )
          )}
          <div className="relative">
            <input
              type="text"
              placeholder="Search casinos, games..."
              className="rounded-full pl-4 pr-10 py-1 text-sm text-[#D3D3D3] bg-[#2E2E5A] bg-opacity-20 border border-[#FFD700] focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2 text-[#FFD700]" />
          </div>
        </div>
        <div className="lg:hidden flex items-center space-x-4">
          <button onClick={toggleSearch}>
            <FaSearch className="text-[#FFD700]" size={20} />
          </button>
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>
      {showSearch && (
        <div className="lg:hidden px-4 mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search casinos, games..."
              className="w-full rounded-full pl-4 pr-10 py-2 text-sm text-[#D3D3D3] bg-[#2E2E5A] bg-opacity-20 border border-[#FFD700] focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-3 text-[#FFD700]" />
          </div>
        </div>
      )}
      {menuOpen && (
        <div className="absolute left-0 w-full bg-[#F5F5F5] text-[#333333] z-50 shadow-md lg:hidden">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="py-2 border-b border-[#1A1A3D] hover:text-[#E63946]"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 border-b border-[#1A1A3D] hover:text-[#E63946]"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;