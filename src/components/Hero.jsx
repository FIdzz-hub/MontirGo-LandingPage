export default function Hero() {

  const handleDownload = () => {
  const yakinDownload = window.confirm(
    "Apakah Anda yakin ingin mengunduh aplikasi MontirGo (.apk)?"
  );

  if (yakinDownload) {
    const apkFileName = "app-release.apk"; 

    const link = document.createElement('a');
    
    link.href = `/${apkFileName}`; 
    link.download = apkFileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
};

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
            {/* <span className="text-xs text-left block">
              Download Now<strong className="block text-sm text-white">App Store / Google Play</strong>
            </span> */}
            {/* <button
              onClick={handleDownload}
              className="bg-slate-900 hover:bg-slate-800 text-white p-3 rounded-xl flex items-center gap-3 transition-all duration-200 active:scale-95 shadow-md"
            >
              <span className="text-xs text-left block">
                Download Now
                <strong className="block text-sm text-white">App Store / Google Play</strong>
              </span>
            </button> */}
            <button
              onClick={handleDownload}
              className="bg-slate-900 hover:bg-slate-800 text-white font-medium px-6 py-3 rounded-xl flex items-center gap-2 transition-all duration-200 active:scale-95 shadow-md tracking-wide cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
              <span>Download Now</span>
            </button>
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