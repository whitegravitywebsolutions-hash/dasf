import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  ExternalLink,
  Clock,
  ShieldCheck
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

  return (
    <div className="min-h-screen bg-white text-slate-900 py-12">
      
      {/* TOP HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-10 text-center space-y-3">
        <h1 className="text-4xl sm:text-5xl font-black text-slate-900 font-serif tracking-tight">
          Contact Us
        </h1>
        <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          We are available 24/7 for immediate armed gunmen, gunwomen, PSO, commando and guard deployment across Ghaziabad & Pan India.
        </p>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 font-serif border-b border-slate-200 pb-3">
                Official Dispatch Hub
              </h2>

              {/* Phone Card */}
              <a
                href={`tel:${companyDetails.phone}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all group"
              >
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-slate-900 group-hover:scale-105 transition-transform shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Direct Hotline</div>
                  <div className="text-xl font-black text-slate-900 group-hover:text-slate-700">{companyDetails.phone}</div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">Click to Call Directly</div>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${companyDetails.phoneClean}?text=Hello%20Dharm%20Armed%20Security%20Force,%20I%20want%20to%20enquire%20about%20your%20security%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 hover:border-emerald-400 transition-all group"
              >
                <div className="p-3 bg-white border border-emerald-200 rounded-xl text-emerald-600 group-hover:scale-105 transition-transform shrink-0">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">Instant WhatsApp Inquiry</div>
                  <div className="text-base font-bold text-slate-900">Chat with Security Dispatch</div>
                  <div className="text-xs text-emerald-700 font-bold mt-0.5">Click for Direct Chat ↗</div>
                </div>
              </a>

              {/* Email Card */}
              <a
                href={`mailto:${companyDetails.email}`}
                className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-400 transition-all group"
              >
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-slate-900 group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Official Email</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-slate-700 break-all">{companyDetails.email}</div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">Send Email Proposal</div>
                </div>
              </a>

              {/* Address Location Card */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="p-3 bg-white border border-slate-200 rounded-xl text-slate-900 shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Headquarters Location</div>
                  <div className="text-sm font-bold text-slate-900 leading-snug">{companyDetails.location}</div>
                </div>
              </div>

              {/* Availability Pill */}
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800">
                <Clock className="w-5 h-5 text-slate-700 shrink-0" />
                <span>24 Hours / 7 Days Active Emergency Control Unit</span>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Inquiry Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10">
              
              {!submitted ? (
                <div className="space-y-6">
                  <div className="border-b border-slate-100 pb-4">
                    <h2 className="text-2xl font-bold text-slate-900 font-serif">
                      Send Security Requirement
                    </h2>
                    <p className="text-xs text-slate-600 mt-1">
                      Fill out the form below to receive a custom security proposal for your site.
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
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
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
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
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
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Deployment City / State
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          placeholder="e.g. Ghaziabad, Noida, Delhi NCR"
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Select Security Category
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-800"
                        >
                          {servicesData.map((s) => (
                            <option key={s.id} value={s.title}>{s.title}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Security Manpower Type
                        </label>
                        <select
                          value={formData.manpowerType}
                          onChange={(e) => setFormData({ ...formData, manpowerType: e.target.value })}
                          className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 focus:outline-none focus:border-slate-800"
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
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-800"
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

      {/* GOOGLE MAPS & LOCATION SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-6 h-6 text-slate-800" />
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Official Headquarters Location
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 font-medium pl-8">
                {companyDetails.location}
              </p>
            </div>

            <a
              href={`https://maps.google.com/?q=${encodeURIComponent('Dharm Armed Security Force DASF Shop No. 6, Choudhary Market, Main Road, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn px-5 py-2.5 text-xs flex items-center gap-2 self-start sm:self-auto"
            >
              <span>Open in Google Maps App ↗</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Embedded Interactive Google Map */}
          <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden border border-slate-300 bg-white relative">
            <iframe
              title="Dharm Armed Security Force (DASF) Google Map Location"
              src={`https://maps.google.com/maps?q=${encodeURIComponent('Dharm Armed Security Force DASF Shop No. 6, Choudhary Market, Main Road, Chipiyana Buzurg, Ghaziabad, Uttar Pradesh 201009')}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS SECTION */}
      <CertificationsSection />

    </div>
  );
}
