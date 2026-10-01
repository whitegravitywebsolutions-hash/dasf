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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white border border-[#eae6df] rounded-3xl shadow-2xl p-6 sm:p-8 text-slate-900 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 p-2 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
              <div className="p-2.5 bg-amber-50 border border-amber-200 rounded-xl text-amber-600">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif">
                  Request Security Service
                </h3>
                <p className="text-xs text-amber-700 font-bold">
                  {selectedService?.title ? `Service: ${selectedService.title}` : 'Dharm Armed Security Force'}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sujeet Kumar"
                  className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit Mobile No."
                    className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    City / Location
                  </label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="e.g. Ghaziabad / Delhi NCR"
                    className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service Required
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={formData.service}
                    className="w-full bg-[#faf8f3] border border-amber-300 rounded-xl px-3.5 py-2.5 text-amber-950 font-bold cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Manpower Quantity
                  </label>
                  <select
                    value={formData.guardsCount}
                    onChange={(e) => setFormData({ ...formData, guardsCount: e.target.value })}
                    className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-amber-500"
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
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Specific Requirements / Message
                </label>
                <textarea
                  rows="3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Mention gunman, commando, shift timing preference..."
                  className="w-full bg-[#faf8f3] border border-[#eae6df] rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-amber-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="gold-btn w-full py-3 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 font-serif">
              Inquiry Received!
            </h3>
            
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Thank you, <span className="text-amber-700 font-bold">{formData.name}</span>. Our security dispatch officer is initiating your request on WhatsApp.
            </p>

            <div className="p-3 bg-[#faf8f3] border border-amber-300 rounded-xl text-xs text-amber-900 font-bold">
              📞 Direct Call Alternative: <a href={`tel:${companyDetails.phone}`} className="text-amber-700 underline">{companyDetails.phone}</a>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
