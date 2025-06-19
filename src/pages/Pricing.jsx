import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const plans = [
  {
    name: "Starter",
    price: "₹0",
    subtitle: "Perfect for beginners",
    features: [
      "1 Interview / Month",
      "Basic Interview Questions",
      "Access to Dashboard",
      "Community Access",
      "Email Support (Limited)",
    ],
    color: "border-gray-300 bg-white text-gray-800",
    button: "bg-gray-800 text-white hover:bg-gray-900",
  },
  {
    name: "Pro",
    price: "₹499",
    subtitle: "For serious candidates",
    features: [
      "5 AI Interviews / Month",
      "Advanced Tech Q&A",
      "AI-Powered Feedback",
      "Detailed Performance Reports",
      "Priority Email Support",
      "Resume Scan (1/month)",
    ],
    color: "border-indigo-500 bg-indigo-50 text-indigo-900",
    button: "bg-indigo-600 text-white hover:bg-indigo-700",
  },
  {
    name: "Premium",
    price: "₹999",
    subtitle: "For job-ready professionals",
    features: [
      "Unlimited Mock Interviews",
      "Real-time AI Analysis",
      "Live Dashboard & Analytics",
      "Unlimited Resume Review",
      "1:1 Mentorship Sessions",
      "Exclusive Access to Webinars",
      "24/7 Priority Support",
    ],
    color: "border-yellow-500 bg-yellow-50 text-yellow-900",
    button: "bg-yellow-500 text-white hover:bg-yellow-600",
  },
];

const Pricing = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Flexible Pricing for Every Stage</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
          Whether you're just starting or aiming for your dream job, choose a plan that fits your journey. Upgrade anytime.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative z-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border-2 ${plan.color} rounded-3xl shadow-lg p-8 flex flex-col justify-between hover:scale-[1.02] transition duration-300`}
          >
            <div>
              <h3 className="text-2xl font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-6 italic">{plan.subtitle}</p>
              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>
              <ul className="space-y-3 mb-8 text-left">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm">
                    <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button className={`w-full py-3 mt-auto rounded-xl font-semibold transition ${plan.button}`}>
              {plan.name === "Starter" ? "Get Started" : "Upgrade Now"}
            </button>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="relative z-10 mt-20 text-center">
        <h3 className="text-xl font-medium text-gray-800 mb-2">Not sure which plan suits you?</h3>
        <p className="text-gray-600 mb-4">Book a free consultation and we’ll guide you through the right choice.</p>
        <a
          href="#"
          className="inline-block px-8 py-3 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
        >
          Book a Demo Call →
        </a>
      </div>
    </section>
  );
};

export default Pricing;
