import React from 'react';
import { ShieldCheck, Camera, CheckCircle2 } from 'lucide-react';

export default function ForceGallery() {
  const galleryImages = [
    {
      src: '/images/dasf-owner-portrait.jpg',
      title: 'D.S. Tomar (Ansh PSO)',
      category: 'Leadership',
      desc: 'Proprietor & Founder of Dharm Armed Security Force.',
      pos: 'object-center'
    },
    {
      src: '/images/dasf-squad-men-women.jpg',
      title: 'DASF Armed Security Squad',
      category: 'Men & Women Squad',
      desc: 'Certified male & female security officers, gunmen, gunwomen, and tactical commandos deployed in full uniform.',
      pos: 'object-center'
    },
    {
      src: '/images/dasf-officers-uniform.jpg',
      title: 'Armed Security Officers',
      category: 'Gunmen & Officers',
      desc: 'Licensed gunman and tactical security officers in uniform.',
      pos: 'object-[center_85%]'
    },
    {
      src: '/images/dasf-pso-tactical.jpg',
      title: 'Executive PSO Duty',
      category: 'VIP Protection',
      desc: 'Personal Security Officers for executive and VIP escort.',
      pos: 'object-center'
    },
    {
      src: '/images/dasf-guard-deployment.jpg',
      title: 'Field Guard Deployment',
      category: 'On-Site Security',
      desc: 'Armed and unarmed security deployment for commercial sites.',
      pos: 'object-[center_60%]'
    },
    {
      src: '/images/dasf-gunman-active.jpg',
      title: 'Active Duty Tactical Unit',
      category: 'Armed Gunman',
      desc: 'High-vigilance tactical security personnel for high-risk assets.',
      pos: 'object-[center_40%]'
    }
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Camera className="w-4 h-4 text-emerald-700" />
            <span>Authentic DASF Media Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
            Our Force in Action
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Authentic photographs of our certified gunmen, gunwomen, PSOs, commandos, and leadership at Dharm Armed Security Force.
          </p>
        </div>

        {/* 6 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((img, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-80 sm:h-96 overflow-hidden bg-slate-100">
                <img
                  src={img.src}
                  alt={img.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${img.pos || 'object-center'}`}
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 text-white text-[11px] font-extrabold px-3 py-1 rounded-full border border-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{img.category}</span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif group-hover:text-emerald-700 transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {img.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-500">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Certified Personnel
                  </span>
                  <span>DASF Ghaziabad</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
