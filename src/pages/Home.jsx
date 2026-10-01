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
      <section className="relative pt-10 pb-20 lg:py-24 overflow-hidden bg-[#faf8f3] border-b border-[#eae6df]">
        
        {/* Soft Yellow Blur Element */}
        <div className="absolute top-5 left-10 w-[520px] h-[520px] bg-amber-200/30 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider shadow-sm">
                  <Award className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span>Certified Security Professionals • Pan India</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs font-bold">
                  <span>PSARA • GST • MSME Certified</span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 font-serif tracking-tight leading-tight">
                Dharm Armed <br />
                <span className="gold-gradient-text">Security Forces</span>
              </h1>

              {/* Subheadline / Tagline */}
              <p className="text-xl sm:text-2xl font-bold text-amber-800 tracking-wide font-sans">
                🛡️ Armed Gunmen • Gunwomen • Commandos • PSOs
              </p>

              <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
                Deploying elite Gunmen, Gunwomen, Tactical Commandos, PSOs, and Certified Security Guards for VIP protection, commercial facilities, banks, and events across Ghaziabad & Pan India.
              </p>

              {/* Force Pill Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2 text-xs">
                <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#eae6df] text-slate-800 font-bold shadow-sm">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  <span>🔫 Licensed Gunmen</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#eae6df] text-slate-800 font-bold shadow-sm">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  <span>👩‍✈️ Armed Gunwomen</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3.5 py-1.5 rounded-full border border-[#eae6df] text-slate-800 font-bold shadow-sm">
                  <CheckCircle className="w-4 h-4 text-amber-600" />
                  <span>🎖️ Tactical Commandos</span>
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="gold-btn w-full sm:w-auto px-8 py-4 text-sm uppercase tracking-wider flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call {companyDetails.phone}</span>
                </a>

                <Link
                  to="/services"
                  className="btn-yellow w-full sm:w-auto px-8 py-4 text-sm tracking-wider flex items-center justify-center gap-2"
                >
                  <span>Explore Gunmen & Commandos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* GMB Google Business Link */}
              <div className="pt-2 flex items-center justify-center lg:justify-start gap-2 text-xs">
                <span className="text-slate-500 font-medium">Verified Google Business Profile:</span>
                <a 
                  href={companyDetails.gmbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-700 font-bold hover:underline flex items-center gap-1"
                >
                  <span>View GMB Reviews ↗</span>
                </a>
              </div>

            </div>

            {/* Hero Image Showcase (Security Forces Image) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-md w-full">
                
                {/* Golden Glow Border */}
                <div className="absolute -inset-1 bg-amber-400 rounded-3xl blur-md opacity-30 group-hover:opacity-60 transition duration-500"></div>

                <div className="relative bg-white border-2 border-[#eae6df] rounded-3xl p-3 shadow-xl flex flex-col items-center overflow-hidden">
                  
                  {/* Security Forces Image */}
                  <div className="relative w-full h-80 sm:h-96 rounded-2xl overflow-hidden">
                    <img
                      src="/images/hero-commando.jpg"
                      alt="Dharm Armed Security Forces"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badge Pill */}
                    <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md text-amber-400 border border-amber-500/40 text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-amber-400" />
                      <span>Armed Security Forces</span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 bg-slate-950/85 backdrop-blur-md border border-slate-800 text-white p-3.5 rounded-xl shadow-lg">
                      <div className="text-sm font-black font-serif uppercase tracking-wider text-amber-400">
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

                  <button
                    onClick={() => handleOpenModal(service)}
                    className="gold-btn w-full py-2.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
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
              <span>Direct Call: 84006 01349</span>
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
