import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronRight, MessageSquare, ShieldCheck, MapPin } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services Catalog', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Dispatch', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* TOP ANNOUNCEMENT / DISPATCH BAR */}
      <div className="bg-[#F3ECE1] text-slate-900 text-xs py-2 px-4 border-b border-[#E5DEC8]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          
          <div className="flex items-center gap-3 font-semibold text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-amber-800 font-extrabold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-700" /> PSARA & GST Certified
            </span>
            <span className="hidden md:inline text-slate-400">•</span>
            <span className="hidden md:flex items-center gap-1 text-slate-700">
              <MapPin className="w-3 h-3 text-emerald-700" /> Ghaziabad & Pan India Dispatch
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a 
              href={`tel:${companyDetails.phone}`} 
              className="flex items-center gap-1.5 text-amber-900 hover:text-amber-700 font-extrabold transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-700" />
              <span>Hotline: {companyDetails.phone}</span>
            </a>
            <span className="text-slate-300">|</span>
            <a 
              href={`https://wa.me/${companyDetails.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-800 hover:text-emerald-900 font-extrabold transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-emerald-700" />
              <span>WhatsApp Instant</span>
            </a>
          </div>

        </div>
      </div>

      {/* MAIN NAVIGATION BAR */}
      <nav className="bg-[#FAF8F3]/95 backdrop-blur-md border-b border-[#E5DEC8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Brand Emblem & Name */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-1 rounded-2xl bg-white border border-slate-300 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={companyDetails.logo} 
                  alt="Dharm Armed Security Force Logo" 
                  className="h-12 sm:h-14 w-auto object-contain" 
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 uppercase leading-tight font-serif">
                  Dharm Armed Security
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-amber-700 tracking-widest uppercase font-serif">
                  Force (DASF)
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-xs sm:text-sm font-extrabold uppercase tracking-widest transition-all relative py-1.5 font-serif ${
                    isActive(link.path)
                      ? 'text-slate-900'
                      : 'text-slate-700 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-600 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${companyDetails.phone}`}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-amber-400 border border-amber-500/40 text-xs uppercase tracking-wider font-extrabold flex items-center gap-2 shadow-sm transition-all hover:scale-102 font-serif"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" />
                <span>Call Hotline</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs uppercase tracking-wider font-extrabold flex items-center gap-2 shadow-sm transition-all hover:scale-102 font-serif"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-xl text-slate-900 bg-amber-100/80 border border-amber-300 focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {isOpen && (
          <div className="md:hidden bg-[#FAF8F3] border-b border-[#E5DEC8] px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-extrabold uppercase tracking-widest font-serif ${
                  isActive(link.path)
                    ? 'bg-slate-900 text-amber-400 border border-slate-800'
                    : 'bg-white text-slate-800 border border-slate-200'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </Link>
            ))}

            <div className="pt-3 space-y-2 border-t border-[#E5DEC8]">
              <a
                href={`tel:${companyDetails.phone}`}
                className="w-full py-3.5 rounded-2xl bg-slate-900 text-amber-400 border border-slate-800 text-center text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Hotline: {companyDetails.phone}</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-2xl bg-emerald-700 text-white text-center text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Instant WhatsApp Inquiry</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
