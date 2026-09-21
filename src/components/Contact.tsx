import React, { useState } from 'react';
import type { ContactFormData, FormStatus } from '../types';
import { IconMail, IconGithub, IconLinkedin, IconArrowUpRight, IconCheck } from './Icons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitting: false,
    success: false,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: null });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '5ca4975c-ea30-422d-9aae-f579a5d73eaa',
          name: formData.name,
          email: formData.email,
          subject: formData.subject || 'Portfolio Inquiry',
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(result.message || 'Submission failed. Please try again.');
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setFormStatus({ submitting: false, success: false, error: message });
    }
  };

  return (
    <section
      id="contact"
      aria-label="Contact Information and Form"
      className="py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 pb-6 border-b border-[#E6E4DD]">
          <span className="text-xs uppercase font-mono tracking-widest text-[#5C5D58] block mb-2">
            Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#141413]">
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact & Links (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-base text-[#5C5D58] leading-relaxed">
              If you have an opportunity, project, or technical question, please feel free to reach out directly by email or via the message form.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:thomasmern007@gmail.com"
                className="card-border rounded-lg p-5 flex items-center justify-between group hover:border-[#141413] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#F3F1EC] flex items-center justify-center text-[#1E3A2B]">
                    <IconMail size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#878882] block">
                      Email
                    </span>
                    <span className="text-sm font-semibold text-[#141413] group-hover:text-[#1E3A2B] transition-colors">
                      thomasmern007@gmail.com
                    </span>
                  </div>
                </div>
                <IconArrowUpRight size={16} className="text-[#878882] group-hover:text-[#141413] transition-colors" />
              </a>

              <a
                href="https://www.linkedin.com/in/thomasukutty-reji-431b9027b/"
                target="_blank"
                rel="noopener noreferrer"
                className="card-border rounded-lg p-5 flex items-center justify-between group hover:border-[#141413] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#F3F1EC] flex items-center justify-center text-[#1E3A2B]">
                    <IconLinkedin size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#878882] block">
                      LinkedIn
                    </span>
                    <span className="text-sm font-semibold text-[#141413] group-hover:text-[#1E3A2B] transition-colors">
                      Thomasukutty Reji
                    </span>
                  </div>
                </div>
                <IconArrowUpRight size={16} className="text-[#878882] group-hover:text-[#141413] transition-colors" />
              </a>

              <a
                href="https://github.com/thomasukutty07"
                target="_blank"
                rel="noopener noreferrer"
                className="card-border rounded-lg p-5 flex items-center justify-between group hover:border-[#141413] transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-[#F3F1EC] flex items-center justify-center text-[#1E3A2B]">
                    <IconGithub size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#878882] block">
                      GitHub
                    </span>
                    <span className="text-sm font-semibold text-[#141413] group-hover:text-[#1E3A2B] transition-colors">
                      github.com/thomasukutty07
                    </span>
                  </div>
                </div>
                <IconArrowUpRight size={16} className="text-[#878882] group-hover:text-[#141413] transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 card-border rounded-lg p-6 sm:p-8 bg-[#FFFFFF]">
            <h3 className="text-xl font-semibold text-[#141413] mb-6">
              Send a Message
            </h3>

            {formStatus.success && (
              <div
                role="status"
                className="mb-6 p-4 rounded-md bg-[#EBF2ED] border border-[#1E3A2B]/20 text-[#1E3A2B] flex items-center gap-2.5 text-sm"
              >
                <IconCheck size={16} className="shrink-0 text-[#1E3A2B]" />
                <span>Thank you. Your message has been sent successfully.</span>
              </div>
            )}

            {formStatus.error && (
              <div
                role="alert"
                className="mb-6 p-4 rounded-md bg-[#FDF2F2] border border-[#DC2626]/20 text-[#991B1B] text-sm"
              >
                {formStatus.error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-mono uppercase tracking-wider text-[#5C5D58] mb-1.5"
                  >
                    Your Name <span className="text-[#991B1B]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#E6E4DD] bg-[#FAF9F5] text-sm text-[#141413] focus:border-[#1E3A2B] focus:bg-[#FFFFFF] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-mono uppercase tracking-wider text-[#5C5D58] mb-1.5"
                  >
                    Your Email <span className="text-[#991B1B]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-md border border-[#E6E4DD] bg-[#FAF9F5] text-sm text-[#141413] focus:border-[#1E3A2B] focus:bg-[#FFFFFF] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-mono uppercase tracking-wider text-[#5C5D58] mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#E6E4DD] bg-[#FAF9F5] text-sm text-[#141413] focus:border-[#1E3A2B] focus:bg-[#FFFFFF] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-mono uppercase tracking-wider text-[#5C5D58] mb-1.5"
                >
                  Message <span className="text-[#991B1B]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-md border border-[#E6E4DD] bg-[#FAF9F5] text-sm text-[#141413] focus:border-[#1E3A2B] focus:bg-[#FFFFFF] transition-colors resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus.submitting}
                className="w-full sm:w-auto px-7 py-3 rounded-md bg-[#1E3A2B] text-[#FAF9F5] text-sm font-semibold hover:bg-[#2D5A43] transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E3A2B] focus-visible:ring-offset-2"
              >
                {formStatus.submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
