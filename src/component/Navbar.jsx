

// import React, { useState } from "react";
// import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [showSearch, setShowSearch] = useState(false);
//   const [bonusesOpen, setBonusesOpen] = useState(false);
//   const [casinoReviewsOpen, setCasinoReviewsOpen] = useState(false);
//   const [hoverTimeout, setHoverTimeout] = useState(null);
//   const [casinoHoverTimeout, setCasinoHoverTimeout] = useState(null);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleSearch = () => {
//     setShowSearch(!showSearch);
//     setMenuOpen(!showSearch); // Open menu when search is activated, close when deactivated
//   };
//   const toggleBonuses = () => setBonusesOpen((prev) => !prev);
//   const toggleCasinoReviews = () => setCasinoReviewsOpen((prev) => !prev);

//   const navItems = [
//     { label: "Home", href: "/" },
//     { label: "Casino Reviews", href: "#" },
//     { label: "Guides", href: "/all-guides" },
//     { label: "Bonuses", href: "#" },
//     { label: "Games", href: "#" },
//     { label: "Blog", href: "/all-blogs" },
//     { label: "News", href: "/all-news-stories" },
//     { label: "Contact Us", href: "/contact" },
//   ];

//   return (
//     <nav className="relative bg-[#1A1A3D] text-[#D3D3D3] px-4 py-4 shadow-md">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         {/* Mobile Hamburger & Logo */}
//         <div className="flex items-center space-x-4">
//           <div className="lg:hidden">
//             <button onClick={toggleMenu}>
//               {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
//             </button>
//           </div>
//           <Link to="/" className="flex items-center space-x-2 text-[#FFD700] font-bold text-xl">
//             <span className="text-2xl">©</span>
//             <span>CasinoSniper</span>
//           </Link>
//         </div>

//         {/* Mobile Search Icon */}
//         <div className="lg:hidden">
//           {!showSearch && (
//             <button onClick={toggleSearch} className="transition-all duration-300 ease-in-out">
//               <FaSearch className="text-[#FFD700]" size={20} />
//             </button>
//           )}
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-6">
//           {navItems.map((item) => {
//             if (item.label === "Casino Reviews") {
//               return (
//                 <div
//                   key="Casino Reviews"
//                   className="relative"
//                   onMouseEnter={() => {
//                     clearTimeout(casinoHoverTimeout);
//                     setCasinoReviewsOpen(true);
//                   }}
//                   onMouseLeave={() => {
//                     const timeout = setTimeout(() => setCasinoReviewsOpen(false), 200);
//                     setCasinoHoverTimeout(timeout);
//                   }}
//                 >
//                   <Link
//                     className="cursor-pointer hover:text-[#FFD700] transition text-[#D3D3D3]"
//                     onClick={toggleCasinoReviews}
//                     to="/all-casino-reviews"
//                   >
//                     Casino Reviews
//                   </Link>

//                   {casinoReviewsOpen && (
//                     <div
//                       className="absolute top-full mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50"
//                       onMouseEnter={() => {
//                         clearTimeout(casinoHoverTimeout);
//                         setCasinoReviewsOpen(true);
//                       }}
//                       onMouseLeave={() => {
//                         const timeout = setTimeout(() => setCasinoReviewsOpen(false), 200);
//                         setCasinoHoverTimeout(timeout);
//                       }}
//                     >
//                       <ul className="py-2 px-4 space-y-2">
//                         <li><Link to="/all-casino-reviews" className="hover:underline">All casino reviews</Link></li>
//                         <li><Link to="/1xBET" className="hover:underline">1xBET</Link></li>
//                         <li><Link to="/casino-days" className="hover:underline">Casino Days</Link></li>
//                         <li><Link to="/22bet" className="hover:underline">22Bet</Link></li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               );
//             }

//             if (item.label === "Bonuses") {
//               return (
//                 <div
//                   key="Bonuses"
//                   className="relative"
//                   onMouseEnter={() => {
//                     clearTimeout(hoverTimeout);
//                     setBonusesOpen(true);
//                   }}
//                   onMouseLeave={() => {
//                     const timeout = setTimeout(() => setBonusesOpen(false), 200);
//                     setHoverTimeout(timeout);
//                   }}
//                 >
//                   <Link
//                     className="cursor-pointer hover:text-[#FFD700] transition text-[#D3D3D3]"
//                     onClick={toggleBonuses}
//                     to="/casino-bonuses"
//                   >
//                     Bonuses
//                   </Link>

