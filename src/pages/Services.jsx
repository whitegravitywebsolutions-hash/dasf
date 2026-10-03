import React, { useState } from 'react';
import { 
  Search, 
  CheckCircle, 
  ArrowRight, 
  ShieldCheck, 
  Phone, 
  SlidersHorizontal, 
  Tag, 
  Sparkles,
  Layers,
  MessageSquare
} from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import InquiryModal from '../components/InquiryModal';
import CertificationsSection from '../components/CertificationsSection';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Armed & Tactical', 'VIP & Executive', 'Manpower', 'Specialized', 'Event Security', 'Nightlife & Venues', 'Commercial', 'Banking & Financial', 'Advisory'];

  const filteredServices = servicesData.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#faf8f3] text-slate-900 py-12">
      
      {/* HEADER BANNER - CENTERED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white border border-[#eae6df] rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-sm text-center">
          
          <div className="max-w-3xl mx-auto relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
              <Layers className="w-4 h-4 text-amber-600" />
              <span>Full Service Catalog • Armed & Unarmed Force</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 font-serif tracking-tight">
              Categories of <span className="gold-gradient-text">Dharm Armed Security Force</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
              Explore our certified security manpower catalog featuring Armed Gunmen, Armed Gunwomen, Tactical Commandos, VIP Bodyguards, and Event Bouncers. Operating under PSARA, GST & MSME certifications across Ghaziabad & Pan India.
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5 text-amber-700">
                <CheckCircle className="w-4 h-4" /> 15+ Specialized Service Categories
              </span>
              <span className="flex items-center gap-1.5 text-amber-700">
                <CheckCircle className="w-4 h-4" /> Gunmen • Gunwomen • Commandos • PSOs
              </span>
              <span className="flex items-center gap-1.5 text-amber-700">
                <CheckCircle className="w-4 h-4" /> PSARA & GST Certified
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-white border border-[#eae6df] rounded-2xl p-4 sm:p-6 space-y-4 shadow-sm">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search gunman, commando, bouncer, pso..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#faf8f3] border border-[#eae6df] focus:border-amber-500 rounded-xl pl-11 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none"
              />
            </div>

            {/* Results Count */}
            <div className="text-xs text-slate-600 font-bold">
              Showing <span className="text-amber-700 font-black">{filteredServices.length}</span> of <span className="text-slate-900 font-black">{servicesData.length}</span> Security Categories
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-slate-100">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 shadow-md font-extrabold'
                    : 'bg-[#faf8f3] text-slate-700 hover:bg-slate-200 border border-[#eae6df]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
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
                    <h3 className="text-lg font-bold text-white font-serif leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-amber-700 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-700">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking Action Buttons: Enquire + WhatsApp CTA + Call */}
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
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
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-[#eae6df] space-y-4">
            <Search className="w-12 h-12 text-slate-400 mx-auto" />
            <h3 className="text-xl font-bold text-slate-900 font-serif">No Services Found</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              We couldn't find any service matching "{searchQuery}". Try selecting a different category or call our security hotline directly.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-2.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-bold hover:bg-amber-200 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* CALL TO ACTION BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center space-y-6 relative overflow-hidden border border-slate-800 shadow-xl">
          <div className="w-14 h-14 bg-emerald-500/20 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto text-emerald-400 shadow-md">
            <MessageSquare className="w-7 h-7" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif">
            Need Immediate Security Force Deployment?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
            Connect directly with our security coordinator on WhatsApp for instant quote, guard profiles & rapid deployment across Pan India.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa-pill px-8 py-4 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Connect on WhatsApp ({companyDetails.phone})</span>
            </a>

            <a
              href={`tel:${companyDetails.phone}`}
              className="gold-btn px-8 py-4 text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>Call Hotline: {companyDetails.phone}</span>
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
        selectedService={selectedService}
      />

    </div>
  );
}
