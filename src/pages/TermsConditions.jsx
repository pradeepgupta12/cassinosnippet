



// import React, { useState } from 'react';
// import { FaFileContract, FaGavel, FaUserCheck, FaExclamationTriangle, FaShieldAlt, FaHandshake, FaBan, FaInfoCircle } from 'react-icons/fa';
// import { FooterInformation } from '../Data/FooterInformation';

// const TermsConditions = () => {
//  const { termsConditions } = FooterInformation;
//  const [activeSection, setActiveSection] = useState(0);
 
//  const sectionIcons = [FaUserCheck, FaHandshake, FaExclamationTriangle, FaBan, FaShieldAlt, FaGavel, FaInfoCircle];

//  return (
//    <div className="min-h-screen bg-white">
//      {/* Header */}
//      <div className="bg-white shadow-lg">
//        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//          <div className="text-center">
//            <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFD700] rounded-full mb-6 shadow-xl">
//              <FaFileContract className="text-3xl text-[#333333]" />
//            </div>
//            <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-4">
//              {termsConditions.title}
//            </h1>
//            <div className="inline-block bg-gray-100 px-4 py-2 rounded-full mb-6">
//              <p className="text-sm text-gray-600">Last Updated: {termsConditions.lastUpdated}</p>
//            </div>
//            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
//              {termsConditions.introduction}
//            </p>
//          </div>
//        </div>
//      </div>

//      {/* Important Notice */}
//      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-8">
//        <div className="bg-[#FFD700] border border-[#FFD700] rounded-2xl p-6 shadow-lg">
//          <div className="flex items-center">
//            <FaExclamationTriangle className="text-[#333333] text-2xl mr-4 flex-shrink-0" />
//            <div>
//              <h3 className="font-semibold text-[#333333] mb-1">Important Legal Notice</h3>
//              <p className="text-[#333333] text-sm">
//                By using our services, you agree to be bound by these terms and conditions. Please read them carefully.
//              </p>
//            </div>
//          </div>
//        </div>
//      </div>

//      {/* Main Content */}
//      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
//        <div className="grid lg:grid-cols-4 gap-8">
//          {/* Sidebar */}
//          <div className="lg:col-span-1">
//            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
//              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                <FaFileContract className="mr-2 text-[#FFD700]" />
//                Sections
//              </h3>
//              <div className="space-y-2">
//                {termsConditions.sections.map((section, index) => {
//                  const Icon = sectionIcons[index] || FaFileContract;
//                  return (
//                    <button
//                      key={index}
//                      onClick={() => setActiveSection(index)}
//                      className={`w-full flex items-center p-3 rounded-xl transition text-left ${
//                        activeSection === index
//                          ? 'bg-[#FFD700] text-[#333333] shadow-lg'
//                          : 'text-gray-600 hover:bg-[#FFC107] hover:text-[#333333]'
//                      }`}
//                    >
//                      <Icon className="mr-3 text-sm flex-shrink-0" />
//                      <span className="text-sm font-medium truncate">{section.heading}</span>
//                    </button>
//                  );
//                })}
//              </div>
//            </div>
//          </div>

//          {/* Content */}
//          <div className="lg:col-span-3">
//            <div className="space-y-6">
//              {termsConditions.sections.map((section, index) => {
//                const Icon = sectionIcons[index] || FaFileContract;
//                return (
//                  <div
//                    key={index}
//                    className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition ${
//                      activeSection === index ? 'ring-2 ring-[#FFD700] shadow-2xl' : ''
//                    }`}
//                  >
//                    <div className="flex items-start space-x-4">
//                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
//                        activeSection === index 
//                          ? 'bg-[#FFD700] text-[#333333]' 
//                          : 'bg-gray-100 text-gray-600'
//                      }`}>
//                        <Icon />
//                      </div>
//                      <div className="flex-1">
//                        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
//                          {section.heading}
//                          <span className="ml-3 text-sm font-normal bg-gray-100 px-3 py-1 rounded-full text-gray-600">
//                            {index + 1}
//                          </span>
//                        </h2>
//                        <div className="text-gray-600 leading-relaxed prose prose-sm max-w-none">
//                          {section.content.split('\n').map((paragraph, pIndex) => (
//                            paragraph.trim() && (
//                              <p key={pIndex} className="mb-3">
//                                {paragraph}
//                              </p>
//                            )
//                          ))}
//                        </div>
//                      </div>
//                    </div>
//                  </div>
//                );
//              })}
//            </div>

//            {/* Legal Footer */}
//            <div className="mt-12 bg-[#FFD700] rounded-2xl p-8 text-[#333333] shadow-2xl">
//              <div className="text-center">
//                <FaGavel className="text-4xl mx-auto mb-4 text-[#333333] opacity-90" />
//                <h3 className="text-2xl font-bold text-[#333333] mb-3">Legal Compliance</h3>
//                <p className="text-lg text-[#333333] opacity-90 mb-6">
//                  These terms are legally binding and govern your use of our services.
//                </p>
//                <div className="grid md:grid-cols-3 gap-4 text-center">
//                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-[#FFC107] transition">
//                    <FaFileContract className="text-2xl mx-auto mb-2 text-[#333333]" />
//                    <p className="font-medium text-[#333333]">Binding Agreement</p>
//                  </div>
//                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-[#FFC107] transition">
//                    <FaShieldAlt className="text-2xl mx-auto mb-2 text-[#333333]" />
//                    <p className="font-medium text-[#333333]">Your Rights Protected</p>
//                  </div>
//                  <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-[#FFC107] transition">
//                    <FaGavel className="text-2xl mx-auto mb-2 text-[#333333]" />
//                    <p className="font-medium text-[#333333]">Legally Compliant</p>
//                  </div>
//                </div>
               