//                   {bonusesOpen && (
//                     <div
//                       className="absolute top-full mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50"
//                       onMouseEnter={() => {
//                         clearTimeout(hoverTimeout);
//                         setBonusesOpen(true);
//                       }}
//                       onMouseLeave={() => {
//                         const timeout = setTimeout(() => setBonusesOpen(false), 200);
//                         setHoverTimeout(timeout);
//                       }}
//                     >
//                       <ul className="py-2 px-4 space-y-2">
//                         <li><Link to="/casino-bonuses" className="hover:underline">Casino bonuses</Link></li>
//                         <li><Link to="/no-deposit-bonuses" className="hover:underline">No deposit bonuses</Link></li>
//                         <li><Link to="/free-spins" className="hover:underline">Free spins</Link></li>
//                         <li><Link to="/free-bets" className="hover:underline">Free bets</Link></li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>
//               );
//             }

//             return item.href.startsWith("/") ? (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 className="relative hover:text-[#FFD700] transition text-[#D3D3D3]"
//               >
//                 {item.label}
//               </Link>
//             ) : (
//               <a
//                 key={item.label}
//                 href={item.href}
//                 className="relative hover:text-[#FFD700] transition text-[#D3D3D3]"
//               >
//                 {item.label}
//               </a>
//             );
//           })}

//           {/* Desktop Search */}
//           <div className="relative">
//             <input
//               type="text"
//               placeholder="Search casinos, games..."
//               className="rounded-full pl-4 pr-10 py-1 text-sm text-[#D3D3D3] bg-[#2E2E5A] bg-opacity-20 border border-[#FFD700] focus:outline-none"
//             />
//             <FaSearch className="absolute right-3 top-2 text-[#FFD700]" />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {menuOpen && (
//         <div className="absolute left-0 w-full bg-white text-[#333333] z-50 shadow-md lg:hidden">
//           <div className="flex flex-col px-4 py-4 space-y-2">
//             {showSearch && (
//               <div className="relative mb-2">
//                 <input
//                   type="text"
//                   placeholder="Search casinos, games..."
//                   className="w-full rounded-full pl-4 pr-10 py-2 text-sm text-[#333333] bg-[#F5F5F5] border border-[#FFD700] focus:outline-none"
//                 />
//                 <FaTimes
//                   className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FFD700] cursor-pointer"
//                   size={20}
//                   onClick={toggleSearch}
//                 />
//               </div>
//             )}
//             {navItems.map((item) => {
//               if (item.label === "Casino Reviews") {
//                 return (
//                   <div key="Casino Reviews" className="relative">
//                     <span
//                       className="py-2 border-b border-[#1A1A3D] hover:text-[#E63946] block cursor-pointer"
//                       onClick={toggleCasinoReviews}
//                     >
//                       {item.label}
//                     </span>
//                     {casinoReviewsOpen && (
//                       <div className="pl-4 py-2 bg-white rounded-lg">
//                         <ul className="space-y-2">
//                           <li>
//                             <Link
//                               to="/all-casino-reviews"
//                               className="hover:text-[#E63946]"
//                               onClick={() => setMenuOpen(false)}
//                             >
//                               All casino reviews
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/1xBET"
//                               className="hover:text-[#E63946]"
//                               onClick={() => setMenuOpen(false)}
//                             >
//                               1xBET
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/casino-days"
//                               className="hover:text-[#E63946]"
//                               onClick={() => setMenuOpen(false)}
//                             >
//                               Casino Days
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/22bet"
//                               className="hover:text-[#E63946]"
//                               onClick={() => setMenuOpen(false)}
//                             >
//                               22Bet
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 );
//               }

