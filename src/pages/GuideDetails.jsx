


import React, { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { guidesData } from "../Data/guidesData";

const GuideDetails = () => {
  const { guideId } = useParams();
  const guide = guidesData.guides.find((g) => g.guideId === guideId);
  const similarGuides = guidesData.guides.filter((g) => g.guideId !== guideId);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [guideId]);

  if (!guide) {
    return (
      <div className="p-10 text-center text-red-500">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6">
          Guide Not Found
        </h2>
        <p className="text-gray-600">Sorry, we couldn't find the guide you're looking for.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-inter">
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
        {/* Left Column: Guide Content */}
        <div className="w-full lg:w-2/3">
          {/* Title and Meta */}
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2 leading-tight">
            {guide.title}
          </h1>
          <p className="text-sm text-gray-500 mb-6">
            {new Date().toLocaleDateString()} • 6–8 min read
          </p>

          {/* Hero Image */}
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full md:h-[400px] h-[250px] object-cover-contain rounded-xl mb-8 shadow-md"
          />

          {/* Intro / Description */}
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            {guide.description}
          </p>

          {/* Content Section */}
          <div className="space-y-12">
            {guide.steps.map((step) => (
              <div key={step.stepNumber}>
                <h2
                  id={`h-step-${step.stepNumber}`}
                  className="text-xl sm:text-2xl font-bold text-gray-800 mb-4"
                >
                  Step {step.stepNumber}: {step.title}
                </h2>
                <div className="grid grid-cols-[54px_1fr] gap-4 items-start">
                  <div className="h-[54px] w-[54px] rounded-xl flex items-center justify-center bg-yellow-400 text-gray-900 font-extrabold shadow-[0_8px_20px_rgba(255,196,0,0.25)]">
                    {step.stepNumber}
                  </div>
                  <div>
                    <p className="text-gray-700 leading-relaxed text-[16px]">
                      {step.content}
                    </p>
                    {step.points && (
                      <ul className="mt-3 list-disc pl-5 text-gray-700">
                        {step.points.map((point, index) => (
                          <li key={index}>{point}</li>
                        ))}
                      </ul>
                    )}
                    <div className="mt-3 flex gap-3 items-start bg-gray-100 border border-dashed border-gray-300 p-3.5 rounded-xl text-gray-700" role="note">
                      <strong>Pro tip:</strong> {step.proTip}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* FAQ */}
            <div id="faq" className="space-y-2.5">
              <h2 id="h-faq" className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                FAQ
              </h2>
              {guide.faq.map((item, index) => (
                <details key={index} className="bg-gray-100 border border-gray-300 rounded-xl p-3.5">
                  <summary className="cursor-pointer font-semibold">{item.question}</summary>
                  <p className="text-gray-700 mt-2">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          {/* Pager */}
          <div className="flex flex-col sm:flex-row justify-start gap-3 mt-6">
            <Link
              to="/all-guides"
              className="flex items-center gap-2 bg-gray-100 border border-gray-300 px-3.5 py-3 rounded-xl text-gray-900 hover:bg-gray-200"
            >
              <FaArrowLeft /> Back to Guides
            </Link>
          </div>
        </div>

        {/* Right Column: Ad and Similar Guides */}
        <div className="w-full lg:w-1/3">
          <div className="lg:sticky top-20 space-y-6">
            {/* Ad Section */}
            <div className="bg-white border border-gray-200 p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Sponsored</h3>
              <a
                href="https://your-affiliate-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-lg shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src="https://advertising.expedia.com/wp-content/uploads/2024/03/RF_Stocksy_txp5d066667Jyg300_Large_5091864-1024x1024.jpg"
                  alt="Ad"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </a>
            </div>

            {/* Similar Guides Section */}
            <div>
              <h3 className="text-lg font-semibold mb-2 text-gray-700">Similar Guides</h3>
              <div className="space-y-4 md:grid md:grid-cols-2 md:gap-4 md:space-y-0 lg:space-y-4 lg:grid-cols-1">
                {similarGuides.slice(0, 3).map((similarGuide) => (
                  <Link
                    key={similarGuide.guideId}
                    to={`/guides/${similarGuide.guideId}`}
                    className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg hover:border-yellow-400 transition-transform duration-300 transform hover:-translate-y-1 flex"
                  >
                    <img
                      src={similarGuide.image}
                      alt={`${similarGuide.title} image`}
                      className="w-30 h-24 object-cover rounded-l-lg"
                    />
                    <div className="p-3 flex-1">
                      <h4 className="text-sm font-semibold text-gray-900 mb-1">
                        {similarGuide.title.length > 30 ? `${similarGuide.title.slice(0, 30)}...` : similarGuide.title}
                      </h4>
                      <p className="text-xs text-gray-600">
                        {similarGuide.description.length > 50 ? `${similarGuide.description.slice(0, 50)}...` : similarGuide.description}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideDetails;