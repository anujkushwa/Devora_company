import React from "react";

const DevoraPage = () => {
  return (
    <div className="relative min-h-screen mt-10 bg-gradient-to-br rounded-xl from-[#1e1e2f] via-[#2f2f46] to-[#1a1a29] text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('https://transparenttextures.com/patterns/black-linen.png')] opacity-5" />
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-indigo-600/30 rounded-full blur-[100px] z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-pink-500/20 rounded-full blur-[100px] z-0" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="glassmorphism p-6 sm:p-10 rounded-3xl shadow-2xl border border-white/20 backdrop-blur-md bg-white/5">
          {/* Intro Section */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-indigo-300 text-center mb-6 drop-shadow">
            Welcome to <span className="italic text-white">Devora</span>
          </h1>
          <p className="text-center text-base sm:text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            Devora is your trusted digital partner, delivering enterprise-grade IT services, AI-integrated products, and beautifully crafted web applications to scale your business with confidence.
          </p>

          {/* Services Grid */}
          <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-left">
            {["Custom Web Development", "AI & Automation", "UI/UX Design", "Mobile App Development", "DevOps & Cloud", "Maintenance & Support"].map((title, idx) => (
              <div key={idx} className="bg-white/10 border border-white/20 p-5 sm:p-6 rounded-2xl hover:shadow-lg transition">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {title === "Custom Web Development" &&
                    "We create full-stack, scalable web platforms tailored to your business logic using modern frameworks like React, Next.js, Node.js, and PostgreSQL."}
                  {title === "AI & Automation" &&
                    "Enhance user experience and business efficiency with Gemini API, OpenAI, and ML-powered features."}
                  {title === "UI/UX Design" &&
                    "Design-first approach using Tailwind CSS, Figma prototypes, and smooth animations to ensure engaging interfaces."}
                  {title === "Mobile App Development" &&
                    "Native and cross-platform app development using React Native, Expo, and Flutter for high performance on mobile."}
                  {title === "DevOps & Cloud" &&
                    "CI/CD pipelines, Vercel, Railway, Netlify, and AWS integrations for fast, secure deployments."}
                  {title === "Maintenance & Support" &&
                    "From MVP to scaling — we handle updates, monitoring, backups, and offer monthly tech support."}
                </p>
              </div>
            ))}
          </div>

          {/* Extended CTA & Value Section */}
          <div className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Why Brands Choose Devora?</h2>
                <ul className="list-disc text-sm sm:text-base text-gray-300 pl-5 space-y-2">
                  <li>End-to-end digital solutions under one roof</li>
                  <li>Team of expert engineers, designers, and AI specialists</li>
                  <li>Cloud-native, DevOps-ready platforms</li>
                  <li>Proven success with 20+ startups and enterprises</li>
                  <li>Scalable architecture and security best practices</li>
                  <li>Transparent communication and timely delivery</li>
                </ul>
              </div>
              <div className="text-center lg:text-right">
                <img
                  src="https://miro.medium.com/v2/resize:fit:905/1*4x42M88ARSS1Cw_ika_1dA.png"
                  alt="Devora showcase"
                  className="w-full max-w-sm mx-auto lg:mx-0 rounded-xl shadow-xl"
                />
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <a
              href="#"
              className="inline-block w-full sm:w-auto text-center px-2 py-4 rounded bg-yellow-500 text-white font-semibold shadow hover:bg-yellow-400 transition"
            >
              Schedule Your Free Consultation →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevoraPage;
