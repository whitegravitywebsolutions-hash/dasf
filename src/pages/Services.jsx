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
    <div className="min-h-screen bg-[#FAF8F3] text-slate-900 py-10">
      
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

                {/* Feature Checklist */}
                <div className="space-y-2 border-t border-slate-100 pt-3">
                  <div className="text-[10px] font-extrabold text-slate-800 uppercase tracking-wider">
                    Force Capabilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
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
