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
    <div className="min-h-screen bg-white text-slate-900 py-12">
      
      {/* TOP HERO SECTION - MINIMAL TITLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-serif tracking-tight">
          About Us
        </h1>
      </section>

      {/* DETAILED COMPANY OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Showcase Card with Authentic DASF Squad Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative bg-white border border-slate-200 rounded-3xl p-3 max-w-md w-full overflow-hidden space-y-3">
              <div className="relative w-full h-64 sm:h-72 rounded-2xl overflow-hidden">
                <img
                  src="/images/dasf-hero-squad.jpg"
                  alt="Dharm Armed Security Force Squad"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white border border-slate-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Authentic DASF Squad</span>
                </div>
              </div>

              <div className="p-4 text-center space-y-2">
                <h3 className="text-xl font-extrabold font-serif uppercase tracking-wider text-slate-900">
                  Dharm Armed Security Force
                </h3>
                <p className="text-xs text-slate-600 font-bold uppercase tracking-widest">
                  Est. 2017 • PSARA & GST Certified
                </p>
                <p className="text-xs text-slate-500">
                  Head Office: Shop No. 6, Choudhary Market, Main Road, Chipiyana Buzurg, G.B. Nagar, Ghaziabad, UP
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Our Legacy (Est. 2017)</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
                Gunmen, Gunwomen & Tactical Commandos
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Dharm Armed Security Force (DASF) was founded in 2017 by D.S. Tomar (Ansh PSO) with a singular mission: to deliver uncompromising, highly disciplined, and statutory compliant armed & unarmed security manpower to clients across India.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Operating under PSARA license, GST registration, and MSME certification, DASF manages a force of over 1,500+ security personnel. Our guards, commandos, and PSOs are trained in rapid threat response, VIP convoy defense, perimeter monitoring, and crisis de-escalation.
            </p>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 text-xs font-bold">
              <div className="flex items-center gap-2 text-slate-900 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
                <Award className="w-4 h-4 text-slate-700" />
                <span>PSARA Licensed Entity</span>
              </div>
              <div className="flex items-center gap-2 text-slate-900 bg-slate-100 px-4 py-2 rounded-full border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-slate-700" />
                <span>Pan-India Mobility</span>
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

      {/* PROPRIETOR SECTION */}
      <OwnerSection />

      {/* CERTIFICATIONS SECTION */}
      <CertificationsSection />

      {/* WHATSAPP CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
            Ready to Secure Your Facility or VIP?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Connect directly with D.S. Tomar & the DASF coordination team for immediate armed gunman or commando deployment.
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
