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
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
      
      {/* PAGE HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Award className="w-4 h-4 text-amber-400" />
              <span>PSARA • GST • MSME Certified Force</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
              About <span className="gold-gradient-text">Dharm Armed Security Force</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Headquartered in Panchsheel Colony Ghaziabad, Dharm Armed Security Force (DASF) is a premier security agency offering certified Gunmen, Gunwomen, Commandos, and Guards across India.
            </p>
          </div>
        </div>
      </section>

      {/* DETAILED COMPANY OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand Emblem showcase */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative p-6 bg-slate-900 border-2 border-amber-500/40 rounded-3xl shadow-2xl text-center space-y-4 max-w-md w-full">
              
              <img
                src={companyDetails.logo}
                alt={companyDetails.name}
                className="w-56 h-56 mx-auto object-contain drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)]"
              />

              <div className="pt-4 border-t border-amber-500/20">
                <h3 className="text-xl font-bold text-white font-serif uppercase">
                  Dharm Armed Security Force
                </h3>
                <p className="text-xs text-amber-400 font-semibold mt-1 uppercase tracking-wider">
                  🔐 Est. 2017 • Gunman • Gunwoman • Commando
                </p>
                <div className="text-xs text-slate-400 mt-2">
                  Head Office: Panchsheel Colony, Ghaziabad, UP
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Mission and Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Our Legacy (Est. 2017)</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
                Gunmen, Gunwomen & Tactical Commandos
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Established in <strong>2017</strong>, Dharm Armed Security Force (DASF) was founded with a single core mandate: to deliver high-calibre licensed Gunmen, certified Gunwomen, tactical Commandos, and physical security guards to commercial institutions, banking sectors, events, and individuals.
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Whether guarding high-risk assets, managing crowds at major venues, escorting VIPs, or protecting commercial office buildings in Ghaziabad and NCR, our personnel undergo stringent physical drills, mental evaluation, firearm certification, and legal compliance under PSARA and GST standards.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold font-serif text-base">
                  <Target className="w-5 h-5" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-400">
                  To safeguard lives, property, and peace of mind by deploying disciplined, alert, and certified security manpower across India.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-bold font-serif text-base">
                  <Eye className="w-5 h-5" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-400">
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
      <section className="py-16 bg-slate-900/50 border-t border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Foundation of Strength</span>
            <h2 className="text-3xl font-extrabold text-white font-serif">
              Our Core Operational Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/40 transition-colors space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white font-serif">{val.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* TRAINING & RIGOROUS SELECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Security Excellence</span>
            <h2 className="text-3xl font-extrabold text-white font-serif">
              Gunmen & Commando Training Standards
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              At Dharm Armed Security Force, deployment is earned. Every gunman, gunwoman, bouncer, and commando officer undergoes intense tactical training prior to field assignment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {trainingModules.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link
                to="/contact"
                className="gold-btn inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg"
              >
                <span>Inquire About Manpower Deployment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4 text-center">
            <ShieldCheck className="w-12 h-12 text-amber-400 mx-auto" />
            <h3 className="text-lg font-bold text-white font-serif">
              Certified Pan India Network
            </h3>
            <p className="text-xs text-slate-400">
              We operate with full PSARA, GST, MSME statutory compliance, verified records, and clear standard operating procedures (SOPs).
            </p>
            <div className="pt-2 text-xs font-bold text-amber-300">
              📞 Direct Hotline: {companyDetails.phone}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
