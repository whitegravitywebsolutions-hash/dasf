import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  ExternalLink
} from 'lucide-react';
import { companyDetails, servicesData } from '../data/servicesData';
import CertificationsSection from '../components/CertificationsSection';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Ghaziabad',
    service: servicesData[0].title,
    manpowerType: 'Armed Security Personnel',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*New Contact Enquiry - DASF*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Email:* ${formData.email || 'N/A'}%0A` +
      `*City:* ${formData.city}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Requirement:* ${formData.manpowerType}%0A` +
      `*Details:* ${formData.message || 'I want to inquire about security services.'}`;

    setTimeout(() => {
      window.open(`https://wa.me/${companyDetails.phoneClean}?text=${text}`, '_blank');
    }, 1000);
  };

  const faqs = [
    {
      q: 'Are your security operations GST and PSARA certified?',
      a: 'Yes, Dharm Armed Security Force is PSARA Licensed, GST Registered, MSME Recognized by the Government of India, and holds National Training Certification.'
    },
    {
      q: 'What types of security personnel does DASF provide?',
      a: 'DASF provides licensed armed gunmen, certified gunwomen, tactical commando squads, trained unarmed guards, event bouncers, VIP bodyguards, ATM & bank protection squads, and commercial security.'
    },
    {
      q: 'Do you provide services across Pan India or only in Ghaziabad?',
      a: 'We are headquartered in Panchsheel Colony, Ghaziabad, Uttar Pradesh, but we provide certified security manpower across Pan India for commercial enterprises, industrial units, events, and personal protection details.'
    },
    {
      q: 'How quickly can gunmen or commandos be deployed?',
      a: 'For emergency or rapid deployment in Ghaziabad and Delhi NCR, personnel can be dispatched within 24 hours. For large-scale multi-guard or Pan-India commercial contracts, deployment schedules are aligned with client onboarding.'
    },
    {
      q: 'Are all your security officers background verified?',
      a: 'Yes. Every gunman, gunwoman, commando, and guard undergoes 100% background checks, criminal record verification, address confirmation, and medical fitness assessment before deployment.'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 py-12">
      
      {/* HEADER BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Direct 24/7 Security Hotline: 84006 01349</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-serif tracking-tight">
              Contact <span className="gold-gradient-text">Dharm Armed Security Force</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Inquire for Gunman, Gunwoman, Commando force, or Security Guard deployment in Panchsheel Colony Ghaziabad & across India.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT INFO & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
              <h2 className="text-2xl font-bold text-white font-serif border-b border-amber-500/20 pb-3">
                Official Contact Hub
              </h2>

              <div className="space-y-4">
                
                {/* Phone Card */}
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400 transition-all group"
                >
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Direct Phone Call</div>
                    <div className="text-xl font-extrabold text-white group-hover:text-amber-300">{companyDetails.phone}</div>
                    <div className="text-xs text-amber-400/90 font-medium mt-0.5">Click to Call Now</div>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-400 transition-all group"
                >
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Official Email</div>
                    <div className="text-sm font-bold text-white group-hover:text-amber-300 break-all">{companyDetails.email}</div>
                    <div className="text-xs text-amber-400/90 font-medium mt-0.5">Send Email Inquiry</div>
                  </div>
                </a>

                {/* Address Card */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                  <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-xl text-amber-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Office Location</div>
                    <div className="text-sm font-bold text-white">{companyDetails.location}</div>
                    <div className="text-xs text-slate-400 mt-1">Servicing Ghaziabad, Delhi NCR & Pan India</div>
                  </div>
                </div>

                {/* WhatsApp Quick Connect Button */}
                <a
                  href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 hover:bg-emerald-900 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Directly on WhatsApp</span>
                </a>

              </div>
            </div>

            {/* Service Coverage & Certifications Badge */}
            <div className="p-6 bg-slate-900/60 rounded-3xl border border-slate-800 text-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-amber-400 mx-auto" />
              <div className="text-sm font-bold text-white">PSARA • GST • MSME Certified Force</div>
              <div className="text-xs text-slate-400">🔐 Gunman • Gunwoman • Commando • Bouncer</div>
            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-xl">
              
              {!submitted ? (
                <div className="space-y-6">
                  <div className="border-b border-amber-500/20 pb-4">
                    <h2 className="text-2xl font-bold text-white font-serif">
                      Send Security Requirement
                    </h2>
                    <p className="text-xs text-amber-400 font-medium mt-1">
                      Fill out the form below to receive a custom proposal for your site.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit Phone No."
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          City / State Location
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Ghaziabad, Noida, Delhi"
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Service Category
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                          Manpower Requirement
                        </label>
                        <select
                          value={formData.manpowerType}
                          onChange={(e) => setFormData({ ...formData, manpowerType: e.target.value })}
                          className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-400"
                        >
                          <option value="Armed Gunman Personnel">Armed Gunman Personnel</option>
                          <option value="Armed Gunwoman Personnel">Armed Gunwoman Personnel</option>
                          <option value="Tactical Commando Squad">Tactical Commando Squad</option>
                          <option value="Unarmed Security Guards">Unarmed Security Guards</option>
                          <option value="Event / Pub Bouncers">Event / Pub Bouncers</option>
                          <option value="VIP Bodyguard Detail">VIP Bodyguard Detail</option>
                          <option value="ATM / Bank Protection Squad">ATM / Bank Protection Squad</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                        Detailed Message / Requirement
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention site type, gunman/commando preference, duration..."
                        className="w-full bg-slate-950 border border-slate-700 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="gold-btn w-full py-4 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-xl"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit & Send via WhatsApp</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-serif">Inquiry Submitted Successfully!</h3>
                  <p className="text-sm text-slate-300 max-w-sm mx-auto">
                    We have received your requirement. Redirecting to WhatsApp dispatch officer...
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 text-white font-semibold text-xs hover:bg-slate-700"
                    >
                      Submit Another Requirement
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <CertificationsSection />

      {/* LOCATION MAP & GMB PLACEHOLDER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-amber-400" />
            <h3 className="text-xl font-bold text-white font-serif">
              Headquarters & Google Business Profile (GMB)
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Panchsheel Colony, Ghaziabad, Uttar Pradesh. Verified Google Business Listing.
          </p>

          <div className="w-full h-64 rounded-2xl bg-slate-950 border border-amber-500/20 flex flex-col items-center justify-center text-center p-6 space-y-3 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
            <MapPin className="w-10 h-10 text-amber-400 animate-bounce" />
            <div className="text-base font-bold text-white">Dharm Armed Security Force (DASF)</div>
            <div className="text-xs text-amber-300">PANCHSHEEL COLONY GHAZIABAD, Ghaziabad</div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={companyDetails.gmbLink}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn px-5 py-2.5 rounded-xl text-slate-950 font-bold text-xs flex items-center gap-2 shadow"
              >
                <span>View GMB Profile & Reviews</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://maps.google.com/?q=Panchsheel+Colony+Ghaziabad"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-amber-300 text-xs font-bold hover:bg-slate-700 transition-colors"
              >
                Open in Google Maps ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-white font-serif">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-5 text-left font-bold text-white flex justify-between items-center text-sm sm:text-base hover:text-amber-300 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
