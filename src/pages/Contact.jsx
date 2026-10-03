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
    manpowerType: 'Armed Gunman Personnel',
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
      a: 'DASF provides licensed armed gunmen, certified gunwomen, tactical commando squads, PSOs, trained unarmed guards, event bouncers, VIP bodyguards, ATM & bank protection squads, and commercial security.'
    },
    {
      q: 'Do you provide services across Pan India or only in Ghaziabad?',
      a: 'We are headquartered in Panchsheel Colony, Ghaziabad, Uttar Pradesh, with secondary branch at Choudhary Market, Chipiyana Buzurg, G.B. Nagar (U.P.), providing certified security manpower across Pan India.'
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
    <div className="min-h-screen bg-[#faf8f3] text-slate-900 py-12">
      
      {/* TOP HERO SECTION - MINIMAL TITLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-serif tracking-tight">
          Contact Us
        </h1>
      </section>

      {/* CONTACT INFO & FORM GRID (SIMPLE UN-BOXED LAYOUT) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Contact Details (Unboxed) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 font-serif border-b border-slate-200 pb-3">
                Get In Touch
              </h2>

              <div className="space-y-6">
                
                {/* Phone Item */}
                <a
                  href={`tel:${companyDetails.phone}`}
                  className="flex items-start gap-4 transition-colors group"
                >
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-600 group-hover:bg-amber-100 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Phone Call</div>
                    <div className="text-xl font-black text-slate-900 group-hover:text-amber-700">{companyDetails.phone}</div>
                    <div className="text-xs text-amber-700 font-bold mt-0.5">Click to Call Now</div>
                  </div>
                </a>

                {/* Email Item */}
                <a
                  href={`mailto:${companyDetails.email}`}
                  className="flex items-start gap-4 transition-colors group"
                >
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-600 group-hover:bg-amber-100 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Email</div>
                    <div className="text-sm font-bold text-slate-900 group-hover:text-amber-700 break-all">{companyDetails.email}</div>
                    <div className="text-xs text-amber-700 font-bold mt-0.5">Send Email Inquiry</div>
                  </div>
                </a>

                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-amber-600 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Office Location</div>
                    <div className="text-sm font-bold text-slate-900">{companyDetails.location}</div>
                  </div>
                </div>

                {/* WhatsApp Quick Connect Button */}
                <a
                  href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-pill w-full py-3.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect Directly on WhatsApp</span>
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: Simple Unboxed Form */}
          <div className="lg:col-span-7">
            <div className="space-y-6">
              
              {!submitted ? (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 pb-3">
                    <h2 className="text-2xl font-bold text-slate-900 font-serif">
                      Send Requirement
                    </h2>
                    <p className="text-xs text-slate-600 mt-1">
                      Fill out the details below for a quick security quote.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your Name"
                          className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="10-digit Phone No."
                          className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          City / State Location
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Ghaziabad, Noida, Delhi"
                          className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Service Category
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Manpower Requirement
                        </label>
                        <select
                          value={formData.manpowerType}
                          onChange={(e) => setFormData({ ...formData, manpowerType: e.target.value })}
                          className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-amber-500"
                        >
                          <option value="Armed Gunman Personnel">Armed Gunman Personnel</option>
                          <option value="Personal Security Officer (PSO)">Personal Security Officer (PSO)</option>
                          <option value="Armed Gunwoman Personnel">Armed Gunwoman Personnel</option>
                          <option value="Tactical Commando Squad">Tactical Commando Squad</option>
                          <option value="Unarmed Security Guards">Unarmed Security Guards</option>
                          <option value="Event / Pub Bouncers">Event / Pub Bouncers</option>
                          <option value="ATM / Bank Protection Squad">ATM / Bank Protection Squad</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Detailed Message / Requirement
                      </label>
                      <textarea
                        rows="4"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Mention site type, gunman/commando preference, duration..."
                        className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="gold-btn w-full py-4 uppercase tracking-wider text-sm flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Submit & Send via WhatsApp</span>
                    </button>
                  </form>
                </div>
              ) : (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-serif">Inquiry Submitted Successfully!</h3>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    We have received your requirement. Redirecting to WhatsApp dispatch officer...
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full bg-slate-200 text-slate-800 font-bold text-xs hover:bg-slate-300"
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

      {/* LOCATION MAP SECTION (UN-BOXED) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 border-t border-slate-200 pt-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-amber-600" />
            <h3 className="text-xl font-bold text-slate-900 font-serif">
              Official Headquarters Location
            </h3>
          </div>
          <p className="text-xs text-slate-600">
            {companyDetails.location}
          </p>

          <div className="w-full h-64 rounded-2xl bg-[#faf8f3] border border-[#eae6df] flex flex-col items-center justify-center text-center p-6 space-y-3 relative overflow-hidden">
            <MapPin className="w-10 h-10 text-amber-600" />
            <div className="text-base font-bold text-slate-900">Dharm Armed Security Force (DASF)</div>
            <div className="text-xs text-amber-800 font-bold max-w-lg">
              {companyDetails.location}
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(companyDetails.location)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-btn px-5 py-2.5 text-xs flex items-center gap-2"
              >
                <span>Open in Google Maps ↗</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-amber-600" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 font-serif">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#eae6df] rounded-2xl overflow-hidden transition-colors shadow-sm"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-5 text-left font-bold text-slate-900 flex justify-between items-center text-sm sm:text-base hover:text-amber-700 transition-colors"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-amber-600 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
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
