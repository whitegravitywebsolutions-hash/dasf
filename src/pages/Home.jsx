import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Phone, 
  Users, 
  Clock, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  UserCheck, 
  Building2, 
  ShieldAlert, 
  Briefcase 
} from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';
import InquiryModal from '../components/InquiryModal';

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const stats = [
    { label: 'Year Established', value: 'Est. 2017', icon: Award },
    { label: 'Pan India Presence', value: '28+ States', icon: ShieldCheck },
    { label: 'Trained Manpower', value: '1,500+', icon: Users },
    { label: 'Service Availability', value: '24 / 7', icon: Clock },
  ];

  const highlights = [
    {
      title: 'Armed Security Personnel',
      desc: 'Certified and licensed weapon-trained officers for high-vulnerability facilities, VIP transit, and banking assets.',
      icon: ShieldAlert,
    },
    {
      title: 'Unarmed Guard Services',
      desc: 'Rigorously trained and background-verified security guards for corporate offices, malls, societies, and institutions.',
      icon: UserCheck,
    },
    {
      title: 'VIP & Event Bouncers',
      desc: 'Robust physical protection specialists for high-profile events, pubs, concerts, and personal executive bodyguards.',
      icon: Lock,
    },
    {
      title: 'Commercial & Banking Security',
      desc: 'Comprehensive security management for ATMs, financial institutions, corporate offices, and industrial hubs.',
      icon: Building2,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      
      {/* HERO SECTION */}
      <section className="relative pt-12 pb-24 lg:py-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 border-b border-amber-500/20">
        
        {/* Background Glow & Shield Overlay */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/5 rounded-full blur-2xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badges */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold shadow-inner">
                <Award className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Certified Security Professionals in Pan India Services</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white font-serif tracking-tight leading-tight">
                Dharm Armed <br />
                <span className="gold-gradient-text">Security Forces</span>
              </h1>

              {/* Subheadline / Tagline */}
              <p className="text-xl sm:text-2xl font-bold text-amber-400/90 tracking-wide font-sans">
                🛡️ Armed & Unarmed Manpower Services
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl font-light leading-relaxed">
                Empowering businesses, commercial facilities, VIPs, and financial hubs with unyielding, highly disciplined security personnel across Ghaziabad & all over India.
              </p>

              {/* Pill Features */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-sm text-slate-200">
                <span className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>🔐 Trained</span>
                </span>
                <span className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>🛡️ Reliable</span>
                </span>
                <span className="flex items-center gap-2 bg-slate-900/80 px-3.5 py-1.5 rounded-lg border border-slate-800">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>🤝 Trusted</span>
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="gold-btn w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-3 shadow-xl shadow-amber-500/20"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {companyDetails.phone}</span>
                </a>

                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl text-sm font-bold tracking-wider text-slate-200 bg-slate-900 hover:bg-slate-800 border border-amber-500/40 hover:border-amber-400 transition-all flex items-center justify-center gap-2"
                >
                  <span>Explore 13+ Services</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>

              {/* Contact direct bar */}
              <div className="pt-2 text-xs text-slate-400">
                <span>Direct Contact: </span>
                <a href={`mailto:${companyDetails.email}`} className="text-amber-400 underline hover:text-amber-300">
                  {companyDetails.email}
                </a>
              </div>

            </div>

            {/* Hero Image Showcase (Logo Emblem) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-md w-full">
                
                {/* Outer Glowing Ring */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-amber-300 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-1000"></div>

                <div className="relative bg-slate-900 border-2 border-amber-500/50 rounded-3xl p-6 shadow-2xl flex flex-col items-center text-center">
                  
                  {/* Embedded Logo */}
                  <img
                    src={companyDetails.logo}
                    alt={companyDetails.name}
                    className="w-64 h-64 sm:w-72 sm:h-72 object-contain drop-shadow-[0_10px_20px_rgba(212,175,55,0.3)] mb-6 transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="w-full border-t border-amber-500/20 pt-4 space-y-2">
                    <div className="text-lg font-bold text-white font-serif uppercase tracking-wider">
                      Dharm Armed Security Force
                    </div>
                    <div className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                      Panchsheel Colony, Ghaziabad
                    </div>
                    <div className="text-xs text-slate-400">
                      Licensed Security Provider • Pan India Deployment
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-slate-900/60 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-amber-500/40 transition-colors">
                  <Icon className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-3xl font-extrabold text-white gold-gradient-text">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30">
              Why Trust DASF Security
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
              Complete Tactical & Manpower Solutions
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              From armed tactical squads to corporate static guarding, we deliver certified security manpower tailored to your precise risk profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="dark-glass p-6 rounded-2xl border border-amber-500/20 card-hover flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="pt-6 border-t border-slate-800/60 mt-6">
                    <span className="text-xs text-amber-400 font-semibold flex items-center gap-1 group-hover:underline">
                      Learn More <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* FEATURED SERVICES PREVIEW GRID */}
      <section className="py-20 bg-slate-900/40 border-t border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">Our Services Showcase</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif mt-1">
                Featured Security Categories
              </h2>
            </div>
            <Link
              to="/services"
              className="text-amber-400 font-bold text-sm hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              View All 13 Categories in Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/50 transition-all duration-300 flex flex-col card-hover group"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                  <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white font-serif group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-2 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => handleOpenModal(service)}
                    className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-amber-400 font-bold text-xs uppercase tracking-wider transition-colors border border-amber-500/30 flex items-center justify-center gap-2"
                  >
                    <span>Enquire Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="gold-btn inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg"
            >
              <span>Explore Complete Services List (13 Categories)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* QUICK CALL TO ACTION BANNER */}
      <section className="py-16 bg-gradient-to-r from-amber-950 via-slate-950 to-amber-950 border-t border-b border-amber-500/40 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/50 rounded-full flex items-center justify-center mx-auto text-amber-400 shadow-lg shadow-amber-500/20">
            <Phone className="w-8 h-8 animate-bounce" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            Need Immediate Armed or Unarmed Guards?
          </h2>

          <p className="text-amber-200/90 text-sm sm:text-base max-w-2xl mx-auto">
            Contact Dharm Armed Security Force now for rapid deployment across Ghaziabad, Delhi NCR, and Pan India. Professionalism guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${companyDetails.phone}`}
              className="gold-btn px-8 py-4 rounded-xl text-base font-bold uppercase tracking-wider flex items-center gap-3 shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              <span>Direct Call: 84006 01349</span>
            </a>

            <a
              href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20need%20urgent%20security%20manpower.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl text-base font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-500/50 hover:bg-emerald-900 transition-colors flex items-center gap-2"
            >
              <span>Instant WhatsApp Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      {/* INQUIRY MODAL */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedService={selectedService}
      />

    </div>
  );
}
