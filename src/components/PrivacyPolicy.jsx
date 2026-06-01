import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/hero" className="inline-flex items-center gap-2 text-[#4D77FF] font-semibold mb-8 hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
        <p className="text-slate-400 text-sm mb-10">Terakhir diperbarui: Juni 2025</p>
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">1. Informasi yang Kami Kumpulkan</h2>
            <p>Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, nomor telepon, alamat, dan data kendaraan saat mendaftar atau menggunakan layanan MontirGo.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">2. Penggunaan Informasi</h2>
            <p>Informasi yang dikumpulkan digunakan untuk memproses pemesanan, menghubungkan Anda dengan montir terdekat, meningkatkan layanan, serta mengirimkan notifikasi terkait pesanan Anda.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">3. Keamanan Data</h2>
            <p>Kami menerapkan standar keamanan industri untuk melindungi data pribadi Anda dari akses tidak sah, perubahan, pengungkapan, atau penghancuran.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">4. Berbagi Data</h2>
            <p>Kami tidak menjual atau menyewakan data pribadi Anda kepada pihak ketiga. Data hanya dibagikan kepada montir mitra yang menangani pesanan Anda.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">5. Perubahan Kebijakan</h2>
            <p>Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu. Perubahan akan diberitahukan melalui aplikasi atau email yang terdaftar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}