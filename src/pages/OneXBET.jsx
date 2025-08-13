// import React from 'react';
// import { Star, StarHalf, User, Calendar, Gamepad2, Smartphone, CreditCard, Clock, Globe, Award, Phone, Mail, MessageCircle, HelpCircle, Check, X } from 'lucide-react';
// import { x1BET } from '../Data/x1BET';

// // Star Rating Component
// const StarRating = ({ rating }) => {
//   const fullStars = Math.floor(rating);
//   const hasHalfStar = rating % 1 !== 0;
//   const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

//   return (
//     <div className="flex items-center">
//       {[...Array(fullStars)].map((_, i) => (
//         <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
//       ))}
//       {hasHalfStar && <StarHalf className="w-5 h-5 text-orange-400 fill-current" />}
//       {[...Array(emptyStars)].map((_, i) => (
//         <Star key={i} className="w-5 h-5 text-gray-300" />
//       ))}
//       <span className="ml-2 text-lg font-semibold text-gray-900">{rating}</span>
//     </div>
//   );
// };

// const OneXBET = () => {
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-6 mb-6 text-white">
//         <div className="flex flex-col sm:flex-row justify-between items-start">
//           <div className="flex-1">
//             <h1 className="text-2xl sm:text-3xl font-bold mb-3">{x1BET.overview.tagline}</h1>
//             <p className="text-base mb-4 max-w-4xl">{x1BET.overview.description}</p>
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
//                 <User className="w-5 h-5 text-purple-600" />
//               </div>
//               <div>
//                 <p className="font-semibold text-sm">- {x1BET.overview.author}</p>
//                 <p className="text-xs opacity-90">{x1BET.overview.author_title}</p>
//               </div>
//             </div>
//           </div>
//           <div className="text-right mt-4 sm:mt-0">
//             <Star className="w-7 h-7 text-orange-400 fill-current inline-block mr-1" />
//             <span className="text-xl font-bold">4.4/5</span>
//           </div>
//         </div>
//       </section>

//       {/* Welcome Bonus Section */}
//       <section className="bg-white rounded-xl p-6 mb-6">
//         <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
//           <div className="flex items-center gap-3">
//             <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center">
//               <Award className="w-7 h-7 text-purple-600" />
//             </div>
//             <div>
//               <h2 className="text-lg font-bold text-gray-800">{x1BET.welcome_bonus.title}</h2>
//               <p className="text-xl font-bold text-blue-800">{x1BET.welcome_bonus.offer}</p>
//             </div>
//           </div>
//           <div className="flex flex-col items-start sm:items-end gap-3 w-full sm:w-auto">
//             <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg flex items-center gap-2 transition-colors w-full sm:w-auto">
//               Play Now
//               <Gamepad2 className="w-4 h-4" />
//             </button>
//             <div className="bg-orange-50 px-3 py-1 rounded-lg">
//               <p className="text-xs text-orange-700">{x1BET.welcome_bonus.recent_visitors}</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Overall Rating Section */}
//       <section className="mb-6">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold text-gray-800">Overall Rating</h2>
//           <div className="flex items-center">
//             <Star className="w-5 h-5 text-orange-400 fill-current mr-2" />
//             <span className="text-lg font-bold text-gray-900">4.4/5</span>
//           </div>
//         </div>
        
//         <div className="space-y-3">
//           {Object.entries(x1BET.overall_rating).map(([key, value]) => (
//             <div key={key} className="flex justify-between items-center py-2">
//               <h3 className="text-gray-700 capitalize font-medium">
//                 {key.replace('_', ' & ').replace(/\b\w/g, l => l.toUpperCase())}
//               </h3>
//               <StarRating rating={value} />
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Review Section */}
//       <section className="bg-white rounded-xl p-6 mb-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">{x1BET.review.title}</h2>
//         <div className="prose max-w-none">
//           {x1BET.review.content.split('\n\n').map((paragraph, index) => (
//             <p key={index} className="text-gray-700 mb-3 leading-relaxed">
//               {paragraph}
//             </p>
//           ))}
//         </div>
//       </section>

