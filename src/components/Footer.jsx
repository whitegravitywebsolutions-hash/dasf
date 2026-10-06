import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';

export default function Footer() {
  return (
    <footer className="bg-[#F3ECE1] text-slate-800 border-t border-[#E5DEC8] pt-16 pb-8 relative overflow-hidden">
      {/* Background Accent Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand Info & Social Icons */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="p-1.5 rounded-2xl bg-white border border-[#E5DEC8] shadow-sm group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={companyDetails.logo} 
                  alt="Dharm Armed Security Force" 
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg font-black tracking-tight text-slate-900 font-serif leading-tight uppercase">
                  Dharm Armed Security
                </span>
                <span className="text-xs sm:text-sm font-extrabold text-amber-800 tracking-wider font-serif uppercase">
                  Force (DASF)
                </span>
              </div>
            </Link>
            
            <p className="text-xs text-slate-700 leading-relaxed font-medium">
              Armed Gunmen, Gunwomen, Commandos, PSOs & Security Personnel. Dedicated to safeguarding enterprises, VIPs, banks, and events across Pan India since 2017.
            </p>

            {/* Statutory Compliance Badge */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-amber-400 text-amber-900 text-[11px] font-extrabold uppercase tracking-wider shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-700" />
                <span>PSARA & GST Certified Agency</span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="pt-2 space-y-2">
              <div className="text-slate-900 font-bold uppercase tracking-wider text-[11px]">
                Follow Us & Connect:
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://www.facebook.com/people/Dharm-Armed-Security-Force/61594678872450/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-[#E5DEC8] hover:border-amber-600 hover:text-amber-800 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://www.instagram.com/dharmarmedsecurityforce/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-[#E5DEC8] hover:border-amber-600 hover:text-amber-800 text-slate-700 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                <a
                  href={`https://wa.me/${companyDetails.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white border border-[#E5DEC8] hover:border-emerald-600 text-emerald-700 flex items-center justify-center transition-colors shadow-sm"
                  aria-label="WhatsApp"
                >
                  <MessageSquare className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 border-b border-[#E5DEC8] pb-2 uppercase tracking-wider font-serif">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold">
              {[
                { name: 'Home', path: '/' },
                { name: 'Services Catalog', path: '/services' },
                { name: 'About Us', path: '/about' },
                { name: 'Contact Us', path: '/contact' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="hover:text-amber-800 transition-colors flex items-center gap-2 group text-slate-700 font-medium"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-amber-700 group-hover:translate-x-1 transition-transform" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Services */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 border-b border-[#E5DEC8] pb-2 uppercase tracking-wider font-serif">
              Tactical Forces
            </h4>
            <ul className="space-y-2 text-xs">
              {servicesData.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link 
                    to="/services" 
                    className="text-slate-700 hover:text-amber-800 transition-colors flex items-center gap-2 font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-700"></span>
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-amber-800 hover:underline text-xs font-extrabold pt-1 inline-block">
                  View Full 15+ Forces Catalog →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-slate-900 border-b border-[#E5DEC8] pb-2 uppercase tracking-wider font-serif">
              Direct Hotline
            </h4>
            
            <div className="space-y-3 text-xs">
              <a 
                href={`tel:${companyDetails.phone}`}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#E5DEC8] hover:border-amber-500/60 transition-colors group shadow-sm"
              >
                <Phone className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[11px] text-slate-600 font-medium">Direct Hotline</div>
                  <div className="text-amber-800 font-extrabold text-sm">{companyDetails.phone}</div>
                </div>
              </a>

              <a 
                href={`mailto:${companyDetails.email}`}
                className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#E5DEC8] hover:border-emerald-500/60 transition-colors group shadow-sm"
              >
                <Mail className="w-4.5 h-4.5 text-emerald-700 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-[11px] text-slate-600 font-medium">Official Email</div>
                  <div className="text-slate-900 font-semibold text-xs break-all">{companyDetails.email}</div>
                </div>
              </a>

              <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-[#E5DEC8] shadow-sm">
                <MapPin className="w-4.5 h-4.5 text-amber-700 shrink-0 mt-0.5" />
                <div>
                  <div className="text-[11px] text-slate-600 font-medium">Headquarters</div>
                  <div className="text-slate-800 text-xs font-semibold">{companyDetails.location}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="border-t border-[#E5DEC8] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <p className="text-slate-700 font-medium">
              Designed & Developed by{' '}
              <a 
                href="https://whitegravity.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-amber-800 font-extrabold hover:underline transition-colors"
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
