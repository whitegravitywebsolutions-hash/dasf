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
  FileCheck,
  ExternalLink,
  Target,
  MessageSquare
} from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';
import InquiryModal from '../components/InquiryModal';
import CertificationsSection from '../components/CertificationsSection';
import OwnerSection from '../components/OwnerSection';

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
    { label: 'Trained Force', value: '1,500+', icon: Users },
    { label: 'Service Availability', value: '24 / 7', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-[#faf8f3] text-slate-900">
      
      {/* HERO SECTION */}
      <section className="relative py-14 lg:py-24 overflow-hidden bg-gradient-to-br from-[#0b0f19] via-[#111827] to-[#1f2937] text-white border-b border-amber-500/20">
        
        {/* Glowing Gradient Ambient Lights */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
                  <Award className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>Pan India Certified Security Force</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold backdrop-blur-md">
                  <span>PSARA • GST • MSME Certified</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white font-serif tracking-tight leading-tight">
                Dharm Armed <br />
                <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                  Security Forces
                </span>
              </h1>

              {/* Tagline */}
              <p className="text-xl sm:text-2xl font-bold text-amber-400 tracking-wide font-sans">
                🛡️ Armed Gunmen • Gunwomen • Commandos • PSOs
              </p>

              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Deploying highly trained Gunmen, Gunwomen, Tactical Commandos, PSOs, and Certified Security Personnel for VIP protection, corporate facilities, banks, and events across Ghaziabad & Pan India.
              </p>

              {/* Force Pill Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 text-xs">
                <span className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700 text-amber-300 font-bold shadow-md">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>🔫 Licensed Gunmen</span>
                </span>
                <span className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700 text-amber-300 font-bold shadow-md">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>👩‍✈️ Armed Gunwomen</span>
                </span>
                <span className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md px-4 py-2 rounded-full border border-slate-700 text-amber-300 font-bold shadow-md">
                  <CheckCircle className="w-4 h-4 text-amber-400" />
                  <span>🎖️ Tactical Commandos</span>
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-4">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-full shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2.5 transition-all hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4 text-slate-950" />
                  <span>Call {companyDetails.phone}</span>
                </a>

                <a
                  href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Inquiry</span>
                </a>

                <Link
                  to="/services"
                  className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-md flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <span>Explore Force Catalog</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
              </div>

            </div>

            {/* Hero Image Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-md w-full">
                
                {/* Gradient Glow Border Card */}
                <div className="p-1 rounded-3xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-600 shadow-2xl shadow-amber-500/20">
                  <div className="relative bg-slate-900 rounded-[22px] p-2 overflow-hidden">
                    
                    <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden">
                      <img
                        src="/images/hero-commando.jpg"
                        alt="Dharm Armed Security Forces"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md text-amber-400 border border-amber-500/40 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-amber-400" />
                        <span>Armed Security Forces</span>
                      </div>

                      {/* Bottom Info Banner */}
                      <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md border border-slate-800 text-white p-3.5 rounded-xl shadow-lg">
                        <div className="text-sm font-black font-serif uppercase tracking-wider bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text text-transparent">
                          Dharm Armed Security Force
                        </div>
                        <div className="text-[11px] text-slate-300 font-semibold mt-0.5">
                          Armed Gunmen • Commandos • PSOs • Pan India
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BAR IN WARM CARDS */}
      <section className="py-12 bg-white border-b border-[#eae6df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-[#faf8f3] border border-[#eae6df] hover:border-amber-500 transition-colors shadow-sm">
                  <Icon className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <CertificationsSection />

      {/* OWNER & LEADERSHIP PROFILE */}
      <OwnerSection />

      {/* FEATURED SERVICES PREVIEW GRID */}
      <section className="py-20 bg-[#faf8f3] border-t border-b border-[#eae6df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-700">Our Tactical Force Catalog</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-1">
                Featured Security Categories
              </h2>
            </div>
            <Link
              to="/services"
              className="text-amber-700 font-bold text-sm hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              View All Services Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#eae6df] hover:border-amber-500 transition-all duration-300 flex flex-col card-hover group shadow-sm"
              >
                {/* Service Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-950/40"></div>
                  <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 font-serif group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Buttons: Enquire + WhatsApp CTA + Call */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="gold-btn flex-1 py-2.5 px-3 text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa-pill px-3.5 py-2.5 text-xs flex items-center justify-center gap-1.5 shadow-sm"
                      title="WhatsApp Inquiry"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${companyDetails.phone}`}
                      className="p-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-700 transition-colors flex items-center justify-center shrink-0"
                      title="Direct Call"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="btn-yellow inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-wider"
            >
              <span>Explore Complete Tactical Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* QUICK CALL TO ACTION BANNER */}
      <section className="py-16 bg-slate-900 text-white border-t border-b border-slate-800 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 text-center space-y-6 relative z-10">
          <div className="w-16 h-16 bg-amber-500/20 border border-amber-500/40 rounded-full flex items-center justify-center mx-auto text-amber-400 shadow-lg">
            <Phone className="w-8 h-8 animate-bounce" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            Need Gunman, Gunwoman or Commando Deployment?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Contact Dharm Armed Security Force now for rapid 24/7 deployment across Ghaziabad, Delhi NCR, and Pan India. PSARA, GST & MSME Certified.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${companyDetails.phone}`}
              className="gold-btn px-8 py-4 text-base uppercase tracking-wider flex items-center gap-3 shadow-2xl"
            >
              <Phone className="w-5 h-5" />
              <span>Direct Call: {companyDetails.phone}</span>
            </a>

            <a
              href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20need%20urgent%20Gunman/Gunwoman/Commando%20deployment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pill px-8 py-4 text-base flex items-center gap-2 shadow-xl"
            >
              <MessageSquare className="w-5 h-5" />
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
