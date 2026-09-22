import React, { useState } from 'react';

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY || '5ca4975c-ea30-422d-9aae-f579a5d73eaa';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const email = 'thomasmern007@gmail.com';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Inquiry from ${formData.name}`,
          message: formData.message
        })
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative w-full py-20 sm:py-32 px-6 sm:px-10 max-w-7xl mx-auto border-t border-[#E6E4DD]">
      {/* Section Headline */}
      <div className="max-w-4xl mb-16 sm:mb-20 space-y-4">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#1E3A2B]" aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-wider text-[#888780]">
            Get In Touch
          </span>
        </div>
        <h2 className="text-hero-headline text-[#141413]">
          Have something to build?
          <br />
          <span className="text-[#1E3A2B]">Let&apos;s talk.</span>
        </h2>
        <p className="text-base sm:text-lg text-[#5C5D58] max-w-xl leading-relaxed">
          Open to full-stack developer roles, engineering collaborations, and freelance projects. Let&apos;s discuss how we can bring your digital product to life.
        </p>
      </div>

      {/* Main Grid: Direct Channels & 3D Calm Visual on Left, Form on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Info & 3D Sculpture (6 cols) */}
        <div className="lg:col-span-6 space-y-8">
          {/* Direct Email with 1-click Copy */}
          <div className="p-6 bg-[#FFFFFF] border border-[#E6E4DD] rounded-md space-y-3 shadow-[0_4px_16px_rgba(20,20,19,0.02)]">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#888780] block">
              Direct Contact
            </span>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <a
                href={`mailto:${email}`}
                className="text-lg sm:text-xl font-bold text-[#141413] hover:text-[#1E3A2B] transition-colors break-all"
              >
                {email}
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="text-xs font-semibold px-3 py-1.5 bg-[#F3F1EB] hover:bg-[#E6E4DD] text-[#141413] rounded-sm transition-colors cursor-pointer"
              >
                {copied ? '✓ Copied to clipboard' : 'Copy Email'}
              </button>
            </div>
            <div className="pt-2 border-t border-[#E6E4DD] flex flex-wrap gap-x-6 gap-y-2 text-xs text-[#5C5D58]">
              <span>Phone: <a href="tel:+918590644059" className="text-[#141413] font-semibold hover:underline">+91 8590644059</a></span>
              <span>Location: <strong className="text-[#141413]">Kerala, India</strong></span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider">
            <a
              href="https://github.com/thomasmern007"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#141413] hover:text-[#1E3A2B] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/thomasukutty-reji-431b9027b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#141413] hover:text-[#1E3A2B] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href="/resume.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#141413] hover:text-[#1E3A2B] transition-colors"
            >
              Resume ↗
            </a>
          </div>

          {/* Quiet 3D Ending Atmosphere Visual */}
          <div className="rounded-md border border-[#E6E4DD] bg-[#FFFFFF] overflow-hidden shadow-[0_12px_32px_-8px_rgba(20,20,19,0.04)]">
            <img
              src="/assets/generated/contact.jpg"
              alt="Quiet minimalist 3D sculpture representing focus and calm resolution"
              className="w-full h-auto object-cover aspect-[16/9]"
              loading="lazy"
            />
            <div className="p-3 bg-[#FAF9F5] border-t border-[#E6E4DD] flex items-center justify-between text-[11px] font-mono text-[#888780]">
              <span>CALM RESOLUTION · DIGITAL STUDIO</span>
              <span>3D STUDY</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean, Uncluttered Message Form (6 cols) */}
        <div className="lg:col-span-6">
          <form
            onSubmit={handleSubmit}
            className="p-8 bg-[#FFFFFF] border border-[#E6E4DD] rounded-md space-y-5 shadow-[0_8px_30px_-8px_rgba(20,20,19,0.04)]"
          >
            <div className="border-b border-[#E6E4DD] pb-3">
              <h3 className="text-base font-bold text-[#141413]">
                Send a Message
              </h3>
              <p className="text-xs text-[#5C5D58] mt-0.5">
                Replies are typically sent within 24 hours.
              </p>
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-name"
                className="block text-xs font-semibold uppercase tracking-wider text-[#5C5D58]"
              >
                Your Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="What should I call you?"
                className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F5] border border-[#E6E4DD] rounded-sm text-[#141413] placeholder:text-[#888780] focus:outline-none focus:border-[#1E3A2B] focus:bg-[#FFFFFF] transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-email"
                className="block text-xs font-semibold uppercase tracking-wider text-[#5C5D58]"
              >
                Email Address
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Where can I write back to you?"
                className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F5] border border-[#E6E4DD] rounded-sm text-[#141413] placeholder:text-[#888780] focus:outline-none focus:border-[#1E3A2B] focus:bg-[#FFFFFF] transition-colors"
              />
            </div>

            <div className="space-y-1">
              <label
                htmlFor="contact-message"
                className="block text-xs font-semibold uppercase tracking-wider text-[#5C5D58]"
              >
                Project Details
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project, idea, or role..."
                className="w-full px-3.5 py-2.5 text-sm bg-[#FAF9F5] border border-[#E6E4DD] rounded-sm text-[#141413] placeholder:text-[#888780] focus:outline-none focus:border-[#1E3A2B] focus:bg-[#FFFFFF] transition-colors resize-y"
              />
            </div>

            {status === 'success' && (
              <div className="p-3 text-xs bg-[#E8EFEA] text-[#1E3A2B] font-medium rounded-sm">
                ✓ Message received! I will review and reply to you soon.
              </div>
            )}

            {status === 'error' && (
              <div className="p-3 text-xs bg-red-50 text-red-700 font-medium rounded-sm">
                ✕ Message delivery failed. Please email me directly at {email}.
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center w-full px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF9F5] bg-[#1E3A2B] hover:bg-[#294D3B] disabled:opacity-50 transition-colors rounded-sm cursor-pointer"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Inquiry →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
