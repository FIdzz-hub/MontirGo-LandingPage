import { Link } from 'react-router-dom';

export default function TermsOfService() {
  return (
    <section className="py-24 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-[#4D77FF] font-semibold mb-8 hover:underline">
          ← Back to Home
        </Link>
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
        <p className="text-slate-400 text-sm mb-10">Terakhir diperbarui: Juni 2025</p>
        <div className="space-y-8 text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">1. Penerimaan Syarat</h2>
            <p>Dengan menggunakan aplikasi MontirGo, Anda menyetujui syarat dan ketentuan yang berlaku. Jika tidak setuju, mohon hentikan penggunaan layanan kami.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">2. Layanan yang Disediakan</h2>
            <p>MontirGo menyediakan platform untuk menghubungkan pengguna dengan montir profesional. Kami tidak bertanggung jawab atas hasil pengerjaan yang menyimpang dari standar yang telah disepakati.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">3. Kewajiban Pengguna</h2>
            <p>Pengguna wajib memberikan informasi yang akurat, menjaga keamanan akun, dan tidak menyalahgunakan platform untuk tujuan yang melanggar hukum.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">4. Pembatalan dan Pengembalian Dana</h2>
            <p>Pembatalan pesanan dapat dilakukan sebelum montir berangkat tanpa biaya. Pengembalian dana untuk pembayaran yang sudah dilakukan diproses dalam 3-7 hari kerja.</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-800 mb-2">5. Perubahan Layanan</h2>
            <p>MontirGo berhak mengubah, menangguhkan, atau menghentikan layanan kapan saja dengan pemberitahuan sebelumnya kepada pengguna terdaftar.</p>
          </div>
        </div>
      </div>
    </section>
  );
}