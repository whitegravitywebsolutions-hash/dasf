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
  Building
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
      
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-white border border-[#eae6df] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Award className="w-4 h-4 text-amber-600" />
              <span>PSARA • GST • MSME Certified Force</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif tracking-tight">
              About <span className="gold-gradient-text">Dharm Armed Security Force</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Headquartered in Panchsheel Colony Ghaziabad, Dharm Armed Security Force (DASF) is a premier security agency offering certified Gunmen, Gunwomen, Commandos, PSOs, and Guards across India.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED COMPANY OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Showcase Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-2 bg-white border-2 border-amber-400 rounded-3xl shadow-md overflow-hidden max-w-md w-full">
              
              <img
                src="/images/about-hero-brand.jpg"
                alt="Dharm Armed Security Force Brand"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-105"
              />

              <div className="p-4 text-center border-t border-slate-100 mt-2">
                <h3 className="text-lg font-bold text-slate-900 font-serif uppercase">
                  Dharm Armed Security Force
                </h3>
                <p className="text-xs text-amber-700 font-bold mt-0.5 uppercase tracking-wider">
                  🔐 Est. 2017 • Gunman • Gunwoman • Commando
                </p>
                <div className="text-xs text-slate-500 font-medium mt-1">
                  Head Office: Panchsheel Colony, Ghaziabad, UP
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

    </div>
  );
}
