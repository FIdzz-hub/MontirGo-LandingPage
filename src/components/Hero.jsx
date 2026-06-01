export default function Hero() {
  return (
    <section id="hero" className="pt-32 pb-20 bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <div
            className="inline-block bg-blue-100/60 text-[#4D77FF] px-4 py-1.5 rounded-full text-sm font-semibold"
            data-aos="fade-down"
            data-aos-duration="600"
          >
            ✨ Solusi Home Service Otomotif Terpercaya
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="100"
          >
            Servis Kendaraan Tanpa Keluar Rumah
          </h1>
          <p
            className="text-lg text-slate-600 max-w-xl mx-auto md:mx-0"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="200"
          >
            Montir profesional siap datang langsung ke lokasi Anda untuk melakukan maintenance, tune-up, hingga ganti oli secara transparan dan bergaransi.
          </p>
          <a
            href="https://drive.google.com/file/d/1hA4jIv_AI7jQxjGHEbskSTRlunX-l5hk/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-slate-900 text-white px-6 py-3 rounded-xl hover:bg-slate-800 transition-all shadow-lg"
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-delay="300"
          >
            <span className="text-xs text-left block">
              Download on the <strong className="block text-sm text-white">App Store / Google Play</strong>
            </span>
          </a>
        </div>
        <div
          className="relative flex justify-center"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="200"
        >
          <div className="absolute inset-0 bg-[#4D77FF]/10 rounded-full filter blur-3xl max-w-md mx-auto"></div>
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