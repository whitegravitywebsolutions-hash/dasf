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
  MessageSquare
} from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';
import InquiryModal from '../components/InquiryModal';
import CertificationsSection from '../components/CertificationsSection';
import OwnerSection from '../components/OwnerSection';
import ForceGallery from '../components/ForceGallery';

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
    <div className="min-h-screen bg-white text-slate-900">
      
      {/* FULL-WIDTH GREEN HERO BANNER SECTION (MATCHING DESIGN REFERENCE) */}
      <section className="w-full relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] overflow-hidden bg-slate-950 text-white">
        {/* Full-Width Squad Image */}
        <img
          src="/images/dasf-hero-squad.jpg"
          alt="Dharm Armed Security Force Squad"
          className="w-full h-full absolute inset-0 object-cover object-top sm:object-center"
        />

        {/* Deep Emerald Green Gradient Overlay (Left-to-Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-950/80 to-emerald-950/30 lg:via-emerald-950/75 lg:to-transparent"></div>

        {/* Content Container (Left-aligned, high impact) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex flex-col justify-center relative z-20 py-12">
          <div className="max-w-3xl space-y-6 text-left">
            
            {/* Top Guarantee Badge - Transparent / No Pill Background */}
            <div className="inline-flex items-center gap-2 text-emerald-300 text-xs sm:text-sm font-extrabold uppercase tracking-wider w-fit">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>PSARA & GST Certified Security Force</span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white uppercase tracking-tight leading-none font-sans">
              DHARM ARMED <br />
              <span className="text-white">SECURITY FORCE</span>
            </h1>

            {/* Subheading / Tagline */}
            <p className="text-lg sm:text-2xl font-extrabold text-emerald-400 tracking-wide">
              🛡️ Armed Gunmen • Gunwomen • Commandos • PSOs
            </p>

            {/* Sub-description */}
            <p className="text-sm sm:text-base lg:text-lg text-emerald-100/90 leading-relaxed max-w-2xl">
              Deploying highly trained Gunmen, Gunwomen, Tactical Commandos, PSOs, and Certified Security Personnel for VIP protection, commercial facilities, banks, and events across Ghaziabad & Pan India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-3">
              <a
                href={`tel:${companyDetails.phone}`}
                className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-lg hover:scale-105"
              >
                <Phone className="w-4.5 h-4.5" />
                <span>Call Hotline: {companyDetails.phone}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-700/60 hover:bg-emerald-700/80 border border-emerald-400/40 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl backdrop-blur-md flex items-center justify-center gap-2.5 transition-all hover:scale-105"
              >
                <MessageSquare className="w-4.5 h-4.5 text-emerald-400" />
                <span>WhatsApp Inquiry</span>
              </a>

              <Link
                to="/services"
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-xl backdrop-blur-md flex items-center justify-center gap-2 transition-all"
              >
                <span>View Services</span>
              </Link>
            </div>

            {/* Bottom Quick Info Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-bold text-emerald-200/80 border-t border-emerald-800/60 max-w-xl">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> 24/7 Rapid Response
              </span>
              <span>•</span>
              <span>1,500+ Active Personnel</span>
              <span>•</span>
              <span>28+ States Mobility</span>
            </div>

          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <Icon className="w-8 h-8 text-slate-700 mx-auto mb-2" />
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

      {/* AUTHENTIC DASF MEDIA GALLERY */}
      <ForceGallery />

      {/* FEATURED SERVICES CATALOG */}
      <section className="py-20 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Our Tactical Force Catalog</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif mt-1">
                Featured Security Categories
              </h2>
            </div>
            <Link
              to="/services"
              className="text-slate-900 font-bold text-sm hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              View All Services Catalog →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 transition-all duration-300 flex flex-col group hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Header Banner - Rich Slate Navy */}
                <div className="bg-slate-900 border-b border-slate-800 p-5 text-white flex flex-col justify-between h-36">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-slate-800 border border-slate-700 text-emerald-400">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 font-bold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full backdrop-blur-md">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h4 className="text-base font-bold text-white font-serif leading-tight">
                      {service.title}
                    </h4>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-700 border-t border-slate-100 pt-3">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 3 Action CTAs */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="flex-1 py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-slate-800"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
                    </button>

                    <a
                      href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                      title="WhatsApp Inquiry"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${companyDetails.phone}`}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors flex items-center justify-center shrink-0"
                      title="Direct Call"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="gold-btn inline-flex items-center gap-2 px-8 py-4 text-xs sm:text-sm uppercase tracking-wider"
            >
              <span>Explore 15+ Force Units in Catalog</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* WHATSAPP CTA BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-12 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-serif">
              Need Gunman, Gunwoman or Commando Deployment?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
              Connect with our deployment officer directly for fast quote & deployment across Ghaziabad & Pan India.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${companyDetails.phone}`}
                className="gold-btn px-8 py-4 text-xs sm:text-sm uppercase tracking-wider flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Direct Call: {companyDetails.phone}</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pill px-8 py-4 text-xs sm:text-sm flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY MODAL */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />

    </div>
  );
}