//       {/* Pros & Cons Section */}
//       <section className="mb-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
//               <Check className="w-5 h-5 text-green-600 mr-2" />
//               Pros
//             </h3>
//             <div className="space-y-2">
//               {x1BET.pros_cons.pros.map((pro, index) => (
//                 <div key={index} className="flex items-start gap-2">
//                   <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-700 text-sm">{pro}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
//               <X className="w-5 h-5 text-red-600 mr-2" />
//               Cons
//             </h3>
//             <div className="space-y-2">
//               {x1BET.pros_cons.cons.map((con, index) => (
//                 <div key={index} className="flex items-start gap-2">
//                   <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-700 text-sm">{con}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Details Section */}
//       <section className="bg-white rounded-xl p-6 mb-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">What you should remember about 1xBET</h2>
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//           <div className="space-y-3">
//             <div className="flex items-start gap-2">
//               <Award className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Casino Name:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.casino_name}</span>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-2">
//               <User className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Owner:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.owner}</span>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-2">
//               <Calendar className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Year Established:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.year_established}</span>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-2">
//               <Gamepad2 className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Number of Games:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.number_of_games}</span>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-2">
//               <Gamepad2 className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Games Offered:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.games_offered}</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="space-y-3">
//             <div className="flex items-start gap-2">
//               <Smartphone className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Compatible Devices:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.compatible_devices}</span>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-2">
//               <CreditCard className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Payout Percentage:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.payout_percentage}</span>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-2">
//               <Clock className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Payout Days:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.payout_days}</span>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-2">
//               <Globe className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Languages:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.languages}</span>
//               </div>
//             </div>
            
//             <div className="flex items-start gap-2">
//               <Award className="w-4 h-4 text-blue-600 mt-1" />
//               <div>
//                 <span className="font-medium text-gray-900 text-sm">Software Used:</span>
//                 <span className="ml-2 text-gray-700 text-sm">{x1BET.details.software_used}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* History Section */}
//       <section className="bg-white rounded-xl p-6 mb-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-3">{x1BET.history.title}</h2>
//         <p className="text-gray-700 mb-6 text-sm">{x1BET.history.description}</p>
//         <div className="space-y-4">
//           {x1BET.history.timeline.map((item, index) => (
//             <div key={index} className="flex items-start gap-3">
//               <div className="bg-purple-100 text-purple-800 font-bold rounded-full w-14 h-14 flex items-center justify-center text-xs flex-shrink-0">
//                 {item.year}
//               </div>
//               <p className="text-gray-700 pt-3 text-sm">{item.event}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Welcome Bonus Details */}
//       <section className="bg-white rounded-xl p-6 mb-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Breakdown of welcome bonus at 1xBET</h2>
//         <div className="space-y-3">
//           {Object.entries(x1BET.welcome_bonus_details).map(([key, value]) => (
//             <div key={key} className="flex justify-between items-start py-2">
//               <span className="font-medium text-gray-900 capitalize text-sm">
//                 {key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
//               </span>
//               <div className="text-right max-w-md">
//                 {Array.isArray(value) ? (
//                   <div className="space-y-1">
//                     {value.map((item, i) => (
//                       <div key={i} className="text-gray-700 text-sm">{item}</div>
//                     ))}
//                   </div>
//                 ) : (
//                   <span className="text-gray-700 text-sm">{value}</span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Other Bonuses */}
//       <section className="mb-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-4">Bonuses at 1xBET that will surprise you</h2>
//         <div className="space-y-4">
//           {x1BET.other_bonuses.map((bonus, index) => (
//             <div key={index} className="bg-white rounded-xl p-5">
//               <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
//                 <Check className="w-4 h-4 text-blue-600 mr-2" />
//                 {bonus.title}
//               </h3>
//               <p className="text-gray-700 leading-relaxed text-sm">{bonus.description}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Customer Service */}
//       <section className="bg-white rounded-xl p-6">
//         <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Service</h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
//           <div>
//             <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
//               <Check className="w-5 h-5 text-green-600 mr-2" />
//               The best about customer service
//             </h3>
//             <div className="space-y-2">
//               {x1BET.customer_service.strengths.map((strength, index) => (
//                 <div key={index} className="flex items-start gap-2">
//                   <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-700 text-sm">{strength}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-lg font-semibold text-orange-600 mb-3 flex items-center">
//               <X className="w-5 h-5 text-orange-600 mr-2" />
//               What could be improved
//             </h3>
//             <div className="space-y-2">
//               {x1BET.customer_service.improvements.map((improvement, index) => (
//                 <div key={index} className="flex items-start gap-2">
//                   <X className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
//                   <span className="text-gray-700 text-sm">{improvement}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="mb-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-3">Response times</h3>
//           <p className="text-gray-600 mb-3 text-sm">The following will shed light on the available methods of contacting customer support at 1xBET:</p>
//           <div className="space-y-2">
//             {Object.entries(x1BET.customer_service.response_times).map(([method, status]) => {
//               const isAvailable = status === 'Available';
//               const IconComponent = method === 'live_chat' ? MessageCircle : 
//                                    method === 'email' ? Mail : 
//                                    method === 'phone_whatsapp' ? Phone : HelpCircle;
              
