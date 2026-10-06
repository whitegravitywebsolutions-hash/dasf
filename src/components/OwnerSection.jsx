import React from 'react';
import { Phone, Star, MessageSquare } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function OwnerSection() {
  const owner = companyDetails.owner;

  return (
    <section className="py-16 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Owner Portrait Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                
                <div className="relative bg-white border border-slate-300 rounded-3xl overflow-hidden shadow-md">
                  <img
                    src={owner.image}
                    alt="Dharam Singh Tomar - Proprietor & Founder"
                    className="w-full h-96 sm:h-[420px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Caption Frame displaying full name */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-md text-center shadow-sm">
                    <h3 className="text-xl font-black text-slate-900 font-serif tracking-tight">
                      Dharam Singh Tomar
                    </h3>
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-widest mt-0.5">
                      Proprietor & Founder • DASF
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Leadership Profile & Motto */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-900 text-xs font-bold uppercase tracking-wider">
                <Star className="w-4 h-4 text-slate-800 fill-slate-800" />
                <span>Leadership & Vision</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
                  Meet Our Proprietor & Leader <br />
                  <span className="text-slate-900">D.S. Tomar (Ansh PSO)</span>
                </h2>
                
                <div className="pt-1">
                  <span className="inline-block px-4 py-2 rounded-xl bg-slate-100 border border-slate-300 text-amber-800 text-sm font-extrabold font-serif">
                    "धर्म सशस्त्र सुरक्षा बल - {companyDetails.slogan}"
                  </span>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {owner.bio}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">PSO & VIP Security</div>
                  <div className="text-xs text-slate-600">Personal Security Officer deployment & close protection escorting.</div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-wider">Pan India Manpower</div>
                  <div className="text-xs text-slate-600">Armed Gunmen, Gunwomen, Commandos, and Event Bouncers.</div>
                </div>
              </div>

              {/* Contact Direct Hotlines */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="gold-btn px-6 py-3 text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hotline: {companyDetails.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharam%20Singh%20Tomar%20Sir,%20I%20want%20to%20enquire%20about%20DASF%20security%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pill px-6 py-3 text-xs flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
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
