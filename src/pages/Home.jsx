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
                {/* Vector Category Header Banner (No Stock Photo) */}
                <div className="relative h-44 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-6 flex flex-col justify-between overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>

                  <div className="flex items-center justify-between relative z-10">
                    <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-400/30 text-amber-400">
                      <ShieldCheck className="w-6 h-6 text-amber-400" />
                    </div>
                    <span className="bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full shadow">
                      {service.badge}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h4 className="text-base font-bold text-white font-serif leading-tight">
                      {service.title}
                    </h4>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-slate-600 mt-1 line-clamp-2">
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
