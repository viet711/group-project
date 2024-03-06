import React from 'react';

const BannerHome = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat pt-20 pb-20"
      style={{
        backgroundImage: "url('https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/slider/slide-fashion-02.webp')"
      }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-96 lg:items-center lg:px-48 lg:justify-end">
        <div className="max-w-5xl text-center">
          <div className="text-4xl font-bold leading-6 text-gray-800">
            Best Price This Year
          </div>
          <div className="mt-5 mb-5 text-sm leading-6 text-gray-600">
            eCommerce HTML Template
          </div>
          <button className="text-center mt-8 bg-teal-500 w-36 h-12 rounded-md animate-bounce">
            <p className="text-white font-bold text-sm">SHOP NOW</p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BannerHome;
