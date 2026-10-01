import React from 'react';
import { Award, ShieldCheck, FileCheck, CheckCircle2, BadgeCheck } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function CertificationsSection() {
  const certs = [
    {
      title: 'GST Certified',
      subtitle: 'GST Registered Entity',
      desc: '100% Tax & Legal Compliant Security Agency',
      icon: FileCheck,
      badge: 'GOVT COMPLIANT'
    },
    {
      title: 'PSARA License',
      subtitle: 'PSARA Certified',
      desc: 'Private Security Agencies Regulation Act Compliant',
      icon: ShieldCheck,
      badge: 'OFFICIAL LICENSE'
    },
    {
      title: 'MSME Registered',
      subtitle: 'MSME Govt. of India',
      desc: 'Recognized Enterprise under Ministry of MSME',
      icon: BadgeCheck,
      badge: 'GOVT RECOGNIZED'
    },
    {
      title: 'NATIONAL TRAINING CERTIFICATE',
      subtitle: 'Certified Tactical Training',
      desc: 'National Standard Firearm, Tactical & Physical Defense',
      icon: Award,
      badge: 'CERTIFIED TRAINING'
    }
  ];

  return (
    <section className="py-16 bg-slate-950 border-t border-b border-amber-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Government Approved & Certified</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Official Accreditations & <span className="gold-gradient-text">Certifications</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            Dharm Armed Security Force operates under full statutory compliance and verified government credentials across Ghaziabad & Pan India.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <div 
                key={idx}
                className="bg-slate-900/90 border border-amber-500/30 hover:border-amber-400 rounded-2xl p-6 transition-all duration-300 card-hover flex flex-col justify-between space-y-4 group shadow-xl"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-extrabold bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {cert.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-amber-400 mt-0.5">
                      {cert.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Verified Certification</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
