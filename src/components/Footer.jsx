import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Phone, Mail, MapPin, CheckCircle, ArrowRight, ExternalLink, Award, MessageSquare } from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-[#090e17] text-slate-300 border-t-4 border-amber-500 pt-16 pb-8 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info & Social Icons */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={companyDetails.logo} 
                alt="Dharm Armed Security Force" 
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight text-white font-serif leading-tight">
                  Dharm Armed Security
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-amber-400 tracking-wider font-serif uppercase">
                  Force
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              Armed Gunmen, Gunwomen, Commandos, PSOs & Security Guards. Dedicated to safeguarding enterprises, VIPs, banks, and events across Pan India.
            </p>

            {/* Social Media Icons */}
            <div className="pt-2 space-y-2">
              <div className="text-amber-400 font-bold uppercase tracking-wider text-[11px]">
                Follow Us & Connect:
              </div>
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 hover:text-amber-400 text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400 hover:text-amber-400 text-slate-300 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href={`https://wa.me/${companyDetails.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-emerald-950 border border-emerald-500/40 hover:border-emerald-400 text-emerald-400 flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white border-b border-amber-500/40 pb-2 uppercase tracking-wider text-amber-400">
              Quick Navigation
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
            <h4 className="text-base font-bold text-white border-b border-amber-500/40 pb-2 uppercase tracking-wider text-amber-400">
              Security Forces
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
            <h4 className="text-base font-bold text-white border-b border-amber-500/40 pb-2 uppercase tracking-wider text-amber-400">
              Contact Dispatch
            </h4>
            
            <div className="space-y-3 text-sm">
              <a 
                href={`tel:${companyDetails.phone}`}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-colors group"
              >
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Hotline Call</div>
                  <div className="text-white font-bold">{companyDetails.phone}</div>
                </div>
              </a>

              <a 
                href={`mailto:${companyDetails.email}`}
                className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-500/40 transition-colors group"
              >
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-xs text-slate-400 font-medium">Official Email</div>
                  <div className="text-white font-semibold text-xs break-all">{companyDetails.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900 border border-slate-800">
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
