// import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Konten Kiri */}
        <div className="space-y-6 text-center md:text-left">
          <div className="inline-block bg-blue-100/60 text-[#4D77FF] px-4 py-1.5 rounded-full text-sm font-semibold">
            ✨ Solusi Home Service Otomotif Terpercaya
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Servis Kendaraan Tanpa Keluar Rumah
          </h1>
          <p className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0">
            Montir profesional siap datang langsung ke lokasi Anda untuk melakukan maintenance, tune-up, hingga ganti oli secara transparan dan bergaransi.
          </p>
          
          {/* Download Badges (Template - Bisa diganti file SVG/PNG store asli) */}
          <div id="download" className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
            <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-lg">
              <span className="text-xs text-left block text-slate-400">GET IT ON <strong className="block text-sm text-white">Google Play</strong></span>
            </button>
            <button className="flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-lg">
              <span className="text-xs text-left block text-slate-400">Download on the <strong className="block text-sm text-white">App Store</strong></span>
            </button>
          </div>
        </div>

        {/* Konten Kanan (Mockup Gambar Aplikasi) */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 bg-[#4D77FF]/10 rounded-full filter blur-3xl max-w-md mx-auto"></div>
          {/* Gunakan template gambar yang rapi yang nantinya tinggal kamu ganti link src-nya */}
          <img 
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=800&auto=format&fit=crop" 
            alt="MontirGo App Mockup" 
            className="relative w-72 md:w-80 rounded-[40px] shadow-2xl border-[8px] border-slate-950 transform rotate-2 hover:rotate-0 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}