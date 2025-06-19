import React from 'react';
import DevoraPage from '../components/DevoraPage';

const About = () => {
  return (
    <section className="bg-white text-gray-800 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-indigo-500 leading-tight">
            Welcome to <span className="text-gray-900 italic">Devora</span>
          </h2>
          <p className="mt-4 text-sm text-gray-600 max-w-2xl mx-auto">
            A modern IT studio building scalable software, smart AI systems, and full-stack web applications — tailored for startups, businesses, and bold digital creators.
          </p>
        </div>


        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left: Image */}
          <div className="relative">
            <img
              src="https://cdn.sanity.io/images/uqxwe2qj/production/5820c6ae8c8fc9b28da1daecaf500f36b58c5a16-1086x612.png?q=80&auto=format&fit=clip&dpr=2&w=1086"
              alt="About AnujBrand"
              className="rounded-3xl shadow-2xl"
            />
            <div className="absolute top-4 right-4 bg-white px-3 py-1 text-sm font-semibold rounded-xl shadow text-indigo-600">
              Est. 2025
            </div>
          </div>

          {/* Right: Text */}
          <div>
            <h3 className="text-2xl font-semibold text-indigo-600 mb-4">Who We Are</h3>
            <p className="text-gray-700 text-md mb-4 leading-relaxed">
              <strong>Devora</strong> is a forward-thinking IT services and development company founded by <strong>Anuj Maurya</strong>, a passionate full-stack developer and technology enthusiast. With expertise across frontend, backend, cloud, and AI tools like React, Node.js, PostgreSQL, and Gemini API — we transform ideas into high-performance digital solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Focused on innovation, scalability, and clean design, Devora delivers intelligent, user-centric software that empowers businesses, startups, and creators to grow with confidence in the digital world.
            </p>
          </div>

        </div>

        {/* Vision & Mission Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-10">
          <div className="p-8 bg-gradient-to-tr from-indigo-50 to-white rounded-2xl shadow border border-indigo-100 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-700 mb-3">🌍 Our Vision</h4>
            <p className="text-gray-700 text-md leading-relaxed">
              To be recognized globally as a premium provider of innovative, AI-integrated, full-stack digital products.
            </p>
          </div>
          <div className="p-8 bg-gradient-to-tr from-indigo-50 to-white rounded-2xl shadow border border-indigo-100 hover:shadow-lg transition">
            <h4 className="text-xl font-semibold text-indigo-700 mb-3">🚀 Our Mission</h4>
            <p className="text-gray-700 text-md leading-relaxed">
              To build human-friendly, tech-empowered web apps with precision, creativity, and scalable architecture using open-source and cloud-first technologies.
            </p>
          </div>
        </div>

        {/* Optional: CTA */}
        <div className="mt-20 text-center">
          <a
            href="/contact"
            className="inline-block bg-red-400 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-400 transition"
          >
            Let’s Build Something Together
          </a>
        </div>
        <DevoraPage />
      </div>
    </section>
  );
};

export default About;
