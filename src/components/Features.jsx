// import React from 'react';

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Mengapa Memilih MontirGo?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 text-[#4D77FF] font-bold">✓</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Mekanik Berpengalaman</h4>
                  <p className="text-slate-600">Semua montir mitra kami telah melewati sertifikasi ketat untuk menangani berbagai tipe mobil.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 text-[#4D77FF] font-bold">✓</div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Harga Transparan</h4>
                  <p className="text-slate-600">Estimasi biaya pengerjaan dan harga suku cadang tertera jelas di aplikasi sebelum pengerjaan dimulai.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#4D77FF] text-white p-8 md:p-12 rounded-3xl shadow-xl shadow-blue-100 space-y-4">
            <h3 className="text-2xl font-bold">Gabung Jadi Mitra Kami?</h3>
            <p className="text-blue-100 leading-relaxed">
              Dapatkan akses ke puluhan orderan perawatan otomotif setiap harinya langsung ke genggaman Anda. Gabung sebagai mekanik profesional MontirGo sekarang!
            </p>
            <button className="bg-white text-[#4D77FF] font-bold px-6 py-3 rounded-xl shadow-md hover:bg-blue-50 transition-colors">
              Daftar Jadi Montir
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}