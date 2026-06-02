// import React from 'react';
import fotoSyafiq from '../assets/Syafiq.jpg'
import fotoYogi from '../assets/Yogi.jpg'
import fotoHafidz from '../assets/Hafidz.jpg'
import fotoRaihan from '../assets/Raihan.jpeg'
import fotoIffat from '../assets/iffat.jpg'

const teamMembers = [
  {
    name: "Raihan Indra Pratama",
    role: "Mobile App Developer",
    handle: "FacebookUser",
    socialIcon: "F", 
    iconBg: "bg-black",
    image: fotoRaihan
  },
  {
    name: "Yogi Permana Jati",
    role: "Frontend Developer",
    handle: "TwitterUser",
    socialIcon: "X",
    iconBg: "bg-black",
    image: fotoYogi
  },
  {
    name: "Hafidz Shabanan Fadhil",
    role: "Frontend Developer",
    handle: "LinkedInUser",
    socialIcon: "In",
    iconBg: "bg-blue-600",
    image: fotoHafidz
  },
  {
    name: "Iffat zarqa ",
    role: "UI/UX Designer",
    handle: "TwitterXUser",
    socialIcon: "X",
    iconBg: "bg-black",
    image: fotoIffat
  },
  {
    name: "Syafiq Tristan",
    role: "UI/UX Designer",
    handle: "InstagramUser",
    socialIcon: "Ig",
    iconBg: "bg-pink-600",
    image: fotoSyafiq
  }
];

export default function CoverageArea() {
  return (
    <section className="py-24 bg-white" id="Teams">
      <div className="max-w-[1400px] mx-auto px-6"> {/* Lebar kontainer ditambah agar 5 foto muat */}
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Team</h2>
          <p className="text-slate-500 max-w-3xl mx-auto text-sm leading-relaxed uppercase tracking-widest">
            Sekumpulan mahasiswa yang kerja sama buat kelarin task. Tenang, kami semua crewmate sejati, nggak ada impostor di sini!
          </p>
        </div>

        {/* Grid diubah: sm:2 kolom, md:3 kolom, lg:5 kolom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {teamMembers.map((member, index) => (
            <div key={index} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-200">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Info Area */}
              <div className="bg-white p-0 shadow-sm border-x border-b border-slate-50">
                {/* Social Bar */}
                <div className="flex items-center border-b border-slate-100">
                  <div className={`${member.iconBg} text-white w-10 h-10 flex items-center justify-center font-bold text-xs`}>
                    {member.socialIcon}
                  </div>
                  <div className="px-2 flex-1 overflow-hidden">
                    <p className="text-[9px] text-slate-400 uppercase font-medium truncate">
                      {member.handle}
                    </p>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="p-4">
                  <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
                  <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-wider">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}