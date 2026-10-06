import React from 'react';
import { Award, CheckCircle2 } from 'lucide-react';

export default function CertificationsSection() {
  const certs = [
    {
      title: 'PSARA License',
      subtitle: 'PSARA Approved',
      desc: 'Private Security Agencies Regulation Act Compliant',
      logo: '/images/psara-approved-logo.svg',
      badge: 'OFFICIAL LICENSE'
    },
    {
      title: 'MSME Registered',
      subtitle: 'MSME Govt. of India',
      desc: 'Recognized Enterprise under Ministry of MSME',
      logo: '/images/msme-registered-logo.svg',
      badge: 'GOVT RECOGNIZED'
    },
    {
      title: 'GST Certified',
      subtitle: 'GST Registered Entity',
      desc: '100% Tax & Legal Compliant Security Agency',
      logo: '/images/gst-registered-logo.svg',
      badge: 'GOVT COMPLIANT'
    },
    {
      title: 'NATIONAL TRAINING CERTIFICATE',
      subtitle: 'Certified Tactical Training',
      desc: 'National Standard Firearm, Tactical & Physical Defense',
      logo: '/images/national-training-logo.svg',
      badge: 'CERTIFIED TRAINING'
    }
  ];

  return (
    <section className="py-16 bg-slate-50/70 border-t border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/80 border border-emerald-300 text-emerald-900 text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-emerald-700" />
            <span>Government Approved & Certified</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight">
            Official Accreditations & <span className="text-emerald-700">Certifications</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base">
            Dharm Armed Security Force operates under full statutory compliance and verified government credentials across Ghaziabad & Pan India.
          </p>

          {/* User's Exact Uploaded Official Certification Banner Image */}
          <div className="pt-6 max-w-5xl mx-auto">
            <div className="bg-white border border-amber-400/80 rounded-3xl p-3 sm:p-5 shadow-xl hover:shadow-2xl transition-shadow">
              <img 
                src="/images/certifications-banner.png" 
                alt="DASF Official Government Accreditations & Certifications Banner - PSARA, MSME, GST, National Training"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
