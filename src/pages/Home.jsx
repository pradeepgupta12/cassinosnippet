// import React from "react";

// const Home = () => {
//   return (
//     <section className=" text-white h-80 bg-gray-600 flex items-center justify-center px-4">
//       <div className="text-center max-w-3xl">
//         <h1 className="text-3xl md:text-5xl font-bold text-yellow-400 mb-4">
//           Welcome to CasinoSniper – Your Ultimate Guide to{" "}
//           <span className="block md:inline text-yellow-400">Winning Big!</span>
//         </h1>
//         <p className="text-lg md:text-xl italic text-black mb-8">
//           Find the best online casinos, bonuses, and games to start your
//           winning journey.
//         </p>
//         <button className="bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600 transition">
//           START PLAYING
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Home;



// import React, { useEffect, useState, useRef } from "react";
// import { FaStar, FaArrowLeft, FaArrowRight, FaShieldAlt, FaGift, FaBook, FaLock, FaWallet, FaMobileAlt, FaHeadset, FaStar as FaStarIcon, FaVideo, FaCheckCircle } from "react-icons/fa";
// import { casinoData } from "../Data/casinoData";
// import { gamesData } from "../Data/gamesData";
// import { guidesData } from "../Data/guidesData";
// import { casinoNewsAndStories } from "../Data/casinoNewsAndStories";
// import { ChooseCasino } from "../Data/ChooseCasino";


// // Array of phrases for the typing effect in the hero section
// const phrases = [
//   "Gambling News",
//   "The Best Bonus",
//   "Expert Casino Reviews",
//   "Trusted Guides",
//   "Latest Games",
// ];

// const Home = () => {
//   const [currentText, setCurrentText] = useState("");
//   const [phraseIndex, setPhraseIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const scrollRef = useRef(null);
//   const reviewScrollRef = useRef(null);
//   const bonusScrollRef = useRef(null);
//   const gamesScrollRef = useRef(null);
//   const whyChooseScrollRef = useRef(null);

//   const [visibleNewsCards, setVisibleNewsCards] = useState(4);
//   const [visibleGuideCards, setVisibleGuideCards] = useState(2);

//   // Typing effect for the hero section
//   useEffect(() => {
//     const currentPhrase = phrases[phraseIndex];
//     const typingSpeed = isDeleting ? 50 : 100;

//     const timeout = setTimeout(() => {
//       const updatedText = isDeleting
//         ? currentPhrase.slice(0, charIndex - 1)
//         : currentPhrase.slice(0, charIndex + 1);

//       setCurrentText(updatedText);
//       setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

//       if (!isDeleting && updatedText === currentPhrase) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       }

//       if (isDeleting && updatedText === "") {
//         setIsDeleting(false);
//         setPhraseIndex((prev) => (prev + 1) % phrases.length);
//         setCharIndex(0);
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, phraseIndex]);

//   // Scroll handler for top-rated casinos
//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     const scrollAmount = 320;
//     if (direction === "left") {
//       current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   // Scroll handler for honest casino reviews
//   const reviewScroll = (direction) => {
//     const { current } = reviewScrollRef;
//     const scrollAmount = 320;
//     if (direction === "left") {
//       current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   // Scroll handler for latest bonus offers
//   const bonusScroll = (direction) => {
//     const { current } = bonusScrollRef;
//     const scrollAmount = 320;
//     if (direction === "left") {
//       current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   // Scroll handler for popular casino games
//   const gamesScroll = (direction) => {
//     const { current } = gamesScrollRef;
//     const scrollAmount = 320;
//     if (direction === "left") {
//       current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   // Handle showing more news cards
//   const handleViewMoreNews = () => {
//     setVisibleNewsCards((prev) => prev + 2);
//   };

//   // Handle showing more guide cards
//   const handleViewMoreGuides = () => {
//     setVisibleGuideCards((prev) => prev + 2);
//   };

//   // Auto-scroll and hover effect for Why Choose CasinoHub
//   useEffect(() => {
//     const scrollContainer = whyChooseScrollRef.current;
//     let scrollInterval;

//     const startScroll = () => {
//       scrollInterval = setInterval(() => {
//         if (scrollContainer) {
//           scrollContainer.scrollLeft += 2; // Reduced step size for smoother scrolling
//           // Calculate the width of one card to determine when to loop
//           const cardWidth = scrollContainer.querySelector('.min-w-[250px]')?.offsetWidth || 250;
//           const totalCards = ChooseCasino.Choose.length;
//           const containerWidth = scrollContainer.clientWidth;
//           const maxScroll = (totalCards * cardWidth) - containerWidth;

//           // Loop back to start when the last card is fully visible
//           if (scrollContainer.scrollLeft >= maxScroll) {
//             scrollContainer.scrollLeft = 0; // Reset to start (id 1)
//           }
//         }
//       }, 16); // Adjusted interval for smoother animation (approx 60fps)
//     };

//     const stopScroll = () => {
//       clearInterval(scrollInterval);
//     };

//     if (scrollContainer) {
//       startScroll();
//       scrollContainer.addEventListener("mouseenter", stopScroll);
//       scrollContainer.addEventListener("mouseleave", startScroll);
//     }

//     return () => {
//       if (scrollContainer) {
//         scrollContainer.removeEventListener("mouseenter", stopScroll);
//         scrollContainer.removeEventListener("mouseleave", startScroll);
//       }
//       clearInterval(scrollInterval);
//     };
//   }, []);

//   return (
//     <div className="text-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-blue-900 to-[#010155] h-80 flex items-center justify-center px-4">
//         <div className="text-center max-w-3xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">
//             Helping You Find!
//           </h1>
//           <p className="text-2xl md:text-3xl font-semibold text-white h-10">
//             {currentText}
//             <span className="animate-pulse">|</span>
//           </p>
//           <button className="mt-6 bg-green-500 text-white font-bold px-6 py-3 rounded-full hover:bg-green-600 transition">
//             START PLAYING
//           </button>
//         </div>
//       </section>

//       {/* Top-Rated Casinos Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative bg-white text-black overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
//           Top-Rated Casinos
//         </h2>

