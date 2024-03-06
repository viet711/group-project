import React from 'react';

const BannerCategory = () => {
  return (
    <div className="flex justify-between m-10 gap-6">
      <a href="category.html" className="w-1/2 relative overflow-hidden group">
        <div className="aspect-w-3 aspect-h-4 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300">
          <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion-2-02.webp" data-src="images/skins/fashion/banner-fashion-2-02.webp" className="fade-up ls-is-cached lazyloaded w-full h-full" alt="Banner" />
          <div className="foxic-loader"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <h3 className="text-white text-lg font-bold">Accessories</h3>
          <h4 className="text-white text-sm">The Best Look Anywhere</h4>
        </div>
      </a>

      <a href="category.html" className="w-1/2 relative overflow-hidden group">
        <div className="aspect-w-3 aspect-h-4 bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300">
          <img src="https://big-skins.com/frontend/foxic-html-demo/images/skins/fashion/banner-fashion-2-04.webp" data-src="images/skins/fashion/banner-fashion-2-04.webp" className="fade-up ls-is-cached lazyloaded w-full h-full" alt="Banner" />
          <div className="foxic-loader"></div>
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
          <h3 className="text-white text-lg font-bold">Fashion</h3>
          <h4 className="text-white text-sm">Live According to Fashion</h4>
        </div>
      </a>
    </div>
  );
};

export default BannerCategory;