//                <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-[#FFC107] transition">
//                  <p className="text-sm text-[#333333] opacity-90">
//                    <FaInfoCircle className="inline mr-2" />
//                    If you have any questions about these terms, please contact our legal team.
//                  </p>
//                </div>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
// };

// export default TermsConditions;



import React, { useState } from 'react';
import { FaFileContract, FaGavel, FaUserCheck, FaExclamationTriangle, FaShieldAlt, FaHandshake, FaBan, FaInfoCircle } from 'react-icons/fa';
import { FooterInformation } from '../Data/FooterInformation';

const TermsConditions = () => {
 const { termsConditions } = FooterInformation;
 const [activeSection, setActiveSection] = useState(0);
 
 const sectionIcons = [FaUserCheck, FaHandshake, FaExclamationTriangle, FaBan, FaShieldAlt, FaGavel, FaInfoCircle];

 return (
   <div className="min-h-screen bg-white">
     {/* Header */}
     <div className="bg-white shadow-lg">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
         <div className="text-center">
           <div className="inline-flex items-center justify-center w-20 h-20 bg-[#FFD700] rounded-full mb-6 shadow-xl">
             <FaFileContract className="text-3xl text-[#333333]" />
           </div>
           <h1 className="text-4xl sm:text-5xl font-bold text-[#333333] mb-4">
             {termsConditions.title}
           </h1>
           <div className="inline-block bg-gray-100 px-4 py-2 rounded-full mb-6">
             <p className="text-sm text-gray-600">Last Updated: {termsConditions.lastUpdated}</p>
           </div>
           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
             {termsConditions.introduction}
           </p>
         </div>
       </div>
     </div>

     {/* Important Notice */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-8">
       <div className="bg-[#FFD700] border border-[#FFD700] rounded-2xl p-6 shadow-lg">
         <div className="flex items-center">
           <FaExclamationTriangle className="text-[#333333] text-2xl mr-4 flex-shrink-0" />
           <div>
             <h3 className="font-semibold text-[#333333] mb-1">Important Legal Notice</h3>
             <p className="text-[#333333] text-sm">
               By using our services, you agree to be bound by these terms and conditions. Please read them carefully.
             </p>
           </div>
         </div>
       </div>
     </div>

     {/* Main Content */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
       <div className="grid lg:grid-cols-4 gap-8">
         {/* Sidebar */}
         <div className="lg:col-span-1">
           <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-8">
             <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
               <FaFileContract className="mr-2 text-[#FFD700]" />
               Sections
             </h3>
             <div className="space-y-2">
               {termsConditions.sections.map((section, index) => {
                 const Icon = sectionIcons[index] || FaFileContract;
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
                     <Icon className="mr-3 text-sm flex-shrink-0" />
                     <span className="text-sm font-medium truncate">{section.heading}</span>
                   </button>
                 );
               })}
             </div>
           </div>
         </div>

         {/* Content */}
         <div className="lg:col-span-3 pt-0 mt-0">
           <div className="space-y-6">
             {(() => {
               const section = termsConditions.sections[activeSection];
               const Icon = sectionIcons[activeSection] || FaFileContract;
               return (
                 <div
                   key={activeSection}
                   className="bg-white rounded-2xl p-8  hover:shadow-xl transition ring-2 ring-[#FFD700] shadow-2xl"
                 >
                   <div className="flex items-start space-x-4">
                     <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#FFD700] text-[#333333]">
                       <Icon />
                     </div>
                     <div className="flex-1">
                       <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                         {section.heading}
                         <span className="ml-3 text-sm font-normal bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                           {activeSection + 1}
                         </span>
                       </h2>
                       <div className="text-gray-600 leading-relaxed prose prose-sm max-w-none">
                         {section.content.split('\n').map((paragraph, pIndex) => (
                           paragraph.trim() && (
                             <p key={pIndex} className="mb-3">
                               {paragraph}
                             </p>
                           )
                         ))}
                       </div>
                     </div>
                   </div>
                 </div>
               );
             })()}
           </div>

           {/* Legal Footer */}
           <div className="mt-12 bg-[#FFD700] rounded-2xl p-8 text-[#333333] shadow-2xl">
             <div className="text-center">
               <FaGavel className="text-4xl mx-auto mb-4 text-[#333333] opacity-90" />
               <h3 className="text-2xl font-bold text-[#333333] mb-3">Legal Compliance</h3>
               <p className="text-lg text-[#333333] opacity-90 mb-6">
                 These terms are legally binding and govern your use of our services.
               </p>
               <div className="grid md:grid-cols-3 gap-4 text-center">
                 <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-[#FFC107] transition">
                   <FaFileContract className="text-2xl mx-auto mb-2 text-[#333333]" />
                   <p className="font-medium text-[#333333]">Binding Agreement</p>
                 </div>
                 <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-[#FFC107] transition">
                   <FaShieldAlt className="text-2xl mx-auto mb-2 text-[#333333]" />
                   <p className="font-medium text-[#333333]">Your Rights Protected</p>
                 </div>
                 <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm hover:bg-[#FFC107] transition">
                   <FaGavel className="text-2xl mx-auto mb-2 text-[#333333]" />
                   <p className="font-medium text-[#333333]">Legally Compliant</p>
                 </div>
               </div>
               <div className="mt-6 p-4 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-[#FFC107] transition">
                 <p className="text-sm text-[#333333] opacity-90">
                   <FaInfoCircle className="inline mr-2" />
                   If you have any questions about these terms, please contact our legal team.
                 </p>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 );
};

export default TermsConditions;
