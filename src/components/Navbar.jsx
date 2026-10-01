import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronRight, Award, Shield, MessageSquare } from 'lucide-react';
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
      {/* Top Dark Notice Bar */}
      <div className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1.5 text-amber-400 font-bold">
              <Award className="w-3.5 h-3.5" />
              Certified Security Professionals
            </span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-amber-300 font-semibold">PSARA • GST • MSME Certified</span>
            <span className="hidden sm:inline text-slate-600">|</span>
            <span className="text-slate-300">Est. 2017 • Pan India Services</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a 
              href={`tel:${companyDetails.phone}`} 
              className="flex items-center gap-1.5 hover:text-amber-300 transition-colors font-bold text-amber-400"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Hotline: {companyDetails.phone}</span>
            </a>
            <a 
              href={`mailto:${companyDetails.email}`} 
              className="hidden sm:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{companyDetails.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-[#faf8f3]/95 backdrop-blur-md border-b border-slate-900/10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src={companyDetails.logo} 
                alt="Dharm Armed Security Force" 
                className="h-16 sm:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
              />
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-serif leading-tight">
                  Dharm Armed Security
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-amber-700 tracking-wider font-serif uppercase">
                  Force
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold tracking-wide transition-all relative py-1.5 ${
                    isActive(link.path)
                      ? 'text-slate-900'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.name}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-amber-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Right Action Pill Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={`tel:${companyDetails.phone}`}
                className="btn-call-pill px-4 py-2 text-xs flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {companyDetails.phone}</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pill px-4 py-2 text-xs flex items-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-800 hover:bg-slate-200/60 transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-[#faf8f3] border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold ${
                  isActive(link.path)
                    ? 'bg-amber-100/80 text-slate-900 border border-amber-300'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-amber-600" />
              </Link>
            ))}

            <div className="pt-4 space-y-2 border-t border-slate-200">
              <a
                href={`tel:${companyDetails.phone}`}
                className="gold-btn w-full py-3 text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Hotline: {companyDetails.phone}</span>
              </a>

              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wa-pill w-full py-3 text-center text-xs flex items-center justify-center gap-2"
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
