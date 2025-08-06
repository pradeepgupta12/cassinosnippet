


import { useState } from "react";
import { IoMail, IoCall, IoLocation, IoAdd, IoRemove } from "react-icons/io5";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
    country: "",
    agree: false,
  });

  const [openIndex, setOpenIndex] = useState(null); // For FAQ toggle

  const faqs = [
    {
      question: "How do I choose a safe online casino?",
      answer: "Look for licensing info, secure payment methods, and good reviews from trusted sources.",
    },
    {
      question: "What are wagering requirements?",
      answer: "They specify how many times you need to wager bonus money before withdrawing winnings.",
    },
    {
      question: "Can I play casino games for free?",
      answer: "Yes, many casinos offer demo versions of games for practice or fun without real money.",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Please agree to the privacy policy before submitting.");
      return;
    }
    console.log("Submitted form data:", formData);
    alert("Form submitted successfully!");
  };

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white text-black py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-yellow-500 mb-10">
          Contact Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6 text-center mb-12">
          <div>
            <IoMail className="text-yellow-500 text-2xl mx-auto mb-2" />
            <p>support@casinosite.com</p>
          </div>
          <div>
            <IoCall className="text-yellow-500 text-2xl mx-auto mb-2" />
            <p>+1 234 567 890</p>
          </div>
          <div>
            <IoLocation className="text-yellow-500 text-2xl mx-auto mb-2" />
            <p>Las Vegas, Nevada, USA</p>
          </div>
        </div>

        {/* Contact + FAQ Side by Side */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-[#f5f5f5] p-6 md:p-8 rounded-lg shadow space-y-6"
          >
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-400 bg-white text-black focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-400 bg-white text-black focus:outline-none"
              />
            </div>

            {/* Phone + Country */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="phone"
                placeholder="Phone (optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-400 bg-white text-black focus:outline-none"
              />
              <input
                type="text"
                name="country"
                placeholder="Country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-3 rounded border border-gray-400 bg-white text-black focus:outline-none"
              />
            </div>

            {/* Subject */}
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-400 bg-white text-black focus:outline-none"
            />

            {/* Message */}
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded border border-gray-400 bg-white text-black focus:outline-none"
            ></textarea>

            {/* Agreement */}
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="mt-1"
              />
              I agree to the{" "}
              <a href="/privacy" className="text-yellow-500 underline">
                Privacy Policy
              </a>
            </label>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded transition"
            >
              Submit
            </button>
          </form>

          {/* FAQ Section */}
          <div className="bg-[#f9f9f9] p-6 md:p-8 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-6 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-300 rounded">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center p-4 text-left font-medium text-black"
                  >
                    {faq.question}
                    {openIndex === index ? (
                      <IoRemove className="text-yellow-500" />
                    ) : (
                      <IoAdd className="text-yellow-500" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="p-4 pt-0 text-gray-700 text-sm">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}