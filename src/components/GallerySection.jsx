import React from "react";

const images = [
  "https://k2space.imgix.net/app/uploads/2023/06/Criteo-New-York-Office-Design.jpg?auto=format&fit=max&w=5000&q=90",
  "https://k2space.imgix.net/app/uploads/2023/06/K2-Criteo-Office-Curator-LARGE-102-scaled.jpg?auto=format&fit=max&w=5000&q=90",
  "https://officesnapshots.com/wp-content/uploads/2021/05/boston-dynamics-offices-waltham-1-700x420.jpg",
  "https://cdn.prod.website-files.com/5fa88bfd6639f67f744775c3/6050f327ccf02954763b01e2_698x470xSydney-Tech-Companies-Jayride.jpg.pagespeed.ic.GNsgiWnVD2.jpeg",
  "https://www.coxblue.com/wp-content/uploads/2019/02/technology-company.jpg",
  "https://i.pinimg.com/736x/c8/8c/a5/c88ca5e6a5e5e77809e8228d442f3503.jpg",
];

const GallerySection = () => {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Devora <span className="text-indigo-600 italic">Gallery</span>
          </h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            A glimpse into our world — culture, creativity, and code in motion.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl shadow-md border border-gray-200"
            >
              <img
                src={src}
                alt={`Devora gallery ${idx + 1}`}
                className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-lg font-semibold tracking-wide">
                Devora Work #{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
