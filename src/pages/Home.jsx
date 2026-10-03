import React, { useState, useEffect } from 'react';
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
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';
import InquiryModal from '../components/InquiryModal';
import CertificationsSection from '../components/CertificationsSection';
import OwnerSection from '../components/OwnerSection';

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/hero-commando.jpg',
      badge: 'TACTICAL COMMANDO SQUAD',
      title: 'Elite Tactical Commando Squads',
      subtitle: 'Deploying trained anti-threat commando units for high-risk assets, VIP escorting & convoy protection across Pan India.',
      tag: '🔫 Armed Commando Force'
    },
    {
      image: '/images/gunman-security.jpg',
      badge: 'LICENSED ARMED GUNMEN',
      title: 'Licensed Armed Gunmen Services',
      subtitle: 'Ex-Military firearms officers for bank vaults, cash-in-transit, VIP protection & high-risk perimeter defense.',
      tag: '🎯 Licensed Firearm Officers'
    },
    {
      image: '/images/pso-officer.jpg',
      badge: 'VIP CLOSE PROTECTION',
      title: 'Personal Security Officer (PSO)',
      subtitle: 'Specialized 1-on-1 PSO bodyguards supervised under D.S. Tomar (Ansh PSO) for executives, VIPs & dignitaries.',
      tag: '🛡️ Dedicated Escort PSO'
    },
    {
      image: '/images/gunwoman-security.jpg',
      badge: 'SPECIALIZED FEMALE SECURITY',
      title: 'Armed Gunwomen & Female Guards',
      subtitle: 'Certified female security officers and armed gunwomen for female VIP protection, institutional security & frisking.',
      tag: '👩‍✈️ Gunwoman Squad'
    },
    {
      image: '/images/bank-security.jpg',
      badge: 'BANKING & FINANCIAL SECURITY',
      title: 'Bank Vault & ATM Guarding',
      subtitle: 'High-security armed guarding for bank branches, currency chests, vault rooms & armored cash replenishment.',
      tag: '🏦 Vault Defense Guarding'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

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
      
      {/* FULL-WIDTH HERO IMAGE SLIDER CAROUSEL */}
      <section className="w-full relative h-[500px] sm:h-[580px] lg:h-[640px] bg-slate-950 overflow-hidden text-white">
        
        {/* Slides Images with Transition */}
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center brightness-[0.4]"
            />
            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent"></div>
          </div>
        ))}

        {/* Content Container Overlaid on Slider */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative z-20">
          <div className="max-w-3xl space-y-5 text-left">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full bg-slate-900/90 border border-slate-700 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md">
                {slides[currentSlide].badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold backdrop-blur-md">
                PSARA • GST • MSME Certified
              </span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-serif tracking-tight leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Tagline */}
            <p className="text-xl sm:text-2xl font-bold text-white tracking-wide font-sans">
              {slides[currentSlide].tag}
            </p>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl">
              {slides[currentSlide].subtitle}
            </p>

            {/* 3 Action CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-3.5 pt-2">
              <a
                href={`tel:${companyDetails.phone}`}
                className="w-full sm:w-auto px-7 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full border border-slate-700 flex items-center justify-center gap-2.5 transition-all shadow-md"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call {companyDetails.phone}</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold rounded-full flex items-center justify-center gap-2 transition-all shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Inquiry</span>
              </a>

              <Link
                to="/services"
                className="w-full sm:w-auto px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-md flex items-center justify-center gap-2 transition-all"
              >
                <span>Explore Force Catalog</span>
                <ArrowRight className="w-4 h-4 text-slate-200" />
              </Link>
            </div>

          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white border border-slate-700 transition-colors focus:outline-none"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/60 hover:bg-slate-900 text-white border border-slate-700 transition-colors focus:outline-none"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentSlide
                  ? 'w-8 bg-white'
                  : 'w-2.5 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
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
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-slate-400 transition-all duration-300 flex flex-col group"
              >
                {/* Header Banner */}
                <div className="h-36 bg-slate-100 border-b border-slate-200 p-5 flex flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 rounded-xl bg-white border border-slate-200 text-slate-800">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <span className="bg-slate-900 text-white font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h4 className="text-base font-bold text-slate-900 font-serif leading-tight">
                      {service.title}
                    </h4>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-slate-700 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* 3 Action CTAs */}
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-2">
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="gold-btn flex-1 py-2.5 px-3 text-xs uppercase tracking-wider flex items-center justify-center gap-1.5"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20${encodeURIComponent(service.title)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa-pill px-3.5 py-2.5 text-xs flex items-center justify-center gap-1.5"
                      title="WhatsApp Inquiry"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>

                    <a
                      href={`tel:${companyDetails.phone}`}
                      className="p-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 transition-colors flex items-center justify-center shrink-0"
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