//         {/* Arrow Buttons */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full z-10 hover:bg-green-700"
//         >
//           <FaArrowLeft />
//         </button>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full z-10 hover:bg-green-700"
//         >
//           <FaArrowRight />
//         </button>

//         {/* Scrollable Cards */}
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//         >
//           {casinoData.casinos.map((casino) => (
//             <div
//               key={casino.id}
//               className="min-w-[300px] bg-white border border-transparent hover:border-green-500 rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
//             >
//               {/* Card Image */}
//               <img src={casino.image} alt={`${casino.name} logo`} className="h-40 w-full object-cover" />

//               {/* Card Content */}
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <h3 className="text-green-700 font-bold text-lg mb-2">
//                   {casino.name}
//                 </h3>

//                 <div className="flex items-center text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       className={
//                         i < Math.round(casino.rating)
//                           ? "text-yellow-500"
//                           : "text-gray-300"
//                       }
//                     />
//                   ))}
//                   <span className="ml-2 text-sm text-black">
//                     {casino.rating.toFixed(1)}/5
//                   </span>
//                 </div>

//                 <p className="text-gray-700 text-sm mb-4">
//                   {casino.description}
//                 </p>

//                 <a
//                   href={casino.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-green-500 hover:bg-green-600 text-white font-semibold text-center py-2 rounded transition mt-auto"
//                 >
//                   Play Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Honest Casino Reviews Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative bg-white text-black overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
//           Honest Casino Reviews
//         </h2>

//         {/* Arrow Buttons */}
//         <button
//           onClick={() => reviewScroll("left")}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full z-10 hover:bg-green-700"
//         >
//           <FaArrowLeft />
//         </button>

//         <button
//           onClick={() => reviewScroll("right")}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-full z-10 hover:bg-green-700"
//         >
//           <FaArrowRight />
//         </button>

//         {/* Scrollable Cards */}
//         <div
//           ref={reviewScrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//         >
//           {casinoData.casinos.map((casino) => (
//             <div
//               key={casino.id}
//               className="min-w-[300px] bg-white border border-transparent hover:border-green-500 rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
//             >
//               {/* Card Image */}
//               <img src={casino.image} alt={`${casino.name} logo`} className="h-40 w-full object-cover" />

//               {/* Card Content */}
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <h3 className="text-green-700 font-bold text-lg mb-2">
//                   {casino.name}
//                 </h3>

//                 <div className="flex items-center text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       className={
//                         i < Math.round(casino.rating)
//                           ? "text-yellow-500"
//                           : "text-gray-300"
//                       }
//                     />
//                   ))}
//                   <span className="ml-2 text-sm text-black">
//                     {casino.rating.toFixed(1)}/5
//                   </span>
//                 </div>

//                 <p className="text-gray-700 text-sm mb-4">
//                   {casino.description}
//                 </p>

//                 <a
//                   href={casino.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-green-500 hover:bg-green-600 text-white font-semibold text-center py-2 rounded transition mt-auto"
//                 >
//                   Read Full Review
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Latest Bonus Offers Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative bg-white text-black overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
//           Latest Bonus Offers
//         </h2>

//         {/* Scrollable Cards (No Arrow Buttons) */}
//         <div
//           ref={bonusScrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//         >
//           {casinoData.casinos.map((casino) => (
//             <div
//               key={casino.id}
//               className="min-w-[300px] bg-white border border-transparent hover:border-green-500 rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
//             >
//               {/* Card Image */}
//               <img src={casino.image} alt={`${casino.name} bonus`} className="h-40 w-full object-cover" />

//               {/* Card Content */}
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <h3 className="text-green-700 font-bold text-lg mb-2">
//                   {casino.name} Bonus
//                 </h3>

//                 <p className="text-gray-700 text-sm mb-4">
//                   {casino.bonus} - {casino.review.bonuses}
//                 </p>

//                 <a
//                   href={casino.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-green-500 hover:bg-green-600 text-white font-semibold text-center py-2 rounded transition mt-auto"
//                 >
//                   CLAIM NOW
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Popular Casino Games Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative text-white overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
//           Popular Casino Games
//         </h2>

//         {/* Scrollable Cards */}
//         <div
//           ref={gamesScrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//         >
//           {[
//             ...gamesData.slots,
//             ...gamesData.table,
//             ...gamesData.live
//           ].map((game) => (
//             <div
//               key={game.gameId}
//               className="min-w-[250px] bg-gray-800 border border-transparent hover:border-orange-500 rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col items-center text-center p-4 hover:-translate-y-2 hover:shadow-lg relative z-0 hover:z-10"
//             >
//               {/* Game Image */}
//               <img 
//                 src={game.image} 
//                 alt={`${game.name} image`} 
//                 className="h-40 w-full object-contain object-cover object-center mb-2 rounded-t-lg bg-gray-700"
//               />

//               {/* Game Name */}
//               <h3 className="text-white font-bold text-lg mb-2">
//                 {game.name}
//               </h3>

//               {/* Rating */}
//               <div className="flex items-center text-yellow-400 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar
//                     key={i}
//                     className={
//                       i < Math.round(game.rating)
//                         ? "text-yellow-400"
//                         : "text-gray-500"
//                     }
//                   />
//                 ))}
//                 <span className="ml-2 text-sm text-gray-300">
//                   {game.rating}/5
//                 </span>
//               </div>

//               {/* Play Free Button */}
//               <a
//                 href={game.demoUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-4 py-2 rounded transition mt-auto"
//               >
//                 Play Free
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Casino Guides & Tips Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-black overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-6">
//           Casino Guides & Tips
//         </h2>
//         <div className="w-full h-1 bg-gray-500 mb-6"></div>

