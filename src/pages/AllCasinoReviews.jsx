


// import React from "react";
// import { casinoReviewData } from "../Data/casinoReviewData"; // अपने path के अनुसार बदलें
// import { FaCheckCircle, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
// import { MdVerified } from "react-icons/md";

// const AllCasinoReviews = () => {


//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//       {/* Heading */}
//       <h1 className="text-3xl sm:text-4xl font-bold mb-6">
//         Online casino reviews and ratings in 2025
//       </h1>

//       {/* Author Section */}
//       <div className="flex items-center gap-4 mb-6">
//         <img
//           src="/images/author.jpg" // author image path डालें
//           alt={casinoReviewData.author.name}
//           className="w-12 h-12 rounded-full object-cover"
//         />
//         <div>
//           <div className="flex items-center gap-1">
//             <span className="font-semibold text-purple-700">
//               {casinoReviewData.author.name}
//             </span>
//             {casinoReviewData.author.avatar_verified && (
//               <MdVerified className="text-green-500 text-lg" />
//             )}
//           </div>
//           <p className="text-sm text-gray-500">
//             {casinoReviewData.author.designation}
//           </p>
//         </div>
//       </div>

//       {/* Intro */}
//       <p className="text-gray-700 mb-8">{casinoReviewData.intro}</p>

//       {/* Review Criteria */}
//       <section>
//         <h2 className="text-2xl font-bold mb-4">Our online casino review criteria</h2>
//         <p className="text-gray-700 mb-6">{casinoReviewData.review_criteria.description}</p>

//         <div className="space-y-8">
//           {casinoReviewData.review_criteria.criteria_list.map((item, index) => (
//             <div key={index} className="flex gap-6 items-start">
//               {/* Icon Circle */}
//               <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                 <FaCheckCircle className="text-white text-2xl" />
//               </div>
              
//               {/* Content */}
//               <div className="flex-1">
//                 <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
//                 <p className="text-gray-700 text-base leading-relaxed">{item.details}</p>
//               </div>
//             </div>
//           ))}

//           {casinoReviewData.review_criteria.extra_fields.map((item, index) => (
//             <div key={`extra-${index}`} className="flex gap-6 items-start">
//               {/* Icon Circle */}
//               <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
//                 <FaCheckCircle className="text-white text-2xl" />
//               </div>
              
//               {/* Content */}
//               <div className="flex-1">
//                 <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
//                 <p className="text-gray-700 text-base leading-relaxed">{item.details}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Expert Rating */}
//       <section className="mt-10">
//         <div className="mb-8">
//           <h2 className="text-2xl font-bold mb-6">How our expert ratings are calculated</h2>
//           <p className="text-gray-700 text-base leading-relaxed mb-6">
//             So now you know the features our experts expect to find at a top casino and the process they go through 
//             to thoroughly test each one. Although these are all key in determining which casinos we'll recommend to 
//             you, we realize that players value some a little more than others. Below is a breakdown of how each of 
//             the seven review categories contributes to a casino's overall expert rating on our site.
//           </p>
//           <h2 className="text-2xl font-bold mb-6">To calculate ratings, we give our reviews categories the following weightings</h2>
//         </div>

//         <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
//           {/* Expert Rating with Stars */}
//           <div className="text-center lg:text-left">
//             <h3 className="text-2xl font-bold text-blue-600 mb-2">Expert Rating</h3>
//             <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
//               <div className="flex text-yellow-400 text-xl">
//                 {[1, 2, 3, 4, 5].map((star) => {
//                   const rating = parseFloat(casinoReviewData.expert_rating.score);
//                   if (star <= Math.floor(rating)) {
//                     // Full star
//                     return <FaStar key={star} />;
//                   } else if (star === Math.floor(rating) + 1 && rating % 1 >= 0.5) {
//                     // Half star
//                     return <FaStarHalfAlt key={star} />;
//                   } else {
//                     // Empty star
//                     return <FaRegStar key={star} className="text-gray-300" />;
//                   }
//                 })}
//               </div>
//               <span className="text-2xl font-bold">{casinoReviewData.expert_rating.score}/{casinoReviewData.expert_rating.out_of}</span>
//             </div>
//           </div>

//           {/* Pie Chart Visualization */}
//           <div className="flex-1 flex flex-col lg:flex-row items-center gap-8">
//             {/* Simple Pie Chart using CSS */}
//             <div className="relative w-64 h-64">
//               <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
//                 {/* Define colors for each segment */}
//                 <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#1e40af" strokeWidth="31.8" strokeDasharray="20 80" strokeDashoffset="0" />
//                 <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#10b981" strokeWidth="31.8" strokeDasharray="15 85" strokeDashoffset="-20" />
//                 <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#34d399" strokeWidth="31.8" strokeDasharray="15 85" strokeDashoffset="-35" />
//                 <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#f97316" strokeWidth="31.8" strokeDasharray="10 90" strokeDashoffset="-50" />
//                 <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#fbbf24" strokeWidth="31.8" strokeDasharray="10 90" strokeDashoffset="-60" />
//                 <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#8b5cf6" strokeWidth="31.8" strokeDasharray="15 85" strokeDashoffset="-70" />
//                 <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#3b82f6" strokeWidth="31.8" strokeDasharray="15 85" strokeDashoffset="-85" />
//               </svg>
              
//               {/* Center white circle */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 <div className="w-24 h-24 bg-white rounded-full"></div>
//               </div>
//             </div>

