import React, { useState, useEffect } from 'react';
import { X, Send, Phone, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { companyDetails } from '../data/servicesData';

export default function InquiryModal({ isOpen, onClose, selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Ghaziabad',
    service: '',
    guardsCount: '1-5 Guards',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({
        ...prev,
        service: selectedService.title || selectedService
      }));
    }
  }, [selectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Construct WhatsApp message URL for immediate dispatch option
    const text = `*Security Inquiry - ${formData.service}*%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*City/Location:* ${formData.city}%0A` +
      `*Manpower Required:* ${formData.guardsCount}%0A` +
      `*Message:* ${formData.message || 'I require security services.'}`;

    setTimeout(() => {
      window.open(`https://wa.me/${companyDetails.phoneClean}?text=${text}`, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-slate-900 border border-amber-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-200 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full hover:bg-slate-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-amber-500/20 pb-4">
              <div className="p-2.5 bg-amber-500/10 border border-amber-500/30 rounded-xl">
                <ShieldCheck className="w-7 h-7 text-amber-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white font-serif">
                  Request Security Service
                </h3>
                <p className="text-xs text-amber-400 font-medium">
                  {selectedService?.title ? `Service: ${selectedService.title}` : 'Dharm Armed Security Force'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sujeet Kumar"
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit Mobile No."
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Ghaziabad / Delhi NCR"
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={formData.service}
                    className="w-full bg-slate-950/70 border border-amber-500/30 rounded-lg px-3.5 py-2.5 text-amber-300 font-semibold cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                    Manpower Quantity
                  </label>
                  <select
                    value={formData.guardsCount}
                    onChange={(e) => setFormData({ ...formData, guardsCount: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="1-2 Personnel">1 - 2 Guards / Bouncers</option>
                    <option value="3-5 Personnel">3 - 5 Guards / Bouncers</option>
                    <option value="5-10 Personnel">5 - 10 Guards / Squad</option>
                    <option value="10+ Personnel">10+ Full Security Unit</option>
                    <option value="Custom Requirement">Custom Requirement</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1">
                  Specific Requirements / Message
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention armed/unarmed preference, duration, timing..."
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="gold-btn w-full py-3 rounded-xl font-bold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-white font-serif">
              Inquiry Received!
            </h3>
            
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Thank you, <span className="text-amber-400 font-semibold">{formData.name}</span>. Our security dispatch officer is initiating your request on WhatsApp.
            </p>

            <div className="p-3 bg-slate-950 border border-amber-500/30 rounded-lg text-xs text-amber-300">
              📞 Direct Call Alternative: <a href={`tel:${companyDetails.phone}`} className="font-bold underline">{companyDetails.phone}</a>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
