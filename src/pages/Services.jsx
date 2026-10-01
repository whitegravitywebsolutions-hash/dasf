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
  Layers
} from 'lucide-react';
import { servicesData, companyDetails } from '../data/servicesData';
import InquiryModal from '../components/InquiryModal';

export default function Services() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Manpower', 'Armed & Tactical', 'VIP & Executive', 'Event Security', 'Nightlife & Venues', 'Commercial', 'Banking & Financial', 'Specialized', 'Advisory'];

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
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
      
      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
            <img src={companyDetails.logo} alt="" className="w-80 h-80 object-contain" />
          </div>

          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Full Service Catalog • Pan India Manpower</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
              Categories of <span className="gold-gradient-text">Dharm Armed Security Force</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore our comprehensive range of 13 certified security manpower categories. Deploy armed officers, trained security guards, event bouncers, and commercial protection teams tailored for Panchsheel Colony Ghaziabad and Pan India requirements.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-400">
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle className="w-4 h-4" /> 13+ Specialized Service Categories
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle className="w-4 h-4" /> Armed & Unarmed Manpower
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <CheckCircle className="w-4 h-4" /> 24/7 Fast Deployment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER & SEARCH BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 sm:p-6 space-y-4">
          
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search services (e.g. Armed, Bouncer, Bank)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 focus:border-amber-400 rounded-xl pl-11 pr-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
              />
            </div>

            {/* Results Count */}
            <div className="text-xs text-slate-400 font-medium">
              Showing <span className="text-amber-400 font-bold">{filteredServices.length}</span> of <span className="text-white font-bold">{servicesData.length}</span> Security Services
            </div>

          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-2 border-t border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20'
                    : 'bg-slate-950 text-slate-300 hover:bg-slate-800 hover:text-amber-300 border border-slate-800'
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
                className="bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 hover:border-amber-500/60 transition-all duration-300 flex flex-col card-hover group shadow-xl"
              >
                {/* Image Container with Badge */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-sm text-amber-400 border border-amber-500/40 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {service.category}
                  </span>

                  {/* Badge */}
                  <span className="absolute top-3 right-3 bg-amber-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-2.5 py-1 rounded shadow">
                    {service.badge}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white font-serif group-hover:text-amber-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider">
                      Key Highlights:
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Booking Action Button */}
                  <div className="pt-4 border-t border-slate-800 flex gap-2">
                    <button
                      onClick={() => handleOpenModal(service)}
                      className="gold-btn flex-1 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
                    >
                      <span>Book Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`tel:${companyDetails.phone}`}
                      className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 transition-colors flex items-center justify-center"
                      title="Call Dispatch"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/60 rounded-3xl border border-slate-800 space-y-4">
            <Search className="w-12 h-12 text-slate-500 mx-auto" />
            <h3 className="text-xl font-bold text-white font-serif">No Services Found</h3>
            <p className="text-sm text-slate-400 max-w-md mx-auto">
              We couldn't find any service matching "{searchQuery}". Try selecting a different category or call our security hotline directly.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-6 py-2.5 bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-xl text-xs font-bold hover:bg-amber-500/30 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* ALL 13 CATEGORIES QUICK INDEX LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-900 border border-amber-500/20 rounded-3xl p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white font-serif">
                Full Category List (Ghaziabad & Pan India Catalog)
              </h3>
              <p className="text-xs text-slate-400">
                Direct listing of all security services provided by Dharm Armed Security Force
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {servicesData.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleOpenModal(item)}
                className="p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-amber-400 text-left transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <span className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold flex items-center justify-center shrink-0">
                    {idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-200 group-hover:text-amber-300 truncate">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:translate-x-1 transition-transform" />
              </button>
            ))}
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
