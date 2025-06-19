import React from 'react';
import {
  RocketLaunchIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  SparklesIcon,
  CloudIcon,
  ChartBarIcon,
  DevicePhoneMobileIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const features = [
  {
    name: "AI-Powered Insights",
    description:
      "Smart analysis using Gemini API to provide personalized feedback and question suggestions.",
    icon: SparklesIcon,
  },
  {
    name: "Security First",
    description:
      "Industry-grade security practices including authentication and encrypted data handling.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Fast & Reliable",
    description:
      "Optimized load times and 99.9% uptime for a smooth, uninterrupted experience.",
    icon: RocketLaunchIcon,
  },
  {
    name: "Cloud-Based Access",
    description:
      "Access your dashboard and mock sessions anywhere, anytime, with cloud sync.",
    icon: CloudIcon,
  },
  {
    name: "Full-Stack Expertise",
    description:
      "Built with React, Node, PostgreSQL & Tailwind for robust full-stack performance.",
    icon: CpuChipIcon,
  },
  {
    name: "Progress Tracking",
    description:
      "Track growth with intuitive dashboards and real-time analytics.",
    icon: ChartBarIcon,
  },
  {
    name: "Mobile Ready",
    description:
      "Fully responsive UI built for phones, tablets, and desktops.",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Custom Workflows",
    description:
      "Customize difficulty, duration, and topics to align with your goals.",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "Global Access",
    description:
      "Accessible worldwide with reliable delivery and cloud infrastructure.",
    icon: GlobeAltIcon,
  },
];

const Features = () => {
  return (
    <section className="bg-white py-15 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-indigo-500">
            Premium Features for Modern Development
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
            Devora brings a perfect blend of intelligent automation, global scalability, and seamless UI/UX to boost your productivity and innovation.
          </p>
        </div>

        {/* Lottie Animation */}
        <div className="flex justify-center mb-10">
          <DotLottieReact
            src="https://lottie.host/42afc955-362b-4928-8b50-b95b75650307/UVak8MSI6W.lottie"
            className="w-[300px] sm:w-[400px] md:w-[500px] h-auto"
            loop
            autoplay
          />
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start p-6 bg-gray-50 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >
              <div className="bg-indigo-100 text-indigo-700 p-3 rounded-xl mb-4">
                <feature.icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.name}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
