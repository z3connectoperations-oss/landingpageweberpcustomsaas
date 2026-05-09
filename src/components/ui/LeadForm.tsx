import React, { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { submitLead } from '@/lib/leadService';

interface LeadFormProps {
  variant: 'full' | 'compact';
  onGreenBg?: boolean;
}

export function LeadForm({ variant, onGreenBg = false }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    businessType: '',
    requirement: ''
  });

  const WHATSAPP_NUMBER = '1234567890'; // Placeholder
  const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Z3Connect, I'm interested in discussing a custom software system.")}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const result = await submitLead({
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      businessType: formData.businessType,
      requirement: formData.requirement,
    });

    setIsSubmitting(false);

    if (result.success) {
      setSubmitted(true);
    } else {
      setSubmitError("Something went wrong. Please try again or WhatsApp us directly.");
      console.error("Lead submission failed:", result.error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className={`w-full rounded-2xl p-8 flex flex-col items-center justify-center text-center ${onGreenBg ? 'bg-black/10 border border-black/20' : 'bg-[#1A1A1A]/80 border border-accent/50 backdrop-blur-xl'}`}>
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${onGreenBg ? 'bg-black/20' : 'bg-accent/20'}`}>
          <svg className={`w-6 h-6 ${onGreenBg ? 'text-black' : 'text-accent'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${onGreenBg ? 'text-black' : 'text-white'}`}>Done!</h3>
        <p className={onGreenBg ? 'text-black/80' : 'text-white/80'}>We&apos;ll WhatsApp you in minutes.</p>
      </div>
    );
  }

  // Styles for green background vs dark background
  const fieldStyles = onGreenBg
    ? "w-full px-4 py-3 bg-black/10 border border-black/20 rounded-xl text-black placeholder-black/40 focus:outline-none focus:border-black/50 transition-colors"
    : "w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-accent transition-colors";

  const labelStyles = onGreenBg
    ? "block text-sm font-medium text-black/70 mb-1.5"
    : "block text-sm font-medium text-white/80 mb-1.5";

  const selectBg = onGreenBg
    ? "w-full px-4 py-3 bg-black/10 border border-black/20 rounded-xl text-black focus:outline-none focus:border-black/50 transition-colors appearance-none"
    : "w-full px-4 py-3 bg-[#2A2A2A] border border-white/10 rounded-xl text-white focus:outline-none focus:border-accent transition-colors appearance-none";

  const containerStyles = onGreenBg
    ? "w-full bg-black/10 border border-black/20 backdrop-blur-xl rounded-2xl p-6 shadow-2xl relative z-10"
    : "w-full bg-[#1A1A1A]/50 border border-white/10 backdrop-blur-xl rounded-2xl p-6 shadow-2xl relative z-10";

  return (
    <form onSubmit={handleSubmit} className={containerStyles}>
      <div className={`grid gap-4 mb-6 ${variant === 'compact' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
        
        <div>
          <label htmlFor="name" className={labelStyles}>Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className={fieldStyles}
            placeholder="John Doe"
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelStyles}>Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            inputMode="numeric"
            pattern="[0-9]{10,}"
            value={formData.phone}
            onChange={handleChange}
            className={fieldStyles}
            placeholder="+91 98765 43210"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelStyles}>Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={fieldStyles}
            placeholder="you@company.com"
          />
        </div>

        {variant === 'full' && (
          <>
            <div>
              <label htmlFor="businessType" className={labelStyles}>Business Type</label>
              <select
                id="businessType"
                name="businessType"
                required
                value={formData.businessType}
                onChange={handleChange}
                className={selectBg}
              >
                <option value="" disabled>Select your industry</option>
                <option value="Manufacturing">Manufacturing</option>
                <option value="Hospital & Clinic">Hospital & Clinic</option>
                <option value="Warehouse & Logistics">Warehouse & Logistics</option>
                <option value="Construction">Construction</option>
                <option value="Automotive">Automotive</option>
                <option value="Education">Education</option>
                <option value="Retail & POS">Retail & POS</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="requirement" className={labelStyles}>What do you need built? <span className={onGreenBg ? 'text-black/40 text-xs' : 'text-white/40 text-xs'}>(Optional)</span></label>
              <textarea
                id="requirement"
                name="requirement"
                rows={2}
                value={formData.requirement}
                onChange={handleChange}
                className={`${fieldStyles} resize-none`}
                placeholder="Briefly describe your current process or needs..."
              />
            </div>
          </>
        )}
      </div>

      {/* Error Message */}
      {submitError && (
        <div className={`text-sm mb-4 p-3 rounded-xl ${onGreenBg ? 'bg-red-500/20 text-red-800 border border-red-500/30' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
          {submitError}
        </div>
      )}

      <div className="flex flex-col gap-4">
        {onGreenBg ? (
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-black text-accent font-bold py-4 rounded-full text-lg shadow-lg hover:bg-black/90 transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Get Free Consultation →'}
          </button>
        ) : (
          <Button 
            type="submit" 
            variant="primary" 
            className={`w-full py-4 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_35px_rgba(34,197,94,0.5)] transition-shadow duration-300 ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
          >
            {isSubmitting ? 'Submitting...' : 'Get Free Consultation →'}
          </Button>
        )}
        
        <a 
          href={WA_LINK}
          target="_blank" 
          rel="noopener noreferrer"
          className={`text-center text-sm font-medium transition-colors pt-3 border-t ${onGreenBg ? 'text-black/70 hover:text-black border-black/10' : 'text-white/80 hover:text-accent border-white/10'}`}
        >
          💬 Or WhatsApp us — reply in minutes
        </a>
        
        {variant === 'full' && (
          <p className={`text-xs text-center mt-1 ${onGreenBg ? 'text-black/50' : 'text-white/50'}`}>
            Free demo · No contract · Customized proposal in 24 hrs
          </p>
        )}
      </div>
    </form>
  );
}