//               return (
//                 <div key={method} className="flex items-center gap-2">
//                   <IconComponent className="w-4 h-4 text-gray-500" />
//                   <span className="font-medium text-gray-900 capitalize text-sm">
//                     {method.replace('_', ' / ').replace(/\b\w/g, l => l.toUpperCase())}:
//                   </span>
//                   <span className={`px-2 py-1 rounded text-xs ${
//                     isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
//                   }`}>
//                     {status}
//                   </span>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         <div>
//           <div className="flex items-center gap-2">
//             <HelpCircle className="w-4 h-4 text-gray-500" />
//             <span className="font-medium text-gray-900 text-sm">Frequently Asked Questions:</span>
//             <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
//               {x1BET.customer_service.faq}
//             </span>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OneXBET;

import React from 'react';
import { Star, StarHalf, User, Calendar, Gamepad2, Smartphone, CreditCard, Clock, Globe, Award, Phone, Mail, MessageCircle, HelpCircle, Check, X } from 'lucide-react';
import { x1BET } from '../Data/x1BET';

// Star Rating Component
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-orange-400 fill-current" />
      ))}
      {hasHalfStar && <StarHalf className="w-5 h-5 text-orange-400 fill-current" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-gray-300" />
      ))}
      <span className="ml-2 text-lg font-semibold text-gray-900">{rating}</span>
    </div>
  );
};

