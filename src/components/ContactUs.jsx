import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-[#4D77FF] font-semibold mb-8 hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-2 text-center">Hubungi Kami</h1>
        <p className="text-slate-500 text-center mb-10">Ada pertanyaan atau kendala? Kami siap membantu Anda.</p>

        {sent ? (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="text-xl font-bold text-slate-800 mb-1">Pesan Terkirim!</h3>
            <p className="text-slate-500">Tim kami akan menghubungi Anda segera melalui email.</p>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Nama</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Nama lengkap kamu"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email@kamu.com"
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1">Pesan</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tulis pesanmu di sini..."
                className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
              />
            </div>
            <button
              onClick={handleSubmit}
              className="w-full bg-[#4D77FF] text-white font-bold py-3 rounded-xl hover:bg-blue-600 transition-colors"
            >
              Kirim Pesan
            </button>
          </div>
        )}

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <div className="text-2xl mb-2">📧</div>
            <p className="text-sm font-semibold text-slate-700">Email</p>
            <p className="text-xs text-slate-500 mt-1">support@montirgo.id</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <div className="text-2xl mb-2">📱</div>
            <p className="text-sm font-semibold text-slate-700">WhatsApp</p>
            <p className="text-xs text-slate-500 mt-1">+62 812-3456-7890</p>
          </div>
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
            <div className="text-2xl mb-2">📍</div>
            <p className="text-sm font-semibold text-slate-700">Kantor</p>
            <p className="text-xs text-slate-500 mt-1">Bandung, Jawa Barat</p>
          </div>
        </div>
      </div>
    </section>
  );
}