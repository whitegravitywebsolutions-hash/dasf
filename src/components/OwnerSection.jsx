import React from 'react';
import { Shield, Phone, Mail, Award, CheckCircle2, UserCheck, Star, Sparkles } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function OwnerSection() {
  const owner = companyDetails.owner;

  return (
    <section className="py-16 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-t border-b border-amber-500/30 relative overflow-hidden">
      
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-slate-900/90 border border-amber-500/40 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Owner Portrait Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                
                {/* Gold Glow Ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>

                <div className="relative bg-slate-950 border-2 border-amber-500/60 rounded-3xl overflow-hidden shadow-2xl">
                  <img
                    src={owner.image}
                    alt={owner.name}
                    className="w-full h-96 sm:h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/90 border border-amber-500/40 backdrop-blur-md text-center">
                    <h3 className="text-xl font-bold text-white font-serif tracking-tight">
                      {owner.name}
                    </h3>
                    <p className="text-xs font-bold text-amber-400 uppercase tracking-widest mt-0.5">
                      {owner.title} • DASF
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Leadership Profile & Motto */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Leadership Profile</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
                  Meet Our Proprietor & Leader <br />
                  <span className="gold-gradient-text">{owner.name}</span>
                </h2>
                
                <div className="pt-1">
                  <span className="inline-block px-4 py-1.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 text-sm font-bold font-serif">
                    "धर्म सशस्त्र सुरक्षा बल - {companyDetails.slogan}"
                  </span>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {owner.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">PSO & VIP Security</div>
                  <div className="text-xs text-slate-300">Personal Security Officer deployment & close protection escorting.</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider">Pan India Manpower</div>
                  <div className="text-xs text-slate-300">Armed Gunmen, Gunwomen, Commandos, and Event Bouncers.</div>
                </div>
              </div>

              {/* Contact Direct Hotlines */}
              <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="gold-btn px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hotline: {companyDetails.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20D.S.%20Tomar%20Sir,%20I%20want%20to%20enquire%20about%20DASF%20security%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-emerald-950/80 border border-emerald-500/50 hover:bg-emerald-900 text-emerald-400 text-xs font-bold transition-colors flex items-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
