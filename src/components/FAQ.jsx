import { useState } from "react";

const faqs = [
  {
    question: "Apakah montir yang datang sudah tersertifikasi?",
    answer: "Ya, semua montir mitra MontirGo telah melewati proses seleksi dan sertifikasi ketat sebelum bergabung.",
  },
  {
    question: "Berapa lama waktu tunggu setelah pesan?",
    answer: "Montir biasanya tiba dalam 30–60 menit setelah pemesanan dikonfirmasi, tergantung lokasi dan ketersediaan montir.",
  },
  {
    question: "Apakah ada garansi setelah servis?",
    answer: "Tentu! Setiap layanan MontirGo dilengkapi garansi pengerjaan selama 7 hari setelah servis selesai.",
  },
  {
    question: "Metode pembayaran apa saja yang tersedia?",
    answer: "Kami mendukung pembayaran via transfer bank, dompet digital (GoPay, OVO, DANA), dan kartu kredit/debit.",
  },
  {
    question: "Bagaimana jika saya ingin membatalkan pesanan?",
    answer: "Pembatalan bisa dilakukan melalui aplikasi sebelum montir berangkat tanpa dikenakan biaya apapun.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-4">
          Pertanyaan Umum
        </h2>
        <p className="text-slate-500 text-center mb-12 text-lg">
          Ada pertanyaan? Kami siap menjawab.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center hover:bg-slate-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-slate-800">{faq.question}</span>
                <span className="text-blue-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-slate-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}