//         <div className="flex flex-col md:flex-row gap-6">
//           {/* Featured Guides */}
//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl md:text-2xl font-bold text-black mb-4">Featured Guides</h3>
            
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//               {guidesData.guides.slice(0, visibleGuideCards).map((guide) => (
//                 <div
//                   key={guide.guideId}
//                   className="p-6 rounded-lg shadow-xl bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
//                 >
//                   <h4 className="text-lg font-semibold text-black mb-2">
//                     {guide.title}
//                   </h4>
//                   <p className="text-gray-700 text-sm mb-4">
//                     {guide.description}
//                   </p>
//                   <a
//                     href={guide.contentUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-2 inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-full transition"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//               ))}
//             </div>
//             {visibleGuideCards < guidesData.guides.length && (
//               <div className="text-left mt-4">
//                 <a
//                   href="#"
//                   onClick={(e) => { e.preventDefault(); handleViewMoreGuides(); }}
//                   className="text-green-500 hover:text-green-600 font-semibold"
//                 >
//                   View more--
//                 </a>
//               </div>
//             )}
//             <div className="w-full h-1 bg-gray-300 mt-4"></div>
//           </div>

//           {/* How to Play */}
//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl md:text-2xl font-bold text-black mb-4">How to Play</h3>
//             <ul className="space-y-4">
//               {guidesData.guides.slice(0, visibleGuideCards).map((guide) => (
//                 <li key={guide.guideId} className="border-b border-gray-300 pb-2">
//                   <span className="text-gray-700 text-sm">{guide.title}</span>
//                   <p className="text-gray-700 text-xs mt-1">{guide.description}</p>
//                 </li>
//               ))}
//             </ul>
//             {visibleGuideCards < guidesData.guides.length && (
//               <div className="text-left mt-4">
//                 <a
//                   href="#"
//                   onClick={(e) => { e.preventDefault(); handleViewMoreGuides(); }}
//                   className="text-green-500 hover:text-green-600 font-semibold"
//                 >
//                   View more--
//                 </a>
//               </div>
//             )}
//             <div className="w-full h-1 bg-gray-300 mt-4"></div>
//           </div>
//         </div>
//       </section>

//       {/* Latest Casino News & Stories Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-black overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-6">
//           Latest Casino News & Stories
//         </h2>
//         <div className="w-full h-1 bg-gray-500 mb-6"></div>

//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
//           {[
//             ...casinoNewsAndStories.news.filter(item => item.is_featured),
//             ...casinoNewsAndStories.stories.filter(item => item.is_featured),
//             ...casinoNewsAndStories.news.filter(item => !item.is_featured),
//             ...casinoNewsAndStories.stories.filter(item => !item.is_featured)
//           ].slice(0, visibleNewsCards).map((item) => (
//             <div
//               key={item.id}
//               className="rounded-lg bg-white shadow-md border border-gray-200 hover:shadow-lg duration-300 flex flex-col md:flex-row min-h-[150px] p-0"
//             >
//               <img src={item.image_url} alt={`${item.title} image`} className="w-full md:w-1/3 h-32 md:h-full object-cover object-contain rounded-lg" />
//               <div className="w-full md:w-2/3 p-2 md:p-4">
//                 <h4 className="text-lg font-semibold text-gray-800 mb-2">{item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</h4>
//                 <p className="text-gray-600 text-sm mb-2">{item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}</p>
//                 <div className="flex justify-between text-xs text-gray-500 mb-2">
//                   <span>{item.author}</span>
//                   <span>{new Date(item.published_date).toLocaleDateString()}</span>
//                 </div>
//                 <a
//                   href={`/${item.category.toLowerCase().replace(/ /g, '-')}/${item.slug}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-green-500 hover:text-green-600 font-semibold"
//                 >
//                   Readmore
//                 </a>
//               </div>
//             </div>
//           ))}
//           {visibleNewsCards < [...casinoNewsAndStories.news, ...casinoNewsAndStories.stories].length && (
//             <div className="text-left mt-4">
//               <a
//                 href="#"
//                 onClick={(e) => { e.preventDefault(); handleViewMoreNews(); }}
//                 className="text-green-500 hover:text-green-600 font-semibold"
//               >
//                 View more --
//               </a>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Why Choose CasinoHub Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-black overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-black text-center mb-10">
//           Why Choose CasinoHub?
//         </h2>
//         <div
//           ref={whyChooseScrollRef}
//           className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//           style={{ display: "flex", justifyContent: "flex-start" }}
//         >
//           {ChooseCasino.Choose.map((item) => (
//             <div
//               key={item.id}
//               className="min-w-[250px] text-center flex flex-col items-center p-6 bg-white border border-transparent hover:border-gray-300 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg relative z-0 hover:z-10"
//             >
//               {/* Displaying icons based on the item.icon value */}
//               {item.icon === "shield" && <FaShieldAlt className="text-4xl text-blue-500 mb-4" />}
//               {item.icon === "gift" && <FaGift className="text-4xl text-pink-500 mb-4" />}
//               {item.icon === "book" && <FaBook className="text-4xl text-green-500 mb-4" />}
//               {item.icon === "lock" && <FaLock className="text-4xl text-yellow-500 mb-4" />}
//               {item.icon === "wallet" && <FaWallet className="text-4xl text-purple-500 mb-4" />}
//               {item.icon === "mobile" && <FaMobileAlt className="text-4xl text-teal-500 mb-4" />}
//               {item.icon === "headset" && <FaHeadset className="text-4xl text-red-500 mb-4" />}
//               {item.icon === "star" && <FaStarIcon className="text-4xl text-yellow-500 mb-4" />}
//               {item.icon === "video" && <FaVideo className="text-4xl text-indigo-500 mb-4" />}
//               {item.icon === "check-circle" && <FaCheckCircle className="text-4xl text-green-500 mb-4" />}
//               <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
//               <p className="text-base text-gray-700">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;

// import React, { useEffect, useState, useRef } from "react";
// import { FaStar, FaArrowLeft, FaArrowRight, FaShieldAlt, FaGift, FaBook, FaLock, FaWallet, FaMobileAlt, FaHeadset, FaStar as FaStarIcon, FaVideo, FaCheckCircle } from "react-icons/fa";
// import { casinoData } from "../Data/casinoData";
// import { gamesData } from "../Data/gamesData";
// import { guidesData } from "../Data/guidesData";
// import { casinoNewsAndStories } from "../Data/casinoNewsAndStories";
// import { ChooseCasino } from "../Data/ChooseCasino";

// const phrases = [
//   "Gambling News",
//   "The Best Bonus",
//   "Expert Casino Reviews",
//   "Trusted Guides",
//   "Latest Games",
// ];

