

import React, { useState } from 'react';
import { FaInfoCircle, FaEnvelope, FaPhone, FaBullseye, FaAward, FaHeart, FaUsers } from 'react-icons/fa';
import { FooterInformation } from '../Data/FooterInformation';

const AboutUs = () => {
 const { aboutUs } = FooterInformation;
 const [activeSection, setActiveSection] = useState(0);
 
 const sectionIcons = [FaBullseye, FaAward, FaHeart, FaUsers];

 return (
   <div className="min-h-screen bg-white">
     {/* Header */}
     <div className="bg-white shadow-lg">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="text-center">
           <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFD700] rounded-full mb-6 shadow-xl">
             <FaInfoCircle className="text-3xl text-[#333333]" />
           </div>
           <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-6">
             {aboutUs.title}
           </h1>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
             {aboutUs.introduction}
           </p>
         </div>
       </div>
     </div>

     {/* Main Content */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <div className="grid lg:grid-cols-4 gap-8">
         {/* Sidebar */}
         <div className="lg:col-span-1">
           <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
             <h3 className="text-lg font-semibold text-gray-800 mb-4">Sections</h3>
             <div className="space-y-2">
               {aboutUs.sections.map((section, index) => {
                 const Icon = sectionIcons[index] || FaInfoCircle;
                 return (
                   <button
                     key={index}
                     onClick={() => setActiveSection(index)}
                     className={`w-full flex items-center p-3 rounded-xl transition text-left ${
                       activeSection === index
                         ? 'bg-[#FFD700] text-[#333333] shadow-lg'
                         : 'text-gray-600 hover:bg-[#FFC107] hover:text-[#333333]'
                     }`}
                     aria-current={activeSection === index ? 'true' : 'false'}
                   >
                     <Icon className="mr-3 text-sm" />
                     <span className="text-sm font-medium">{section.heading}</span>
                   </button>
                 );
               })}
             </div>
           </div>
         </div>

         {/* Content */}
         <div className="lg:col-span-3">
           <div className="space-y-6">
             {(() => {
               const section = aboutUs.sections[activeSection];
               const Icon = sectionIcons[activeSection] || FaInfoCircle;
               return (
                 <div
                   key={activeSection}
                   className="bg-white rounded-2xl p-8  hover:shadow-xl transition ring-2 ring-[#FFD700] shadow-2xl"
                 >
                   <div className="flex items-start space-x-4">
                     <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-[#FFD700] text-[#333333]">
                       <Icon />
                     </div>
                     <div className="flex-1">
                       <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.heading}</h2>
                       <p className="text-gray-600 leading-relaxed">{section.content}</p>
                     </div>
                   </div>
                 </div>
               );
             })()}
           </div>

           {/* Contact Section */}
           <div className="mt-12 bg-[#FFD700] rounded-2xl p-8 text-[#333333] shadow-2xl">
             <h2 className="text-2xl font-bold mb-6 flex items-center text-[#333333]">
               <FaPhone className="mr-3" />
               Contact Us
             </h2>
             <div className="grid md:grid-cols-2 gap-6">
               <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-[#FFC107] transition">
                 <FaEnvelope className="text-xl text-[#333333]" />
                 <div>
                   <p className="text-sm text-[#333333] opacity-90">Email</p>
                   <a href={`mailto:${aboutUs.contact.email}`} className="font-medium text-[#333333] hover:underline">
                     {aboutUs.contact.email}
                   </a>
                 </div>
               </div>
               <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-[#FFC107] transition">
                 <FaPhone className="text-xl text-[#333333]" />
                 <div>
                   <p className="text-sm text-[#333333] opacity-90">Phone</p>
                   <p className="font-medium text-[#333333]">{aboutUs.contact.phone}</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default AboutUs;