const OneXBET = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl p-6 mb-6 text-white">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold mb-3">{x1BET.overview.tagline}</h1>
            <p className="text-base mb-4 max-w-4xl">{x1BET.overview.description}</p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-sm">- {x1BET.overview.author}</p>
                <p className="text-xs opacity-90">{x1BET.overview.author_title}</p>
              </div>
            </div>
          </div>
          <div className="text-right mt-4 sm:mt-0">
            <Star className="w-7 h-7 text-orange-400 fill-current inline-block mr-1" />
            <span className="text-xl font-bold">4.4/5</span>
          </div>
        </div>
      </section>

      {/* Welcome Bonus Section */}
      <section className="bg-white rounded-xl p-6 mb-6">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center">
              <Award className="w-7 h-7 text-purple-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-800">{x1BET.welcome_bonus.title}</h2>
              <p className="text-xl font-bold text-blue-800">{x1BET.welcome_bonus.offer}</p>
            </div>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-3 w-full sm:w-auto">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-lg flex items-center gap-2 transition-colors w-full sm:w-auto">
              Play Now
              <Gamepad2 className="w-4 h-4" />
            </button>
            <div className="bg-orange-50 px-3 py-1 rounded-lg">
              <p className="text-xs text-orange-700">{x1BET.welcome_bonus.recent_visitors}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overall Rating Section */}
      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">Overall Rating</h2>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-orange-400 fill-current mr-2" />
            <span className="text-lg font-bold text-gray-900">4.4/5</span>
          </div>
        </div>
        
        <div className="space-y-3">
          {Object.entries(x1BET.overall_rating).map(([key, value]) => (
            <div key={key} className="flex justify-between items-center py-2">
              <h3 className="text-gray-700 capitalize font-medium">
                {key.replace('_', ' & ').replace(/\b\w/g, l => l.toUpperCase())}
              </h3>
              <StarRating rating={value} />
            </div>
          ))}
        </div>
      </section>

      {/* Review Section */}
      <section className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">{x1BET.review.title}</h2>
        <div className="prose max-w-none">
          {x1BET.review.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-700 mb-3 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Pros & Cons Section */}
      <section className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              Pros
            </h3>
            <div className="space-y-2">
              {x1BET.pros_cons.pros.map((pro, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{pro}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
              <X className="w-5 h-5 text-red-600 mr-2" />
              Cons
            </h3>
            <div className="space-y-2">
              {x1BET.pros_cons.cons.map((con, index) => (
                <div key={index} className="flex items-start gap-2">
                  <X className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{con}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">What you should remember about 1xBET</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Casino Name:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.casino_name}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <User className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Owner:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.owner}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Calendar className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Year Established:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.year_established}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Gamepad2 className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Number of Games:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.number_of_games}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Gamepad2 className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Games Offered:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.games_offered}</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Smartphone className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Compatible Devices:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.compatible_devices}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <CreditCard className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Payout Percentage:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.payout_percentage}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Payout Days:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.payout_days}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Globe className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Languages:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.languages}</span>
              </div>
            </div>
            
            <div className="flex items-start gap-2">
              <Award className="w-4 h-4 text-blue-600 mt-1" />
              <div>
                <span className="font-medium text-gray-900 text-sm">Software Used:</span>
                <span className="ml-2 text-gray-700 text-sm">{x1BET.details.software_used}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-3">{x1BET.history.title}</h2>
        <p className="text-gray-700 mb-6 text-sm">{x1BET.history.description}</p>
        <div className="space-y-4">
          {x1BET.history.timeline.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className={`bg-purple-100 text-purple-800 font-bold rounded-full flex items-center justify-center text-xs flex-shrink-0 ${item.year.length > 4 ? 'w-20 h-14' : 'w-14 h-14'}`}>
                <span className="text-center leading-tight px-2">{item.year}</span>
              </div>
              <p className="text-gray-700 pt-3 text-sm">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Welcome Bonus Details */}
      <section className="bg-white rounded-xl p-6 mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Breakdown of welcome bonus at 1xBET</h2>
        <div className="space-y-3">
          {Object.entries(x1BET.welcome_bonus_details).map(([key, value]) => (
            <div key={key} className="flex justify-between items-start py-2">
              <span className="font-medium text-gray-900 capitalize text-sm">
                {key.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
              </span>
              <div className="text-right max-w-md">
                {Array.isArray(value) ? (
                  <div className="space-y-1">
                    {value.map((item, i) => (
                      <div key={i} className="text-gray-700 text-sm">{item}</div>
                    ))}
                  </div>
                ) : (
                  <span className="text-gray-700 text-sm">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Other Bonuses */}
      <section className="mb-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Bonuses at 1xBET that will surprise you</h2>
        <div className="space-y-4">
          {x1BET.other_bonuses.map((bonus, index) => (
            <div key={index} className="bg-white rounded-xl p-5">
              <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                <Check className="w-4 h-4 text-blue-600 mr-2" />
                {bonus.title}
              </h3>
              <p className="text-gray-700 leading-relaxed text-sm">{bonus.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Service */}
      <section className="bg-white rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Customer Service</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="text-lg font-semibold text-green-700 mb-3 flex items-center">
              <Check className="w-5 h-5 text-green-600 mr-2" />
              The best about customer service
            </h3>
            <div className="space-y-2">
              {x1BET.customer_service.strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{strength}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-orange-600 mb-3 flex items-center">
              <X className="w-5 h-5 text-orange-600 mr-2" />
              What could be improved
            </h3>
            <div className="space-y-2">
              {x1BET.customer_service.improvements.map((improvement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <X className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{improvement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Response times</h3>
          <p className="text-gray-600 mb-3 text-sm">The following will shed light on the available methods of contacting customer support at 1xBET:</p>
          <div className="space-y-2">
            {Object.entries(x1BET.customer_service.response_times).map(([method, status]) => {
              const isAvailable = status === 'Available';
              const IconComponent = method === 'live_chat' ? MessageCircle : 
                                   method === 'email' ? Mail : 
                                   method === 'phone_whatsapp' ? Phone : HelpCircle;
              
              return (
                <div key={method} className="flex items-center gap-2">
                  <IconComponent className="w-4 h-4 text-gray-500" />
                  <span className="font-medium text-gray-900 capitalize text-sm">
                    {method.replace('_', ' / ').replace(/\b\w/g, l => l.toUpperCase())}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    isAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {status}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-gray-500" />
            <span className="font-medium text-gray-900 text-sm">Frequently Asked Questions:</span>
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
              {x1BET.customer_service.faq}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OneXBET;