// const Home = () => {
//   const [currentText, setCurrentText] = useState("");
//   const [phraseIndex, setPhraseIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   const scrollRef = useRef(null);
//   const reviewScrollRef = useRef(null);
//   const bonusScrollRef = useRef(null);
//   const gamesScrollRef = useRef(null);
//   const whyChooseScrollRef = useRef(null);

//   const [visibleNewsCards, setVisibleNewsCards] = useState(4);
//   const [visibleGuideCards, setVisibleGuideCards] = useState(2);

//   useEffect(() => {
//     const currentPhrase = phrases[phraseIndex];
//     const typingSpeed = isDeleting ? 50 : 100;

//     const timeout = setTimeout(() => {
//       const updatedText = isDeleting
//         ? currentPhrase.slice(0, charIndex - 1)
//         : currentPhrase.slice(0, charIndex + 1);

//       setCurrentText(updatedText);
//       setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

//       if (!isDeleting && updatedText === currentPhrase) {
//         setTimeout(() => setIsDeleting(true), 1000);
//       }

//       if (isDeleting && updatedText === "") {
//         setIsDeleting(false);
//         setPhraseIndex((prev) => (prev + 1) % phrases.length);
//         setCharIndex(0);
//       }
//     }, typingSpeed);

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, phraseIndex]);

//   const scroll = (direction) => {
//     const { current } = scrollRef;
//     const scrollAmount = 320;
//     if (direction === "left") {
//       current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const reviewScroll = (direction) => {
//     const { current } = reviewScrollRef;
//     const scrollAmount = 320;
//     if (direction === "left") {
//       current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const bonusScroll = (direction) => {
//     const { current } = bonusScrollRef;
//     const scrollAmount = 320;
//     if (direction === "left") {
//       current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const gamesScroll = (direction) => {
//     const { current } = gamesScrollRef;
//     const scrollAmount = 320;
//     if (direction === "left") {
//       current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
//     } else {
//       current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const handleViewMoreNews = () => {
//     setVisibleNewsCards((prev) => prev + 2);
//   };

//   const handleViewMoreGuides = () => {
//     setVisibleGuideCards((prev) => prev + 2);
//   };

//   useEffect(() => {
//     const scrollContainer = whyChooseScrollRef.current;
//     let scrollInterval;

//     const startScroll = () => {
//       scrollInterval = setInterval(() => {
//         if (scrollContainer) {
//           scrollContainer.scrollLeft += 2;
//           const cardWidth = scrollContainer.querySelector('.min-w-[250px]')?.offsetWidth || 250;
//           const totalCards = ChooseCasino.Choose.length;
//           const containerWidth = scrollContainer.clientWidth;
//           const maxScroll = (totalCards * cardWidth) - containerWidth;

//           if (scrollContainer.scrollLeft >= maxScroll) {
//             scrollContainer.scrollLeft = 0;
//           }
//         }
//       }, 16);
//     };

//     const stopScroll = () => {
//       clearInterval(scrollInterval);
//     };

//     if (scrollContainer) {
//       startScroll();
//       scrollContainer.addEventListener("mouseenter", stopScroll);
//       scrollContainer.addEventListener("mouseleave", startScroll);
//     }

//     return () => {
//       if (scrollContainer) {
//         scrollContainer.removeEventListener("mouseenter", stopScroll);
//         scrollContainer.removeEventListener("mouseleave", startScroll);
//       }
//       clearInterval(scrollInterval);
//     };
//   }, []);

//   return (
//     <div className="text-[#D3D3D3]">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-[#1A1A3D] to-[#2E2E5A] h-80 flex items-center justify-center px-4">
//         <div className="text-center max-w-3xl">
//           <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] mb-4">
//             Helping You Find!
//           </h1>
//           <p className="text-2xl md:text-3xl font-semibold text-[#D3D3D3] h-10">
//             {currentText}
//             <span className="animate-pulse">|</span>
//           </p>
//           <button className="mt-6 bg-[#E63946] text-white font-bold px-6 py-3 rounded-full hover:bg-[#D62828] transition">
//             START PLAYING
//           </button>
//         </div>
//       </section>

