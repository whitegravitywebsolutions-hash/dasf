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
  MessageSquare,
  MapPin,
  ExternalLink,
  Star
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
    <div className="min-h-screen text-slate-900">

      {/* FULL-WIDTH HERO BANNER SECTION (AUTHENTIC SQUAD BACKGROUND) */}
      <section className="w-full relative min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] overflow-hidden bg-slate-950 text-white">
        {/* Full-Width Grand Squad Background Image */}
        <img
          src="/images/dasf-hero-squad-grand.jpg"
          alt="Dharm Armed Security Force Grand Squad"
          className="w-full h-full absolute inset-0 object-cover object-top sm:object-center"
        />

        {/* Deep Slate/Emerald Luxury Gradient Overlay (Left-to-Right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/40 lg:via-slate-950/80 lg:to-slate-950/30"></div>

        {/* Content Container (Left-aligned, high impact) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full min-h-[560px] sm:min-h-[620px] lg:min-h-[680px] flex flex-col justify-center relative z-20 py-12">
          <div className="max-w-3xl space-y-6 text-left">
            
            {/* Top Guarantee Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/95 border border-amber-300 text-amber-800 text-xs sm:text-sm font-extrabold uppercase tracking-wider w-fit shadow-sm">
              <ShieldCheck className="w-4 h-4 text-amber-800" />
              <span className="text-amber-800">PSARA & GST Certified Security Force • Est. 2017</span>
            </div>

            {/* Massive Bold Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-none font-serif">
              DHARM ARMED <br />
              <span className="text-amber-400">SECURITY FORCE</span>
            </h1>

            {/* Subheading / Tagline */}
            <p className="text-lg sm:text-2xl font-extrabold text-white font-serif tracking-wide">
              🛡️ Armed Gunmen • Gunwomen • Commandos • PSOs
            </p>

            {/* Sub-description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-100 leading-relaxed max-w-2xl font-medium">
              Deploying highly trained Gunmen, Gunwomen, Tactical Commandos, PSOs, and Certified Security Personnel for VIP protection, commercial facilities, banks, and events across Ghaziabad & Pan India.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 pt-3">
              <a
                href={`tel:${companyDetails.phone}`}
                className="w-full sm:w-auto px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-extrabold font-serif uppercase tracking-wider rounded-xl flex items-center justify-center gap-2.5 transition-all shadow-lg hover:scale-105"
              >
                <Phone className="w-4.5 h-4.5 text-white" />
                <span>Call Hotline: {companyDetails.phone}</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-extrabold font-serif uppercase tracking-wider rounded-xl backdrop-blur-md flex items-center justify-center gap-2.5 transition-all hover:scale-105 shadow-md"
              >
                <MessageSquare className="w-4.5 h-4.5" />
                <span>Instant WhatsApp Inquiry</span>
              </a>

              <Link
                to="/services"
                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-extrabold font-serif uppercase tracking-wider rounded-xl backdrop-blur-md flex items-center justify-center gap-2 transition-all"
              >
                <span>View Services</span>
              </Link>
            </div>

            {/* Bottom Quick Info Strip */}
            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-bold text-amber-200/90 border-t border-slate-700/80 max-w-xl">
              <span className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" /> 24/7 Rapid Response
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
      {/* FEATURED SERVICES CATALOG (OUR TACTICAL FORCE CATALOG) */}
      <section className="py-20 bg-white border-t border-b border-[#E5DEC8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/90 border border-amber-300/80 text-amber-900 text-xs font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-700" />
              <span>High Vigilance Manpower Catalog</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 font-serif tracking-tight">
              Our Tactical Force <span className="text-amber-700">Categories</span>
            </h2>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Deploying PSARA licensed Gunmen, Gunwomen, Tactical Commandos, and PSOs with 100% background-verified credentials across Ghaziabad & Pan India.
            </p>
          </div>

          {/* 6 Featured Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#E5DEC8] hover:border-amber-500/60 transition-all duration-300 flex flex-col group hover:-translate-y-1.5 hover:shadow-xl shadow-sm"
              >
                {/* Header Banner - Clean Light Palette */}
                <div className="bg-[#FAF8F3] border-b border-[#E5DEC8] p-6 text-slate-900 flex flex-col justify-between h-40 relative overflow-hidden">
                  <div className="flex items-center justify-between relative z-10">
                    <div className="p-2.5 rounded-2xl bg-amber-100 border border-amber-300 text-amber-800">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="bg-amber-100 border border-amber-300 text-amber-900 font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <div className="relative z-10 pt-2">
                    <span className="text-[10px] font-extrabold text-amber-800 uppercase tracking-widest">
                      {service.category}
                    </span>
                    <h3 className="text-lg font-black text-slate-900 font-serif leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-3">
                    <div className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider">
                      Force Capabilities:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="font-semibold text-slate-800">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3 Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="flex-1 py-3 px-3 bg-amber-600 hover:bg-amber-700 text-white font-serif font-extrabold rounded-2xl text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all shadow-sm"
                    >
                      <span>Inquire</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </button>

                    <a
                      href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-2xl text-xs font-extrabold flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                      title="WhatsApp Inquiry"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${companyDetails.phone}`}
                      className="p-3 rounded-2xl bg-amber-100/80 hover:bg-amber-200 text-amber-900 border border-amber-300 transition-colors flex items-center justify-center shrink-0"
                      title="Direct Hotline Call"
                    >
                      <Phone className="w-3.5 h-3.5 text-amber-800" />
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Catalog Bottom CTA Link */}
          <div className="mt-14 text-center">
            <Link
              to="/services"
              className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white border border-amber-600 text-xs sm:text-sm font-extrabold uppercase tracking-wider rounded-2xl inline-flex items-center gap-2.5 shadow-lg transition-all hover:scale-105"
            >
              <span>Explore All 15+ Tactical Units in Catalog</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>

        </div>
      </section>

      {/* WHATSAPP CTA BANNER */}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 space-y-6 shadow-sm">
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

      {/* GOOGLE MAPS & LOCATION SECTION */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-6 h-6 text-slate-800" />
                  <h3 className="text-xl font-bold text-slate-900 font-serif">
                    Official Headquarters Location
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 font-medium pl-8">
                  {companyDetails.location}
                </p>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent('Dharm Armed Security Force DASF Shop No. 6, Choudhary Market, Main Road, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn px-5 py-2.5 text-xs flex items-center gap-2 self-start sm:self-auto"
              >
                <span>Open in Google Maps App ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-300 bg-white relative">
              <iframe
                title="Dharm Armed Security Force (DASF) Google Map Location"
                src={`https://maps.google.com/maps?q=${encodeURIComponent('Dharm Armed Security Force DASF Shop No. 6, Choudhary Market, Main Road, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* SIMPLE FULL-WIDTH STATUTORY ACCREDITATION BANNER (AFTER MAP) */}
      <section className="py-8 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            src="/images/home-after-map-banner.png"
            alt="PSARA Registered & Licensed Security Agency - Central Government Act 2005 & Ministry of MSME Govt of India"
            className="w-full h-auto object-contain rounded-2xl shadow-sm"
          />
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
