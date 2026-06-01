const cities = [
  { name: "Bandung", icon: "🏙️" },
  { name: "Jakarta", icon: "🌆" },
  { name: "Surabaya", icon: "🏢" },
  { name: "Medan", icon: "🌇" },
  { name: "Semarang", icon: "🏛️" },
  { name: "Yogyakarta", icon: "🏯" },
  { name: "Bekasi", icon: "🏘️" },
  { name: "Depok", icon: "🏙️" },
  { name: "Tangerang", icon: "🌃" },
  { name: "Bogor", icon: "🌿" },
  { name: "Makassar", icon: "🌊" },
  { name: "Palembang", icon: "🌉" },
];

export default function CoverageArea() {
  return (
    <section className="py-20 bg-slate-50" id="coverage">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Kota yang Kami Layani
        </h2>
        <p className="text-slate-500 mb-12 text-lg">
          MontirGo kini hadir di berbagai kota besar di Indonesia dan terus berkembang.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md hover:border-blue-200 transition-all duration-200"
            >
              <div className="text-3xl mb-2">{city.icon}</div>
              <p className="font-semibold text-slate-800">{city.name}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-slate-400 text-sm">
          Belum ada di kotamu? Tenang, kami terus ekspansi! 🚀
        </p>
      </div>
    </section>
  );
}