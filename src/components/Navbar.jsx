// import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#4D77FF]">Montir<span className="text-slate-900">Go</span></span>
        </div>

        {/* Menu Navigasi */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <a href="#hero" className="hover:text-[#4D77FF] transition-colors">Home</a>
          <a href="#services" className="hover:text-[#4D77FF] transition-colors">Layanan</a>
          <a href="#features" className="hover:text-[#4D77FF] transition-colors">Keunggulan</a>
        </div>

        {/* CTA Button */}
        <div>
          <a 
            href="#download" 
            className="bg-[#4D77FF] hover:bg-[#3b62e3] text-white px-6 py-2.5 rounded-full font-semibold shadow-md shadow-blue-200 transition-all transform hover:-translate-y-0.5"
          >
            Download Aplikasi
          </a>
        </div>
      </div>
    </nav>
  );
}