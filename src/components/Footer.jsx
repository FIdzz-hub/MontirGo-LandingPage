import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xl font-bold text-white">Montir<span className="text-[#4D77FF]">Go</span></span>
          <p className="text-sm text-slate-500 mt-1">© {new Date().getFullYear()} MontirGo. All rights reserved.</p>
        </div>
        <div className="flex gap-6 text-sm">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
          <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}