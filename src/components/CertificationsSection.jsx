import React from 'react';
import { Award, ShieldCheck, FileCheck, CheckCircle2, BadgeCheck } from 'lucide-react';

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
    <section className="py-16 bg-slate-50 border-t border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-300 text-slate-800 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-slate-700" />
            <span>Government Approved & Certified</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            Official Accreditations & <span className="text-slate-900">Certifications</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
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
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-700">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-extrabold bg-slate-100 text-slate-800 border border-slate-300 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {cert.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-600 mt-0.5">
                      {cert.subtitle}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-700 font-bold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
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
