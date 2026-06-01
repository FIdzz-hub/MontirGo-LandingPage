// import React from 'react';

const servicesData = [
  {
    title: 'TUNE-UP',
    desc: 'Pengembalian performa mesin agar kembali optimal, bertenaga, dan efisien.',
    img: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'CAR DIAGNOSTIC',
    desc: 'Pengecekan sistem kelistrikan dan sensor mesin menggunakan scanner OBD modern.',
    img: 'https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'TIRE CHANGE',
    desc: 'Layanan penggantian dan rotasi ban mobil darurat atau berkala langsung di lokasi.',
    img: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=500&auto=format&fit=crop'
  },
  {
    title: 'OIL SERVICE',
    desc: 'Penggantian oli mesin dan filter kualitas premium sesuai spesifikasi standar pabrikan.',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=500&auto=format&fit=crop'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Layanan Utama Kami</h2>
          <p className="text-slate-600">Nikmati kemudahan merawat kendaraan dengan opsi layanan home service terlengkap dari MontirGo.</p>
        </div>

        {/* Grid Card List */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col h-full">
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#4D77FF] transition-colors mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{service.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}