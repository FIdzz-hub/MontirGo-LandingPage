import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollTo = (id) => {
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#' + id;
    }
  };

  const handleDownload = () => {
    const apkFileName = "app-release.apk";

    const link = document.createElement('a');

    link.href = `/${apkFileName}`;
    link.download = apkFileName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-[#4D77FF]">Montir<span className="text-slate-900">Go</span></span>
        </Link>

        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
          <button onClick={() => scrollTo('hero')} className="hover:text-[#4D77FF] transition-colors">Home</button>
          <button onClick={() => scrollTo('services')} className="hover:text-[#4D77FF] transition-colors">Layanan</button>
          <button onClick={() => scrollTo('features')} className="hover:text-[#4D77FF] transition-colors">Keunggulan</button>
          <button onClick={() => scrollTo('Teams')} className="hover:text-[#4D77FF] transition-colors">Team</button>
        </div>

        {/* GANTI BAGIAN INI */}
        <div>
          <a
            target="_self"
            rel="noopener noreferrer"
          >
            <button
            onClick={handleDownload}
            className="bg-[#4D77FF] hover:bg-[#3b62e3] text-white px-6 py-2.5 rounded-full font-semibold shadow-md shadow-blue-200 transition-all inline-block transform hover:-translate-y-0.5 cursor-pointer"
            >
              Download Aplikasi
            </button>
          </a>
        </div>

      </div>
    </nav>
  );
}