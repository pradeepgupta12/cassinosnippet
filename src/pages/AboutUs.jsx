import React, { useState } from 'react';
import { FaInfoCircle, FaEnvelope, FaPhone, FaBullseye, FaAward, FaHeart, FaUsers } from 'react-icons/fa';
import { FooterInformation } from '../Data/FooterInformation';

const AboutUs = () => {
 const { aboutUs } = FooterInformation;
 const [activeSection, setActiveSection] = useState(0);
 
 const sectionIcons = [FaBullseye, FaAward, FaHeart, FaUsers];

 return (
   <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
     {/* Header */}
     <div className="bg-white shadow-lg">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="text-center">
           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6 shadow-xl">
             <FaInfoCircle className="text-3xl text-white" />
           </div>
           <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
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
                     className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 ${
                       activeSection === index
                         ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                         : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                     }`}
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
             {aboutUs.sections.map((section, index) => {
               const Icon = sectionIcons[index] || FaInfoCircle;
               return (
                 <div
                   key={index}
                   className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ${
                     activeSection === index ? 'ring-2 ring-blue-500 shadow-2xl' : ''
                   }`}
                 >
                   <div className="flex items-start space-x-4">
                     <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                       activeSection === index 
                         ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white' 
                         : 'bg-gray-100 text-gray-600'
                     }`}>
                       <Icon />
                     </div>
                     <div className="flex-1">
                       <h2 className="text-2xl font-bold text-gray-800 mb-4">{section.heading}</h2>
                       <p className="text-gray-600 leading-relaxed">{section.content}</p>
                     </div>
                   </div>
                 </div>
               );
             })}
           </div>

           {/* Contact Section */}
           <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
             <h2 className="text-2xl font-bold mb-6 flex items-center">
               <FaPhone className="mr-3" />
               Contact Us
             </h2>
             <div className="grid md:grid-cols-2 gap-6">
               <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                 <FaEnvelope className="text-xl" />
                 <div>
                   <p className="text-sm opacity-90">Email</p>
                   <a href={`mailto:${aboutUs.contact.email}`} className="font-medium hover:underline">
                     {aboutUs.contact.email}
                   </a>
                 </div>
               </div>
               <div className="flex items-center space-x-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                 <FaPhone className="text-xl" />
                 <div>
                   <p className="text-sm opacity-90">Phone</p>
                   <p className="font-medium">{aboutUs.contact.phone}</p>
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