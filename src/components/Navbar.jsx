import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Phone, Mail, Menu, X, ChevronRight, Award } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Top Banner Bar */}
      <div className="bg-slate-950 text-slate-300 text-xs py-2 px-4 border-b border-amber-500/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-amber-400 font-semibold">
              <Award className="w-3.5 h-3.5" />
              Certified Security Professionals
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-300 font-medium">Pan India Services</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-400">Est. 2017 • Trained • Reliable</span>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={`tel:${companyDetails.phone}`} 
              className="flex items-center gap-1.5 hover:text-amber-400 transition-colors font-semibold"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyDetails.phone}</span>
            </a>
            <a 
              href={`mailto:${companyDetails.email}`} 
              className="hidden sm:flex items-center gap-1.5 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyDetails.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 dark-glass backdrop-blur-md border-b border-amber-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img 
                  src={companyDetails.logo} 
                  alt={companyDetails.name} 
                  className="w-14 h-14 object-contain rounded-lg border border-amber-500/40 p-0.5 group-hover:scale-105 transition-transform duration-300 bg-black/60 shadow-lg shadow-amber-500/10" 
                />
                <div className="absolute -inset-1 bg-amber-500/20 rounded-lg blur -z-10 group-hover:bg-amber-500/30 transition-all"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg md:text-xl font-bold tracking-tight text-white leading-tight font-serif uppercase">
                  Dharm <span className="gold-gradient-text">Armed Security</span>
                </span>
                <span className="text-xs text-amber-400/90 font-medium tracking-wider">
                  FORCE • EST. 2017 • PAN INDIA
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide transition-all relative py-1 ${
                    isActive(link.path)
                      ? 'text-amber-400'
                      : 'text-slate-300 hover:text-amber-300'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Action CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-bold rounded-lg border border-emerald-500/40 text-emerald-400 bg-emerald-950/40 hover:bg-emerald-900/60 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                WhatsApp Us
              </a>

              <a
                href={`tel:${companyDetails.phone}`}
                className="gold-btn px-5 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md shadow-amber-500/20"
              >
                <Phone className="w-4 h-4" />
                <span>Call 84006 01349</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-slate-300 hover:text-amber-400 hover:bg-slate-900 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-slate-950/95 border-b border-amber-500/30 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-semibold ${
                  isActive(link.path)
                    ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                    : 'text-slate-300 hover:bg-slate-900 hover:text-amber-300'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-amber-400" />
              </Link>
            ))}

            <div className="pt-4 space-y-2 border-t border-slate-800">
              <a
                href={`tel:${companyDetails.phone}`}
                className="gold-btn w-full py-3 rounded-lg text-center text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: 84006 01349</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-lg text-center text-sm font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 flex items-center justify-center gap-2"
              >
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
