import React, { useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import GallerySection from '../components/GallerySection';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div data-aos="fade-right">
          <h1 className="text-2xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6">
            Crafting Scalable, Intelligent Web Solutions with a
            <span className="text-red-400 mx-3 italic">Modern Stack</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Building powerful, elegant digital products using full-stack technologies like React, Node.js, and AI.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-indigo-500 text-white font-semibold rounded-xl shadow hover:bg-indigo-600 transition"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-indigo-500 hover:text-indigo-500 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* Lottie Animation */}
        <div className="flex justify-center md:justify-end" data-aos="fade-left">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
            <DotLottieReact
              src="https://lottie.host/f7120432-fe79-4cde-8687-35344ca3f61a/a3A3Egfe4W.lottie"
              autoplay
              loop
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-lg">
            At <span className="text-indigo-600 italic font-medium">Nexora Digital</span>, we build more than apps. We build fast, scalable, and secure digital ecosystems powered by full-stack and AI.
          </p>

          {/* Features Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
            {[
              {
                title: '🔗 End-to-End Solutions',
                desc: 'From UI/UX to backend deployment — we handle your entire product pipeline under one roof.',
              },
              {
                title: '🚀 Fast & Performance Driven',
                desc: 'Ultra-optimized apps that load fast, work smoothly, and are fully mobile-ready.',
              },
              {
                title: '🧠 Smart AI Integration',
                desc: 'AI-enabled tools like interview simulators, chatbots, and data prediction using Gemini API.',
              },
              {
                title: '🛡️ Secure & Scalable',
                desc: 'Clean code, JWT security, scalable infrastructure, and API best practices.',
              },
              {
                title: '🎨 Premium Design System',
                desc: 'Sleek, intuitive, and fully responsive UIs crafted with Tailwind and Framer Motion.',
              },
              {
                title: '☁️ Cloud Native & DevOps Ready',
                desc: 'Instant deployment on Vercel, Netlify, Railway — all DevOps pipelines supported.',
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition p-6"
                data-aos="fade-up"
              >
                <h3 className="text-xl font-semibold text-red-400 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Trusted By Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Trusted by Startups & Founders</h3>
            <p className="text-gray-500 max-w-xl mx-auto text-sm sm:text-base">
              20+ brands have launched and scaled using our agile full-stack and cloud-native services.
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <GallerySection />
    </section>
  );
};

export default Home;
