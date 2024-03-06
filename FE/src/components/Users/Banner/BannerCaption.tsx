import React from 'react'

const BannerCaption = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat p-10 my-10 "
      style={{
        backgroundImage: "url('https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion2-full-m.webp')",
        backgroundPosition: " top",
        backgroundSize: "auto",
      }}
    >
      <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-96 lg:items-center lg:px-48 lg:justify-end  w-screen">
        <div className="max-w-5xl text-center">
          <div className="text-4xl font-bold leading-6 text-gray-800">
            The best trends  of summer 2020
          </div>
          <div className="mt-5 mb-5 text-sm leading-6 text-gray-600">
            eCommerce HTML Template
          </div>
          <button className="text-center mt-8 bg-teal-500 w-36 h-12 rounded-md animate-bounce">
            <p className="text-white font-bold text-sm">BUY NOW</p>
          </button>
        </div>
      </div>
    </div>
  );
};


export default BannerCaption