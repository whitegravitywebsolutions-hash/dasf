import React from 'react';
import { Award, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CertificationsSection() {
  const certs = [
    {
      title: 'PSARA License',
      subtitle: 'PSARA Approved',
      desc: 'Private Security Agencies Regulation Act Compliant',
      logo: '/images/psara-card-badge.jpg',
      badge: 'OFFICIAL LICENSE'
    },
    {
      title: 'MSME Registered',
      subtitle: 'MSME Govt. of India',
      desc: 'Recognized Enterprise under Ministry of MSME',
      logo: '/images/msme-card-badge.jpg',
      badge: 'GOVT RECOGNIZED'
    },
    {
      title: 'GST Certified',
      subtitle: 'GST Registered Entity',
      desc: '100% Tax & Legal Compliant Security Agency',
      logo: '/images/gst-card-badge.png',
      badge: 'GOVT COMPLIANT'
    },
    {
      title: 'NATIONAL TRAINING CERTIFICATE',
      subtitle: 'Certified Tactical Training',
      desc: 'National Standard Firearm, Tactical & Physical Defense',
      logo: '/images/national-training-card-badge.png',
      badge: 'CERTIFIED TRAINING'
    }
  ];

  return (
    <section className="py-16 bg-[#FAF8F3] border-t border-b border-[#E5DEC8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
            <Award className="w-4 h-4 text-amber-700" />
            <span>Government Approved & Certified</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            Official Accreditations & <span className="text-amber-700">Certifications</span>
          </h2>

          <p className="text-slate-700 text-sm sm:text-base font-medium">
            Dharm Armed Security Force operates under full statutory compliance and verified government credentials across Ghaziabad & Pan India.
          </p>
        </div>

        {/* 4 Cards Grid - ONLY Image in each box */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-white border-2 border-[#E5DEC8] hover:border-amber-400/80 rounded-3xl p-4 sm:p-5 shadow-sm hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[220px] group"
            >
              <img 
                src={cert.logo} 
                alt={cert.title} 
                className="w-full h-auto max-h-44 object-contain rounded-xl group-hover:scale-105 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