//             {/* Legend */}
//             <div className="space-y-3">
//               {casinoReviewData.expert_rating.categories.map((cat, i) => {
//                 const colors = ['#1e40af', '#10b981', '#34d399', '#f97316', '#fbbf24', '#8b5cf6', '#3b82f6'];
//                 return (
//                   <div key={i} className="flex items-center gap-3">
//                     <div 
//                       className="w-4 h-4 rounded-full" 
//                       style={{ backgroundColor: colors[i % colors.length] }}
//                     ></div>
//                     <span className="text-blue-600 font-semibold">{cat.weight}</span>
//                     <span className="text-gray-700">{cat.name}</span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Trust Section */}
//       <section className="mt-10">
//         <h2 className="text-2xl font-bold mb-6">Why trust Casino.org's reviews?</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {casinoReviewData.why_trust.map((item, i) => (
//             <div
//               key={i}
//               className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100"
//             >
//               <p className="text-2xl font-bold text-purple-700">{item.title}</p>
//               <p className="text-gray-600 text-sm mt-2">{item.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AllCasinoReviews;


import React from "react";
import { casinoReviewData } from "../Data/casinoReviewData"; // अपने path के अनुसार बदलें
import { FaCheckCircle, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import CasinoBonusesPage from "./CasinoBonusesPage"; // Adjust the path as needed

const AllCasinoReviews = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Heading */}
      <h1 className="text-3xl sm:text-4xl font-bold mb-6">
        Online casino reviews and ratings in 2025
      </h1>

      {/* Author Section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="/images/author.jpg" // author image path डालें
          alt={casinoReviewData.author.name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <div className="flex items-center gap-1">
            <span className="font-semibold text-purple-700">
              {casinoReviewData.author.name}
            </span>
            {casinoReviewData.author.avatar_verified && (
              <MdVerified className="text-green-500 text-lg" />
            )}
          </div>
          <p className="text-sm text-gray-500">
            {casinoReviewData.author.designation}
          </p>
        </div>
      </div>

      {/* Intro */}
      <p className="text-gray-700 mb-8">{casinoReviewData.intro}</p>

      {/* Inserted Top Rated Casinos Section */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-left">Our reviewers' top rated online casinos</h2>
        <CasinoBonusesPage />
      </section>

      {/* Review Criteria */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Our online casino review criteria</h2>
        <p className="text-gray-700 mb-6">{casinoReviewData.review_criteria.description}</p>

        <div className="space-y-8">
          {casinoReviewData.review_criteria.criteria_list.map((item, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}

          {casinoReviewData.review_criteria.extra_fields.map((item, index) => (
            <div key={`extra-${index}`} className="flex gap-6 items-start">
              {/* Icon Circle */}
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <FaCheckCircle className="text-white text-2xl" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-base leading-relaxed">{item.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Expert Rating */}
      <section className="mt-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">How our expert ratings are calculated</h2>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
            So now you know the features our experts expect to find at a top casino and the process they go through 
            to thoroughly test each one. Although these are all key in determining which casinos we'll recommend to 
            you, we realize that players value some a little more than others. Below is a breakdown of how each of 
            the seven review categories contributes to a casino's overall expert rating on our site.
          </p>
          <h2 className="text-2xl font-bold mb-6">To calculate ratings, we give our reviews categories the following weightings</h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Expert Rating with Stars */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-blue-600 mb-2">Expert Rating</h3>
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
              <div className="flex text-yellow-400 text-xl">
                {[1, 2, 3, 4, 5].map((star) => {
                  const rating = parseFloat(casinoReviewData.expert_rating.score);
                  if (star <= Math.floor(rating)) {
                    // Full star
                    return <FaStar key={star} />;
                  } else if (star === Math.floor(rating) + 1 && rating % 1 >= 0.5) {
                    // Half star
                    return <FaStarHalfAlt key={star} />;
                  } else {
                    // Empty star
                    return <FaRegStar key={star} className="text-gray-300" />;
                  }
                })}
              </div>
              <span className="text-2xl font-bold">{casinoReviewData.expert_rating.score}/{casinoReviewData.expert_rating.out_of}</span>
            </div>
          </div>

          {/* Pie Chart Visualization */}
          <div className="flex-1 flex flex-col lg:flex-row items-center gap-8">
            {/* Simple Pie Chart using CSS */}
            <div className="relative w-64 h-64">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Define colors for each segment */}
                <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#1e40af" strokeWidth="31.8" strokeDasharray="20 80" strokeDashoffset="0" />
                <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#10b981" strokeWidth="31.8" strokeDasharray="15 85" strokeDashoffset="-20" />
                <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#34d399" strokeWidth="31.8" strokeDasharray="15 85" strokeDashoffset="-35" />
                <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#f97316" strokeWidth="31.8" strokeDasharray="10 90" strokeDashoffset="-50" />
                <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#fbbf24" strokeWidth="31.8" strokeDasharray="10 90" strokeDashoffset="-60" />
                <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#8b5cf6" strokeWidth="31.8" strokeDasharray="15 85" strokeDashoffset="-70" />
                <circle cx="50" cy="50" r="15.9" fill="transparent" stroke="#3b82f6" strokeWidth="31.8" strokeDasharray="15 85" strokeDashoffset="-85" />
              </svg>
              
              {/* Center white circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white rounded-full"></div>
              </div>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {casinoReviewData.expert_rating.categories.map((cat, i) => {
                const colors = ['#1e40af', '#10b981', '#34d399', '#f97316', '#fbbf24', '#8b5cf6', '#3b82f6'];
                return (
                  <div key={i} className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: colors[i % colors.length] }}
                    ></div>
                    <span className="text-blue-600 font-semibold">{cat.weight}</span>
                    <span className="text-gray-700">{cat.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Section */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold mb-6">Why trust Casino.org's reviews?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {casinoReviewData.why_trust.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-6 text-center border border-gray-100"
            >
              <p className="text-2xl font-bold text-purple-700">{item.title}</p>
              <p className="text-gray-600 text-sm mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllCasinoReviews;