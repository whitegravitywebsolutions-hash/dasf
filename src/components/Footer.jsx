import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, CheckCircle, ArrowRight, ExternalLink, Award, FileCheck } from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-amber-500/30 pt-16 pb-8 relative overflow-hidden">
      {/* Background Subtle Shield Pattern */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <img src={companyDetails.logo} alt="" className="w-96 h-96 object-contain filter grayscale" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info & Certifications */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={companyDetails.logo} 
                alt={companyDetails.name} 
                className="w-14 h-14 object-contain rounded-lg border border-amber-500/50 bg-black/80 p-0.5"
              />
              <div>
                <h3 className="text-lg font-bold text-white font-serif uppercase tracking-tight">
                  Dharm <span className="gold-gradient-text">Armed Security</span>
                </h3>
                <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  FORCE • PAN INDIA
                </p>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Armed Gunmen, Gunwomen, Commandos & Guard Manpower Services. Protecting commercial assets, VIPs, banks, and corporate facilities across Pan India.
            </p>

            {/* Certifications Badge List */}
            <div className="pt-1 space-y-1.5 text-[11px]">
              <div className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">Official Certifications:</div>
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-slate-900 border border-amber-500/40 text-amber-300 px-2 py-0.5 rounded font-semibold">GST Certified</span>
                <span className="bg-slate-900 border border-amber-500/40 text-amber-300 px-2 py-0.5 rounded font-semibold">PSARA License</span>
                <span className="bg-slate-900 border border-amber-500/40 text-amber-300 px-2 py-0.5 rounded font-semibold">MSME Govt.</span>
                <span className="bg-slate-900 border border-amber-500/40 text-amber-300 px-2 py-0.5 rounded font-semibold">National Training Cert.</span>
              </div>
            </div>

            {/* GMB Link */}
            <div className="pt-2">
              <a
                href={companyDetails.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold hover:underline"
              >
                <span>View Google Business (GMB) Listing ↗</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white border-b border-amber-500/30 pb-2 uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'Services', 'About Us', 'Contact'].map((item) => {
                const path = item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '').replace('us', '')}`;
                return (
                  <li key={item}>
                    <Link 
                      to={path} 
                      className="hover:text-amber-400 transition-colors flex items-center gap-2 group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
                      <span>{item}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white border-b border-amber-500/30 pb-2 uppercase tracking-wider text-amber-400">
              Our Security Forces
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    to="/services" 
                    className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-amber-400 hover:underline text-xs font-semibold pt-1 inline-block">
                  View Full Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white border-b border-amber-500/30 pb-2 uppercase tracking-wider text-amber-400">
              Contact Details
            </h4>
            
            <div className="space-y-3 text-sm">
              <a 
                href={`tel:${companyDetails.phone}`}
                className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-colors group"
              >
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Direct Phone Call</div>
                  <div className="text-white font-bold">{companyDetails.phone}</div>
                </div>
              </a>

              <a 
                href={`mailto:${companyDetails.email}`}
                className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-colors group"
              >
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Official Email</div>
                  <div className="text-white font-semibold text-xs break-all">{companyDetails.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Head Office Location</div>
                  <div className="text-slate-200 text-xs font-medium">{companyDetails.location}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-slate-900 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-slate-400 font-medium">
              Designed & Developed by{' '}
              <a 
                href="https://whitegravity.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-400 hover:text-amber-300 font-bold hover:underline transition-colors"
              >
                White Gravity Web Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
