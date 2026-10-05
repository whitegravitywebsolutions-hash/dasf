import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  MessageSquare
} from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import InquiryModal from '../components/InquiryModal';
import CertificationsSection from '../components/CertificationsSection';

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-10">
      
      {/* TOP HERO SECTION - MINIMAL TITLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-serif tracking-tight">
          Services
        </h1>
        <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl mx-auto">
          Explore our certified armed gunmen, gunwomen, commandos, PSOs, and security guard services.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
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
                    <h3 className="text-lg font-bold text-white font-serif leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 3 Action CTAs */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
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
        </section>

      {/* WHATSAPP CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-serif">
            Custom Security Requirement?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Contact our dispatch office for custom armed gunmen, PSO, commando or security guard deployment tailored to your facility.
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

      {/* CERTIFICATIONS SECTION */}
      <CertificationsSection />

      {/* INQUIRY MODAL */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
      />

    </div>
  );
}