//               if (item.label === "Bonuses") {
//                 return (
//                   <div key="Bonuses" className="relative">
//                     <span
//                       className="py-2 border-b border-[#1A1A3D] hover:text-[#E63946] block cursor-pointer"
//                       onClick={toggleBonuses}
//                     >
//                       {item.label}
//                     </span>
//                     {bonusesOpen && (
//                       <div className="pl-4 py-2 bg-white rounded-lg">
//                         <ul className="space-y-2">
//                           <li>
//                             <Link
//                               to="/casino-bonuses"
//                               className="hover:text-[#E63946]"
//                               onClick={() => setMenuOpen(false)}
//                             >
//                               Casino bonuses
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/no-deposit-bonuses"
//                               className="hover:text-[#E63946]"
//                               onClick={() => setMenuOpen(false)}
//                             >
//                               No deposit bonuses
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/free-spins"
//                               className="hover:text-[#E63946]"
//                               onClick={() => setMenuOpen(false)}
//                             >
//                               Free spins
//                             </Link>
//                           </li>
//                           <li>
//                             <Link
//                               to="/free-bets"
//                               className="hover:text-[#E63946]"
//                               onClick={() => setMenuOpen(false)}
//                             >
//                               Free bets
//                             </Link>
//                           </li>
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 );
//               }
//               return item.href.startsWith("/") ? (
//                 <Link
//                   key={item.label}
//                   to={item.href}
//                   className="py-2 border-b border-[#1A1A3D] hover:text-[#E63946]"
//                   onClick={() => setMenuOpen(false)}
//                 >
//                   {item.label}
//                 </Link>
//               ) : (
//                 <a
//                   key={item.label}
//                   href={item.href}
//                   className="py-2 border-b border-[#1A1A3D] hover:text-[#E63946]"
//                 >
//                   {item.label}
//                 </a>
//               );
//             })}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [bonusesOpen, setBonusesOpen] = useState(false);
  const [casinoReviewsOpen, setCasinoReviewsOpen] = useState(false);
  const [gamesOpen, setGamesOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [casinoHoverTimeout, setCasinoHoverTimeout] = useState(null);
  const [gamesHoverTimeout, setGamesHoverTimeout] = useState(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
    setMenuOpen(!showSearch); // Open menu when search is activated, close when deactivated
  };
  const toggleBonuses = () => setBonusesOpen((prev) => !prev);
  const toggleCasinoReviews = () => setCasinoReviewsOpen((prev) => !prev);
  const toggleGames = () => setGamesOpen((prev) => !prev);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Casino Reviews", href: "#" },
    { label: "Guides", href: "/all-guides" },
    { label: "Bonuses", href: "#" },
    { label: "Games", href: "#" },
    { label: "Blog", href: "/all-blogs" },
    { label: "News", href: "/all-news-stories" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="relative bg-[#1A1A3D] text-[#D3D3D3] px-4 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Hamburger & Logo */}
        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
          <Link to="/" className="flex items-center space-x-2 text-[#FFD700] font-bold text-xl">
            <span className="text-2xl">©</span>
            <span>CasinoSniper</span>
          </Link>
        </div>

        {/* Mobile Search Icon */}
        <div className="lg:hidden">
          {!showSearch && (
            <button onClick={toggleSearch} className="transition-all duration-300 ease-in-out">
              <FaSearch className="text-[#FFD700]" size={20} />
            </button>
          )}
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => {
            if (item.label === "Casino Reviews") {
              return (
                <div
                  key="Casino Reviews"
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(casinoHoverTimeout);
                    setCasinoReviewsOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setCasinoReviewsOpen(false), 200);
                    setCasinoHoverTimeout(timeout);
                  }}
                >
                  <Link
                    className="cursor-pointer hover:text-[#FFD700] transition text-[#D3D3D3]"
                    onClick={toggleCasinoReviews}
                    to="/all-casino-reviews"
                  >
                    Casino Reviews
                  </Link>

                  {casinoReviewsOpen && (
                    <div
                      className="absolute top-full mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50"
                      onMouseEnter={() => {
                        clearTimeout(casinoHoverTimeout);
                        setCasinoReviewsOpen(true);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setCasinoReviewsOpen(false), 200);
                        setCasinoHoverTimeout(timeout);
                      }}
                    >
                      <ul className="py-2 px-4 space-y-2">
                        <li><Link to="/all-casino-reviews" className="hover:underline">All casino reviews</Link></li>
                        <li><Link to="/1xBET" className="hover:underline">1xBET</Link></li>
                        <li><Link to="/casino-days" className="hover:underline">Casino Days</Link></li>
                        <li><Link to="/22bet" className="hover:underline">22Bet</Link></li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            }

            if (item.label === "Bonuses") {
              return (
                <div
                  key="Bonuses"
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(hoverTimeout);
                    setBonusesOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setBonusesOpen(false), 200);
                    setHoverTimeout(timeout);
                  }}
                >
                  <Link
                    className="cursor-pointer hover:text-[#FFD700] transition text-[#D3D3D3]"
                    onClick={toggleBonuses}
                    to="/casino-bonuses"
                  >
                    Bonuses
                  </Link>

                  {bonusesOpen && (
                    <div
                      className="absolute top-full mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50"
                      onMouseEnter={() => {
                        clearTimeout(hoverTimeout);
                        setBonusesOpen(true);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setBonusesOpen(false), 200);
                        setHoverTimeout(timeout);
                      }}
                    >
                      <ul className="py-2 px-4 space-y-2">
                        <li><Link to="/casino-bonuses" className="hover:underline">Casino bonuses</Link></li>
                        <li><Link to="/no-deposit-bonuses" className="hover:underline">No deposit bonuses</Link></li>
                        <li><Link to="/free-spins" className="hover:underline">Free spins</Link></li>
                        <li><Link to="/free-bets" className="hover:underline">Free bets</Link></li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            }

            if (item.label === "Games") {
              return (
                <div
                  key="Games"
                  className="relative"
                  onMouseEnter={() => {
                    clearTimeout(gamesHoverTimeout);
                    setGamesOpen(true);
                  }}
                  onMouseLeave={() => {
                    const timeout = setTimeout(() => setGamesOpen(false), 200);
                    setGamesHoverTimeout(timeout);
                  }}
                >
                  <Link
                    className="cursor-pointer hover:text-[#FFD700] transition text-[#D3D3D3]"
                    onClick={toggleGames}
                    to="/games"
                  >
                    Games
                  </Link>

                  {gamesOpen && (
                    <div
                      className="absolute top-full mt-2 w-56 bg-white text-black rounded-lg shadow-lg z-50"
                      onMouseEnter={() => {
                        clearTimeout(gamesHoverTimeout);
                        setGamesOpen(true);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => setGamesOpen(false), 200);
                        setGamesHoverTimeout(timeout);
                      }}
                    >
                      <ul className="py-2 px-4 space-y-2">
                        <li><Link to="/baccarat" className="hover:underline">Baccarat</Link></li>
                        <li><Link to="/blackjack" className="hover:underline">Blackjack</Link></li>
                        <li><Link to="/poker" className="hover:underline">Poker</Link></li>
                        <li><Link to="/dice" className="hover:underline">Dice</Link></li>
                        <li><Link to="/all-games" className="hover:underline">All Games</Link></li>
                      </ul>
                    </div>
                  )}
                </div>
              );
            }

            return item.href.startsWith("/") ? (
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
            );
          })}

          {/* Desktop Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search casinos, games..."
              className="rounded-full pl-4 pr-10 py-1 text-sm text-[#D3D3D3] bg-[#2E2E5A] bg-opacity-20 border border-[#FFD700] focus:outline-none"
            />
            <FaSearch className="absolute right-3 top-2 text-[#FFD700]" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute left-0 w-full bg-white text-[#333333] z-50 shadow-md lg:hidden">
          <div className="flex flex-col px-4 py-4 space-y-2">
            {showSearch && (
              <div className="relative mb-2">
                <input
                  type="text"
                  placeholder="Search casinos, games..."
                  className="w-full rounded-full pl-4 pr-10 py-2 text-sm text-[#333333] bg-[#F5F5F5] border border-[#FFD700] focus:outline-none"
                />
                <FaTimes
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#FFD700] cursor-pointer"
                  size={20}
                  onClick={toggleSearch}
                />
              </div>
            )}
            {navItems.map((item) => {
              if (item.label === "Casino Reviews") {
                return (
                  <div key="Casino Reviews" className="relative">
                    <span
                      className="py-2 border-b border-[#1A1A3D] hover:text-[#E63946] block cursor-pointer"
                      onClick={toggleCasinoReviews}
                    >
                      {item.label}
                    </span>
                    {casinoReviewsOpen && (
                      <div className="pl-4 py-2 bg-white rounded-lg">
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/all-casino-reviews"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              All casino reviews
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/1xBET"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              1xBET
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/casino-days"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              Casino Days
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/22bet"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              22Bet
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              if (item.label === "Bonuses") {
                return (
                  <div key="Bonuses" className="relative">
                    <span
                      className="py-2 border-b border-[#1A1A3D] hover:text-[#E63946] block cursor-pointer"
                      onClick={toggleBonuses}
                    >
                      {item.label}
                    </span>
                    {bonusesOpen && (
                      <div className="pl-4 py-2 bg-white rounded-lg">
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/casino-bonuses"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              Casino bonuses
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/no-deposit-bonuses"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              No deposit bonuses
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/free-spins"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              Free spins
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/free-bets"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              Free bets
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }

              if (item.label === "Games") {
                return (
                  <div key="Games" className="relative">
                    <span
                      className="py-2 border-b border-[#1A1A3D] hover:text-[#E63946] block cursor-pointer"
                      onClick={toggleGames}
                    >
                      {item.label}
                    </span>
                    {gamesOpen && (
                      <div className="pl-4 py-2 bg-white rounded-lg">
                        <ul className="space-y-2">
                          <li>
                            <Link
                              to="/baccarat"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              Baccarat
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/blackjack"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              Blackjack
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/poker"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              Poker
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/dice"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              Dice
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="/all-games"
                              className="hover:text-[#E63946]"
                              onClick={() => setMenuOpen(false)}
                            >
                              All Games
                            </Link>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                );
              }
              return item.href.startsWith("/") ? (
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
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;