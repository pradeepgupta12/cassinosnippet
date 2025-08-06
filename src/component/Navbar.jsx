


// import React, { useState } from "react";
// import { FaSearch, FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleSearch = () => setShowSearch(!showSearch);

//   const navItems = [
//     { label: "Home", href: "#", active: true },
//     { label: "Casino Reviews", href: "#" },
//     { label: "Guides", href: "#" },
//     { label: "Bonuses", href: "#" },
//     { label: "Games", href: "#" },
//     { label: "Blog", href: "#" },
//     { label: "News", href: "#" },
//     { label: "Contact Us", href: "#" },
//   ];

//   return (
//     <nav className="relative bg-gradient-to-r from-purple-900 via-fuchsia-800 to-pink-700 text-white px-4 py-3 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex items-center space-x-2 text-lime-400 font-bold text-xl">
//           <span className="text-2xl">©</span>
//           <span>CasinoSniper</span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden lg:flex items-center space-x-6">
//           {navItems.map((item) => (
//             <a
//               key={item.label}
//               href={item.href}
//               className={`relative hover:text-cyan-300 transition ${
//                 item.active ? "text-white" : "text-white"
//               }`}
//             >
//               {item.label}
//               {item.active && (
//                 <span className="absolute left-0 bottom-[-6px] w-full h-[2px] bg-lime-400"></span>
//               )}
//             </a>
//           ))}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search casinos, games..."
//               className="rounded-full pl-4 pr-10 py-1 text-sm text-white bg-pink-600 bg-opacity-20 border border-pink-300 focus:outline-none"
//             />
//             <FaSearch className="absolute right-3 top-2 text-cyan-300" />
//           </div>
//         </div>

//         {/* Mobile + Tablet Controls */}
//         <div className="lg:hidden flex items-center space-x-4">
//           <button onClick={toggleSearch}>
//             <FaSearch className="text-cyan-300" size={20} />
//           </button>
//           <button onClick={toggleMenu}>
//             {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile & Tablet Search Input */}
//       {showSearch && (
//         <div className="lg:hidden px-4 mt-3">
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search casinos, games..."
//               className="w-full rounded-full pl-4 pr-10 py-2 text-sm text-white bg-pink-600 bg-opacity-20 border border-pink-300 focus:outline-none"
//             />
//             <FaSearch className="absolute right-3 top-3 text-cyan-300" />
//           </div>
//         </div>
//       )}

//       {/* Mobile & Tablet Menu Overlay (White BG + Black Text) */}
//       {menuOpen && (
//         <div className="absolute left-0 w-full bg-white text-black z-50 shadow-md lg:hidden">
//           <div className="flex flex-col px-4 py-4 space-y-2">
//             {navItems.map((item) => (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className={`py-2 border-b border-gray-300 hover:text-fuchsia-700 ${
//                   item.active ? "text-fuchsia-700 font-semibold" : ""
//                 }`}
//               >
//                 {item.label}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ React Router Link

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
    <nav className="relative bg-gradient-to-r from-purple-900 via-fuchsia-800 to-pink-700 text-white px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* ✅ Logo with Home Link */}
        <Link
          to="/"
          className="flex items-center space-x-2 text-lime-400 font-bold text-xl"
        >
          <span className="text-2xl">©</span>
          <span>CasinoSniper</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) =>
            item.href.startsWith("/") ? (
              <Link
                key={item.label}
                to={item.href}
                className="relative hover:text-cyan-300 transition text-white"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="relative hover:text-cyan-300 transition text-white"
              >
                {item.label}
              </a>
            )
          )}

          <div className="relative">
            <input
              type="text"
              placeholder="Search casinos, games..."
              className="rounded-full pl-4 pr-10 py-1 text-sm text-white bg-pink-600 bg-opacity-20 border border-pink-300 focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2 text-cyan-300" />
          </div>
        </div>

        {/* Mobile Buttons */}
        <div className="lg:hidden flex items-center space-x-4">
          <button onClick={toggleSearch}>
            <FaSearch className="text-cyan-300" size={20} />
          </button>
          <button onClick={toggleMenu}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      {showSearch && (
        <div className="lg:hidden px-4 mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search casinos, games..."
              className="w-full rounded-full pl-4 pr-10 py-2 text-sm text-white bg-pink-600 bg-opacity-20 border border-pink-300 focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-3 text-cyan-300" />
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 w-full bg-white text-black z-50 shadow-md lg:hidden">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navItems.map((item) =>
              item.href.startsWith("/") ? (
                <Link
                  key={item.label}
                  to={item.href}
                  className="py-2 border-b border-gray-300 hover:text-fuchsia-700"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className="py-2 border-b border-gray-300 hover:text-fuchsia-700"
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