//       {/* Top-Rated Casinos Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative bg-white text-[#333333] overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
//           Top-Rated Casinos
//         </h2>
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1A1A3D] text-white p-2 rounded-full z-10 hover:bg-[#2E2E5A]"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1A1A3D] text-white p-2 rounded-full z-10 hover:bg-[#2E2E5A]"
//         >
//           <FaArrowRight />
//         </button>
//         <div
//           ref={scrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//         >
//           {casinoData.casinos.map((casino) => (
//             <div
//               key={casino.id}
//               className="min-w-[300px] bg-white border border-transparent hover:border-[#FFD700] rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
//             >
//               <img src={casino.image} alt={`${casino.name} logo`} className="h-40 w-full object-cover" />
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <h3 className="text-[#1A1A3D] font-bold text-lg mb-2">
//                   {casino.name}
//                 </h3>
//                 <div className="flex items-center text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       className={
//                         i < Math.round(casino.rating)
//                           ? "text-yellow-500"
//                           : "text-gray-300"
//                       }
//                     />
//                   ))}
//                   <span className="ml-2 text-sm text-[#333333]">
//                     {casino.rating.toFixed(1)}/5
//                   </span>
//                 </div>
//                 <p className="text-gray-700 text-sm mb-4">
//                   {casino.description}
//                 </p>
//                 <a
//                   href={casino.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#E63946] hover:bg-[#D62828] text-white font-semibold text-center py-2 rounded transition mt-auto"
//                 >
//                   Play Now
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Honest Casino Reviews Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative bg-white text-[#333333] overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
//           Honest Casino Reviews
//         </h2>
//         <button
//           onClick={() => reviewScroll("left")}
//           className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1A1A3D] text-white p-2 rounded-full z-10 hover:bg-[#2E2E5A]"
//         >
//           <FaArrowLeft />
//         </button>
//         <button
//           onClick={() => reviewScroll("right")}
//           className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1A1A3D] text-white p-2 rounded-full z-10 hover:bg-[#2E2E5A]"
//         >
//           <FaArrowRight />
//         </button>
//         <div
//           ref={reviewScrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//         >
//           {casinoData.casinos.map((casino) => (
//             <div
//               key={casino.id}
//               className="min-w-[300px] bg-white border border-transparent hover:border-[#FFD700] rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
//             >
//               <img src={casino.image} alt={`${casino.name} logo`} className="h-40 w-full object-cover" />
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <h3 className="text-[#1A1A3D] font-bold text-lg mb-2">
//                   {casino.name}
//                 </h3>
//                 <div className="flex items-center text-yellow-500 mb-2">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       className={
//                         i < Math.round(casino.rating)
//                           ? "text-yellow-500"
//                           : "text-gray-300"
//                       }
//                     />
//                   ))}
//                   <span className="ml-2 text-sm text-[#333333]">
//                     {casino.rating.toFixed(1)}/5
//                   </span>
//                 </div>
//                 <p className="text-gray-700 text-sm mb-4">
//                   {casino.description}
//                 </p>
//                 <a
//                   href={casino.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#E63946] hover:bg-[#D62828] text-white font-semibold text-center py-2 rounded transition mt-auto"
//                 >
//                   Read Full Review
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Latest Bonus Offers Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative bg-white text-[#333333] overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
//           Latest Bonus Offers
//         </h2>
//         <div
//           ref={bonusScrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//         >
//           {casinoData.casinos.map((casino) => (
//             <div
//               key={casino.id}
//               className="min-w-[300px] bg-white border border-transparent hover:border-[#FFD700] rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
//             >
//               <img src={casino.image} alt={`${casino.name} bonus`} className="h-40 w-full object-cover" />
//               <div className="p-4 flex flex-col justify-between flex-grow">
//                 <h3 className="text-[#1A1A3D] font-bold text-lg mb-2">
//                   {casino.name} Bonus
//                 </h3>
//                 <p className="text-gray-700 text-sm mb-4">
//                   {casino.bonus} - {casino.review.bonuses}
//                 </p>
//                 <a
//                   href={casino.website}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="bg-[#E63946] hover:bg-[#D62828] text-white font-semibold text-center py-2 rounded transition mt-auto"
//                 >
//                   CLAIM NOW
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Popular Casino Games Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative text-[#D3D3D3] overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
//           Popular Casino Games
//         </h2>
//         <div
//           ref={gamesScrollRef}
//           className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//         >
//           {[...gamesData.slots, ...gamesData.table, ...gamesData.live].map((game) => (
//             <div
//               key={game.gameId}
//               className="min-w-[250px] bg-[#1A1A3D] border border-transparent hover:border-[#FFD700] rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col items-center text-center p-4 hover:-translate-y-2 hover:shadow-lg relative z-0 hover:z-10"
//             >
//               <img 
//                 src={game.image} 
//                 alt={`${game.name} image`} 
//                 className="h-40 w-full object-contain object-cover object-center mb-2 rounded-t-lg bg-[#2E2E5A]"
//               />
//               <h3 className="text-[#D3D3D3] font-bold text-lg mb-2">
//                 {game.name}
//               </h3>
//               <div className="flex items-center text-yellow-500 mb-2">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar
//                     key={i}
//                     className={
//                       i < Math.round(game.rating)
//                         ? "text-yellow-500"
//                         : "text-gray-500"
//                     }
//                   />
//                 ))}
//                 <span className="ml-2 text-sm text-[#D3D3D3]">
//                   {game.rating}/5
//                 </span>
//               </div>
//               <a
//                 href={game.demoUrl}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="bg-[#E63946] hover:bg-[#D62828] text-white font-semibold px-4 py-2 rounded transition mt-auto"
//               >
//                 Play Free
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Casino Guides & Tips Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-6">
//           Casino Guides & Tips
//         </h2>
//         <div className="w-full h-1 bg-[#1A1A3D] mb-6"></div>
//         <div className="flex flex-col md:flex-row gap-6">
//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4">Featured Guides</h3>
//             <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
//               {guidesData.guides.slice(0, visibleGuideCards).map((guide) => (
//                 <div
//                   key={guide.guideId}
//                   className="p-6 rounded-lg shadow-xl bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
//                 >
//                   <h4 className="text-lg font-semibold text-[#333333] mb-2">
//                     {guide.title}
//                   </h4>
//                   <p className="text-gray-700 text-sm mb-4">
//                     {guide.description}
//                   </p>
//                   <a
//                     href={guide.contentUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="mt-2 inline-block bg-[#E63946] hover:bg-[#D62828] text-white font-semibold px-4 py-2 rounded-full transition"
//                   >
//                     LEARN MORE
//                   </a>
//                 </div>
//               ))}
//             </div>
//             {visibleGuideCards < guidesData.guides.length && (
//               <div className="text-left mt-4">
//                 <a
//                   href="#"
//                   onClick={(e) => { e.preventDefault(); handleViewMoreGuides(); }}
//                   className="text-[#E63946] hover:text-[#D62828] font-semibold"
//                 >
//                   View more--
//                 </a>
//               </div>
//             )}
//             <div className="w-full h-1 bg-[#1A1A3D] mt-4"></div>
//           </div>
//           <div className="w-full md:w-1/2">
//             <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4">How to Play</h3>
//             <ul className="space-y-4">
//               {guidesData.guides.slice(0, visibleGuideCards).map((guide) => (
//                 <li key={guide.guideId} className="border-b border-gray-300 pb-2">
//                   <span className="text-gray-700 text-sm">{guide.title}</span>
//                   <p className="text-gray-700 text-xs mt-1">{guide.description}</p>
//                 </li>
//               ))}
//             </ul>
//             {visibleGuideCards < guidesData.guides.length && (
//               <div className="text-left mt-4">
//                 <a
//                   href="#"
//                   onClick={(e) => { e.preventDefault(); handleViewMoreGuides(); }}
//                   className="text-[#E63946] hover:text-[#D62828] font-semibold"
//                 >
//                   View more--
//                 </a>
//               </div>
//             )}
//             <div className="w-full h-1 bg-[#1A1A3D] mt-4"></div>
//           </div>
//         </div>
//       </section>

//       {/* Latest Casino News & Stories Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-6">
//           Latest Casino News & Stories
//         </h2>
//         <div className="w-full h-1 bg-[#1A1A3D] mb-6"></div>
//         <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
//           {[
//             ...(casinoNewsAndStories.news?.filter(item => item.isFeatured) || []),
//             ...(casinoNewsAndStories.stories?.filter(item => item.isFeatured) || []),
//             ...(casinoNewsAndStories.news?.filter(item => !item.isFeatured) || []),
//             ...(casinoNewsAndStories.stories?.filter(item => !item.isFeatured) || [])
//           ].slice(0, visibleNewsCards).map((item) => (
//             <div
//               key={item.id}
//               className="rounded-lg bg-white shadow-md border border-gray-200 hover:shadow-lg duration-300 flex flex-col md:flex-row min-h-[150px] p-0"
//             >
//               <img src={item.image_url} alt={`${item.title} image`} className="w-full md:w-1/3 h-32 md:h-full object-cover object-contain rounded-lg" />
//               <div className="w-full md:w-2/3 p-2 md:p-4">
//                 <h4 className="text-lg font-semibold text-[#333333] mb-2">{item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</h4>
//                 <p className="text-gray-600 text-sm mb-2">{item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}</p>
//                 <div className="flex justify-between text-xs text-gray-500 mb-2">
//                   <span>{item.author}</span>
//                   <span>{new Date(item.published_date).toLocaleDateString()}</span>
//                 </div>
//                 <a
//                   href={`/${item.category.toLowerCase().replace(/ /g, '-')}/${item.slug}`}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-[#E63946] hover:text-[#D62828] font-semibold"
//                 >
//                   Readmore
//                 </a>
//               </div>
//             </div>
//           ))}
//           {visibleNewsCards < [...(casinoNewsAndStories.news || []), ...(casinoNewsAndStories.stories || [])].length && (
//             <div className="text-left mt-4">
//               <a
//                 href="#"
//                 onClick={(e) => { e.preventDefault(); handleViewMoreNews(); }}
//                 className="text-[#E63946] hover:text-[#D62828] font-semibold"
//               >
//                 View more --
//               </a>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Why Choose CasinoHub Section */}
//       <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] overflow-visible">
//         <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
//           Why Choose CasinoHub?
//         </h2>
//         <div
//           ref={whyChooseScrollRef}
//           className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
//           style={{ display: "flex", justifyContent: "flex-start" }}
//         >
//           {ChooseCasino.Choose.map((item) => (
//             <div
//               key={item.id}
//               className="min-w-[250px] text-center flex flex-col items-center p-6 bg-white border border-transparent hover:border-[#FFD700] rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg relative z-0 hover:z-10"
//             >
//               {item.icon === "shield" && <FaShieldAlt className="text-4xl text-[#FFD700] mb-4" />}
//               {item.icon === "gift" && <FaGift className="text-4xl text-[#E63946] mb-4" />}
//               {item.icon === "book" && <FaBook className="text-4xl text-[#1A1A3D] mb-4" />}
//               {item.icon === "lock" && <FaLock className="text-4xl text-[#FFD700] mb-4" />}
//               {item.icon === "wallet" && <FaWallet className="text-4xl text-[#E63946] mb-4" />}
//               {item.icon === "mobile" && <FaMobileAlt className="text-4xl text-[#1A1A3D] mb-4" />}
//               {item.icon === "headset" && <FaHeadset className="text-4xl text-[#E63946] mb-4" />}
//               {item.icon === "star" && <FaStarIcon className="text-4xl text-[#FFD700] mb-4" />}
//               {item.icon === "video" && <FaVideo className="text-4xl text-[#1A1A3D] mb-4" />}
//               {item.icon === "check-circle" && <FaCheckCircle className="text-4xl text-[#E63946] mb-4" />}
//               <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
//               <p className="text-base text-gray-700">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect, useState, useRef } from "react";
import { FaStar, FaArrowLeft, FaArrowRight, FaShieldAlt, FaGift, FaBook, FaLock, FaWallet, FaMobileAlt, FaHeadset, FaStar as FaStarIcon, FaVideo, FaCheckCircle } from "react-icons/fa";
import { casinoData } from "../Data/casinoData";
import { gamesData } from "../Data/gamesData";
import { guidesData } from "../Data/guidesData";
import { casinoNewsAndStories } from "../Data/casinoNewsAndStories";
import { ChooseCasino } from "../Data/ChooseCasino";

const phrases = [
  "Gambling News",
  "The Best Bonus",
  "Expert Casino Reviews",
  "Trusted Guides",
  "Latest Games",
];

const Home = () => {
  const [currentText, setCurrentText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollRef = useRef(null);
  const reviewScrollRef = useRef(null);
  const bonusScrollRef = useRef(null);
  const gamesScrollRef = useRef(null);
  const whyChooseScrollRef = useRef(null);

  const [visibleNewsCards, setVisibleNewsCards] = useState(4);
  const [visibleGuideCards, setVisibleGuideCards] = useState(2);
  const [visibleHowToPlayCards, setVisibleHowToPlayCards] = useState(2);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentPhrase.slice(0, charIndex - 1)
        : currentPhrase.slice(0, charIndex + 1);

      setCurrentText(updatedText);
      setCharIndex(isDeleting ? charIndex - 1 : charIndex + 1);

      if (!isDeleting && updatedText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      }

      if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 320;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const reviewScroll = (direction) => {
    const { current } = reviewScrollRef;
    const scrollAmount = 320;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const bonusScroll = (direction) => {
    const { current } = bonusScrollRef;
    const scrollAmount = 320;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const gamesScroll = (direction) => {
    const { current } = gamesScrollRef;
    const scrollAmount = 320;
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleViewMoreNews = () => {
    setVisibleNewsCards([...(casinoNewsAndStories.news || []), ...(casinoNewsAndStories.stories || [])].length);
  };

  const handleViewMoreGuides = () => {
    setVisibleGuideCards(guidesData.guides.length);
  };

  const handleViewMoreHowToPlay = () => {
    setVisibleHowToPlayCards(guidesData.guides.length);
  };

  useEffect(() => {
    const scrollContainer = whyChooseScrollRef.current;
    let scrollInterval;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (scrollContainer) {
          scrollContainer.scrollLeft += 2;
          const cardWidth = scrollContainer.querySelector('.min-w-[250px]')?.offsetWidth || 250;
          const totalCards = ChooseCasino.Choose.length;
          const containerWidth = scrollContainer.clientWidth;
          const maxScroll = (totalCards * cardWidth) - containerWidth;

          if (scrollContainer.scrollLeft >= maxScroll) {
            scrollContainer.scrollLeft = 0;
          }
        }
      }, 16);
    };

    const stopScroll = () => {
      clearInterval(scrollInterval);
    };

    if (scrollContainer) {
      startScroll();
      scrollContainer.addEventListener("mouseenter", stopScroll);
      scrollContainer.addEventListener("mouseleave", startScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("mouseenter", stopScroll);
        scrollContainer.removeEventListener("mouseleave", startScroll);
      }
      clearInterval(scrollInterval);
    };
  }, []);

  return (
    <div className="text-[#D3D3D3]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1A1A3D] to-[#2E2E5A] h-80 flex items-center justify-center px-4">
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#FFD700] mb-4">
            Helping You Find!
          </h1>
          <p className="text-2xl md:text-3xl font-semibold text-[#D3D3D3] h-10">
            {currentText}
            <span className="animate-pulse">|</span>
          </p>
          <button className="mt-6 bg-[#FFD700] text-[#333333] font-bold px-6 py-3 rounded-full hover:bg-[#FFC107] transition">
            START PLAYING
          </button>
        </div>
      </section>

      {/* Top-Rated Casinos Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative bg-white text-[#333333] overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
          Top-Rated Casinos
        </h2>
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1A1A3D] text-white p-2 rounded-full z-10 hover:bg-[#2E2E5A]"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1A1A3D] text-white p-2 rounded-full z-10 hover:bg-[#2E2E5A]"
        >
          <FaArrowRight />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
        >
          {casinoData.casinos.map((casino) => (
            <div
              key={casino.id}
              className="min-w-[300px] bg-white border border-transparent hover:border-[#FFD700] rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
            >
              <img src={casino.image} alt={`${casino.name} logo`} className="h-40 w-full object-cover" />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-[#1A1A3D] font-bold text-lg mb-2">
                  {casino.name}
                </h3>
                <div className="flex items-center text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(casino.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-[#333333]">
                    {casino.rating.toFixed(1)}/5
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  {casino.description}
                </p>
                <a
                  href={casino.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFD700] hover:bg-[#FFC107] text-[#333333] font-semibold text-center py-2 rounded transition mt-auto"
                >
                  Play Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honest Casino Reviews Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative bg-white text-[#333333] overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
          Honest Casino Reviews
        </h2>
        <button
          onClick={() => reviewScroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#1A1A3D] text-white p-2 rounded-full z-10 hover:bg-[#2E2E5A]"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={() => reviewScroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#1A1A3D] text-white p-2 rounded-full z-10 hover:bg-[#2E2E5A]"
        >
          <FaArrowRight />
        </button>
        <div
          ref={reviewScrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
        >
          {casinoData.casinos.map((casino) => (
            <div
              key={casino.id}
              className="min-w-[300px] bg-white border border-transparent hover:border-[#FFD700] rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
            >
              <img src={casino.image} alt={`${casino.name} logo`} className="h-40 w-full object-cover" />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-[#1A1A3D] font-bold text-lg mb-2">
                  {casino.name}
                </h3>
                <div className="flex items-center text-yellow-500 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.round(casino.rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="ml-2 text-sm text-[#333333]">
                    {casino.rating.toFixed(1)}/5
                  </span>
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  {casino.description}
                </p>
                <a
                  href={casino.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFD700] hover:bg-[#FFC107] text-[#333333] font-semibold text-center py-2 rounded transition mt-auto"
                >
                  Read Full Review
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Latest Bonus Offers Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative bg-white text-[#333333] overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
          Latest Bonus Offers
        </h2>
        <div
          ref={bonusScrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
        >
          {casinoData.casinos.map((casino) => (
            <div
              key={casino.id}
              className="min-w-[300px] bg-white border border-transparent hover:border-[#FFD700] rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col transform hover:-translate-y-2 hover:shadow-xl relative z-0 hover:z-10"
            >
              <img src={casino.image} alt={`${casino.name} bonus`} className="h-40 w-full object-cover" />
              <div className="p-4 flex flex-col justify-between flex-grow">
                <h3 className="text-[#1A1A3D] font-bold text-lg mb-2">
                  {casino.name} Bonus
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  {casino.bonus} - {casino.review.bonuses}
                </p>
                <a
                  href={casino.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#FFD700] hover:bg-[#FFC107] text-[#333333] font-semibold text-center py-2 rounded transition mt-auto"
                >
                  CLAIM NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Casino Games Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto relative text-[#D3D3D3] overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
          Popular Casino Games
        </h2>
        <div
          ref={gamesScrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
        >
          {[...gamesData.slots, ...gamesData.table, ...gamesData.live].map((game) => (
            <div
              key={game.gameId}
              className="min-w-[250px] bg-[#1A1A3D] border border-transparent hover:border-[#FFD700] rounded-lg overflow-hidden shadow-md transition-transform duration-300 flex flex-col items-center text-center p-4 hover:-translate-y-2 hover:shadow-lg relative z-0 hover:z-10"
            >
              <img 
                src={game.image} 
                alt={`${game.name} image`} 
                className="h-40 w-full object-contain object-cover object-center mb-2 rounded-t-lg bg-[#2E2E5A]"
              />
              <h3 className="text-[#D3D3D3] font-bold text-lg mb-2">
                {game.name}
              </h3>
              <div className="flex items-center text-yellow-500 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={
                      i < Math.round(game.rating)
                        ? "text-yellow-500"
                        : "text-gray-500"
                    }
                  />
                ))}
                <span className="ml-2 text-sm text-[#D3D3D3]">
                  {game.rating}/5
                </span>
              </div>
              <a
                href={game.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FFD700] hover:bg-[#FFC107] text-[#333333] font-semibold px-4 py-2 rounded transition mt-auto"
              >
                Play Free
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Casino Guides & Tips Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-6">
          Casino Guides & Tips
        </h2>
        <div className="w-full h-1 bg-[#1A1A3D] mb-6"></div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4">Featured Guides</h3>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {guidesData.guides.slice(0, visibleGuideCards).map((guide) => (
                <div
                  key={guide.guideId}
                  className="p-6 rounded-lg shadow-xl bg-white border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
                >
                  <h4 className="text-lg font-semibold text-[#333333] mb-2">
                    {guide.title}
                  </h4>
                  <p className="text-gray-700 text-sm mb-4">
                    {guide.description}
                  </p>
                  <a
                    href={guide.contentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block bg-[#FFD700] hover:bg-[#FFC107] text-[#333333] font-semibold px-4 py-2 rounded-full transition"
                  >
                    LEARN MORE
                  </a>
                </div>
              ))}
            </div>
            {visibleGuideCards < guidesData.guides.length && (
              <div className="text-left mt-4">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleViewMoreGuides(); }}
                  className="text-[#E63946] hover:text-[#D62828] font-semibold flex items-center gap-2"
                >
                  View more <FaArrowRight className="text-[#E63946] hover:text-[#D62828]" />
                </a>
              </div>
            )}
            <div className="w-full h-1 bg-[#1A1A3D] mt-4"></div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold text-[#333333] mb-4">How to Play</h3>
            <ul className="space-y-4">
              {guidesData.guides.slice(0, visibleHowToPlayCards).map((guide) => (
                <li key={guide.guideId} className="border-b border-gray-300 pb-2">
                  <span className="text-gray-700 text-sm">{guide.title}</span>
                  <p className="text-gray-700 text-xs mt-1">{guide.description}</p>
                </li>
              ))}
            </ul>
            {visibleHowToPlayCards < guidesData.guides.length && (
              <div className="text-left mt-4">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleViewMoreHowToPlay(); }}
                  className="text-[#E63946] hover:text-[#D62828] font-semibold flex items-center gap-2"
                >
                  View more <FaArrowRight className="text-[#E63946] hover:text-[#D62828]" />
                </a>
              </div>
            )}
            <div className="w-full h-1 bg-[#1A1A3D] mt-4"></div>
          </div>
        </div>
      </section>

      {/* Latest Casino News & Stories Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-6">
          Latest Casino News & Stories
        </h2>
        <div className="w-full h-1 bg-[#1A1A3D] mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
          {[
            ...(casinoNewsAndStories.news?.filter(item => item.isFeatured) || []),
            ...(casinoNewsAndStories.stories?.filter(item => item.isFeatured) || []),
            ...(casinoNewsAndStories.news?.filter(item => !item.isFeatured) || []),
            ...(casinoNewsAndStories.stories?.filter(item => !item.isFeatured) || [])
          ].slice(0, visibleNewsCards).map((item) => (
            <div
              key={item.id}
              className="rounded-lg bg-white shadow-md border border-gray-200 hover:shadow-lg duration-300 flex flex-col md:flex-row min-h-[150px] p-0"
            >
              <img src={item.image_url} alt={`${item.title} image`} className="w-full md:w-1/3 h-32 md:h-full object-cover object-contain rounded-lg" />
              <div className="w-full md:w-2/3 p-2 md:p-4">
                <h4 className="text-lg font-semibold text-[#333333] mb-2">{item.title.length > 30 ? `${item.title.slice(0, 30)}...` : item.title}</h4>
                <p className="text-gray-600 text-sm mb-2">{item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description}</p>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>{item.author}</span>
                  <span>{new Date(item.published_date).toLocaleDateString()}</span>
                </div>
                <a
                  href={`/${item.category.toLowerCase().replace(/ /g, '-')}/${item.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E63946] hover:text-[#D62828] font-semibold"
                >
                  Readmore
                </a>
              </div>
            </div>
          ))}
          {visibleNewsCards < [...(casinoNewsAndStories.news || []), ...(casinoNewsAndStories.stories || [])].length && (
            <div className="text-left mt-4">
              <a
                href="#"
                onClick={(e) => { e.preventDefault(); handleViewMoreNews(); }}
                className="text-[#E63946] hover:text-[#D62828] font-semibold flex items-center gap-2"
              >
                View more <FaArrowRight className="text-[#E63946] hover:text-[#D62828]" />
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose CasinoHub Section */}
      <section className="py-12 px-4 md:px-8 max-w-7xl mx-auto bg-white text-[#333333] overflow-visible">
        <h2 className="text-3xl md:text-4xl font-bold text-[#333333] text-center mb-10">
          Why Choose CasinoHub?
        </h2>
        <div
          ref={whyChooseScrollRef}
          className="flex gap-8 overflow-x-auto scroll-smooth no-scrollbar pb-4 pt-4 relative z-0"
          style={{ display: "flex", justifyContent: "flex-start" }}
        >
          {ChooseCasino.Choose.map((item) => (
            <div
              key={item.id}
              className="min-w-[250px] text-center flex flex-col items-center p-6 bg-white border border-transparent hover:border-[#FFD700] rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg relative z-0 hover:z-10"
            >
              {item.icon === "shield" && <FaShieldAlt className="text-4xl text-[#FFD700] mb-4" />}
              {item.icon === "gift" && <FaGift className="text-4xl text-[#E63946] mb-4" />}
              {item.icon === "book" && <FaBook className="text-4xl text-[#1A1A3D] mb-4" />}
              {item.icon === "lock" && <FaLock className="text-4xl text-[#FFD700] mb-4" />}
              {item.icon === "wallet" && <FaWallet className="text-4xl text-[#E63946] mb-4" />}
              {item.icon === "mobile" && <FaMobileAlt className="text-4xl text-[#1A1A3D] mb-4" />}
              {item.icon === "headset" && <FaHeadset className="text-4xl text-[#E63946] mb-4" />}
              {item.icon === "star" && <FaStarIcon className="text-4xl text-[#FFD700] mb-4" />}
              {item.icon === "video" && <FaVideo className="text-4xl text-[#1A1A3D] mb-4" />}
              {item.icon === "check-circle" && <FaCheckCircle className="text-4xl text-[#E63946] mb-4" />}
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-base text-gray-700">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
