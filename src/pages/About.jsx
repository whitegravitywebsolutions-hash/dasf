import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  BadgeCheck, 
  ShieldAlert,
  Building,
  MessageSquare
} from 'lucide-react';
import { companyDetails } from '../data/servicesData';
import CertificationsSection from '../components/CertificationsSection';
import OwnerSection from '../components/OwnerSection';

export default function About() {
  const coreValues = [
    {
      title: 'Tactical Vigilance',
      desc: 'Our gunmen, gunwomen and commandos maintain constant high situational awareness to preempt threats.',
      icon: ShieldAlert
    },
    {
      title: 'Military Discipline',
      desc: 'Punctuality, impeccable uniform decorum, and strict adherence to security protocols at every site.',
      icon: BadgeCheck
    },
    {
      title: 'PSARA & GST Certified',
      desc: '100% thorough background verification, criminal history checks, and official statutory licenses.',
      icon: CheckCircle2
    },
    {
      title: 'Pan India Mobility',
      desc: 'Seamless manpower deployment capability across all major cities, industrial hubs, and remote locations.',
      icon: Building
    }
  ];

  const trainingModules = [
    'Firearm Handling & Counter-Fire (Licensed Gunmen)',
    'Gunwoman Escort & Female Screening Drills',
    'Tactical Commando Anti-Threat Formations',
    'VIP Motorcade & Route Reconnaissance',
    'CCTV & Electronic Surveillance Operations',
    'De-escalation & Physical Hand-to-Hand Defense'
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F3] text-slate-900 py-12">
      
      {/* TOP HERO & LEADERSHIP COMBINED SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        
        {/* Page Heading Header - Simple About Us */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-serif tracking-tight">
            About Us
          </h1>
        </div>

        {/* Combined Hero Card Container */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Column: Owner Portrait Photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                
                <div className="relative bg-white border border-slate-300 rounded-3xl overflow-hidden">
                  <img
                    src={companyDetails.owner.image}
                    alt={companyDetails.owner.name}
                    className="w-full h-[380px] sm:h-[440px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Owner Caption Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 border border-slate-200 backdrop-blur-md text-center">
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

            {/* Right Column: Founder's Vision & Company Legacy */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-600">
                  <Award className="w-4 h-4 text-emerald-600" />
                  <span>Pan India Certified Security Agency</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif tracking-tight leading-tight">
                  Dharm Armed <br />
                  <span className="text-slate-800">Security Forces (DASF)</span>
                </h2>
              </div>

              {/* Shortened Concise Description */}
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Founded in 2017 by Dharam Singh Tomar (Ansh PSO), Dharm Armed Security Force (DASF) delivers licensed PSARA, GST, and MSME certified security manpower. Managing a trained force of 1,500+ gunmen, gunwomen, tactical commandos, and PSOs, DASF provides high-vigilance protection for VIPs, commercial hubs, banks, and events across 28+ states.
              </p>

              {/* Quick Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">PSARA & GST Certified</div>
                    <div className="text-[11px] text-slate-500">Full statutory compliance</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 flex items-center gap-3">
                  <BadgeCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                  <div>
                    <div className="text-xs font-bold text-slate-900">Armed Gunmen & PSOs</div>
                    <div className="text-[11px] text-slate-500">Male & female tactical escort</div>
                  </div>
                </div>
              </div>

              {/* Direct Hotlines CTA */}
              <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="gold-btn px-6 py-3 text-xs uppercase tracking-wider flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hotline: {companyDetails.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20D.S.%20Tomar%20Sir,%20I%20want%20to%20enquire%20about%20DASF%20security%20services.`}
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

      </section>

      {/* CORE VALUES GRID */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Operational Pillars</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
              Our Core Guiding Principles
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every gunman, gunwoman, and commando deployed by DASF adheres strictly to our tactical code of conduct.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col space-y-3"
                >
                  <div className="p-3 bg-slate-100 border border-slate-200 rounded-xl text-slate-800 w-fit">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    {value.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TACTICAL TRAINING STANDARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Rigorous Vetting & Defense</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
                National Standard Tactical Training
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Prior to site assignment, all DASF security personnel undergo structured defense training modules designed to handle modern perimeter threats and VIP security contingencies.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {trainingModules.map((module, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-slate-700 shrink-0 mt-0.5" />
                    <span>{module}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-center space-y-4">
                <div className="w-14 h-14 bg-slate-200 rounded-full flex items-center justify-center mx-auto text-slate-800">
                  <Award className="w-7 h-7" />
                </div>
                <div className="text-base font-extrabold text-slate-900">National Training Certified</div>
                <p className="text-xs text-slate-600">Full background check, police verification, medical fitness & weapon proficiency records maintained for every gunman.</p>
                <Link
                  to="/contact"
                  className="gold-btn w-full py-3 text-xs uppercase tracking-wider inline-flex items-center justify-center gap-2"
                >
                  <span>Inquire for Personnel Deployment</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <CertificationsSection />

      {/* WHATSAPP CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
            Ready to Secure Your Facility or VIP?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Connect directly with Dharam Singh Tomar & the DASF coordination team for immediate armed gunman or commando deployment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-2">
            <a
              href={`tel:${companyDetails.phone}`}
              className="gold-btn px-6 py-3 text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Hotline: {companyDetails.phone}</span>
            </a>

            <a
              href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pill px-6 py-3 text-xs flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
