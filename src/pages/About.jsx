import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Target, 
  Eye, 
  Users, 
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
    <div className="min-h-screen bg-[#faf8f3] text-slate-900 py-12">
      
      {/* TOP HERO SECTION - MINIMAL TITLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-serif tracking-tight">
          About Us
        </h1>
      </section>

      {/* DETAILED COMPANY OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Showcase Card (No Stock Image) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-1 bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 rounded-3xl shadow-xl max-w-md w-full">
              <div className="bg-slate-900 rounded-[22px] p-6 text-white text-center space-y-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

                <div className="w-16 h-16 rounded-2xl bg-amber-500/20 border border-amber-400/40 text-amber-400 mx-auto flex items-center justify-center">
                  <ShieldCheck className="w-9 h-9 text-amber-400" />
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold font-serif uppercase tracking-wider bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                    Dharm Armed Security Force
                  </h3>
                  <p className="text-xs text-amber-400 font-bold uppercase tracking-widest">
                    Est. 2017 • Pan India Security
                  </p>
                </div>

                <div className="py-4 px-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="font-bold text-amber-300">PSARA • GST • MSME Certified</div>
                  <div>Head Office: Shop No. 6, Choudhary Market, Main Road, Chipiyana Buzurg, G.B. Nagar, Ghaziabad, UP</div>
                </div>

                <div className="pt-2 text-xs font-bold text-amber-400 uppercase tracking-wider flex justify-center gap-3">
                  <span>🔫 Gunmen</span>
                  <span>•</span>
                  <span>👩‍✈️ Gunwomen</span>
                  <span>•</span>
                  <span>🎖️ Commandos</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Mission and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Our Legacy (Est. 2017)</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
                Gunmen, Gunwomen & Tactical Commandos
              </h2>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Established in <strong>2017</strong>, Dharm Armed Security Force (DASF) was founded with a single core mandate: to deliver high-calibre licensed Gunmen, certified Gunwomen, tactical Commandos, PSOs, and physical security guards to commercial institutions, banking sectors, events, and individuals.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether guarding high-risk assets, managing crowds at major venues, escorting VIPs, or protecting commercial office buildings in Ghaziabad and NCR, our personnel undergo stringent physical drills, mental evaluation, firearm certification, and legal compliance under PSARA and GST standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-white border border-[#eae6df] space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-700 font-bold font-serif text-base">
                  <Target className="w-5 h-5" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600">
                  To safeguard lives, property, and peace of mind by deploying disciplined, alert, and certified security manpower across India.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#eae6df] space-y-2 shadow-sm">
                <div className="flex items-center gap-2 text-amber-700 font-bold font-serif text-base">
                  <Eye className="w-5 h-5" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600">
                  To be India's most trusted name in armed tactical security, VIP escorting, and enterprise manpower services through continuous excellence.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <CertificationsSection />

      {/* OWNER LEADERSHIP SECTION */}
      <OwnerSection />

      {/* CORE VALUES */}
      <section className="py-16 bg-white border-t border-b border-[#eae6df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Foundation of Strength</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-serif">
              Our Core Operational Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#faf8f3] border border-[#eae6df] hover:border-amber-500 transition-colors space-y-3 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-serif">{val.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TRAINING & RIGOROUS SELECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#eae6df] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-sm">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Security Excellence</span>
            <h2 className="text-3xl font-extrabold text-slate-900 font-serif">
              Gunmen & Commando Training Standards
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              At Dharm Armed Security Force, deployment is earned. Every gunman, gunwoman, bouncer, and commando officer undergoes intense tactical training prior to field assignment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {trainingModules.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="gold-btn inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider"
              >
                <span>Inquire About Manpower Deployment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#faf8f3] p-6 rounded-2xl border border-[#eae6df] space-y-4 text-center">
            <ShieldCheck className="w-12 h-12 text-amber-600 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900 font-serif">
              Certified Pan India Network
            </h3>
            <p className="text-xs text-slate-600">
              We operate with full PSARA, GST, MSME statutory compliance, verified records, and clear standard operating procedures (SOPs).
            </p>
            <div className="pt-2 text-xs font-bold text-amber-800">
              📞 Direct Hotline: {companyDetails.phone}
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-md">
            <MessageSquare className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            Ready to Secure Your Premises with DASF?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Connect directly with our leadership team on WhatsApp for customized security planning & rapid deployment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pill px-8 py-4 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp ({companyDetails.phone})</span>
            </a>

            <a
              href={`tel:${companyDetails.phone}`}
              className="gold-btn px-8 py-4 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>Call Hotline: {companyDetails.phone}</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
