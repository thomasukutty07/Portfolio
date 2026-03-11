import React, { useEffect, useRef, useState } from 'react';
import { gsap }          from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

/* ── Magnetic submit button ── */
const MagBtn = ({ children, ...props }) => {
  const ref = useRef();
  const onMove = (e) => {
    const r  = ref.current.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width/2))  * 0.3;
    const dy = (e.clientY - (r.top  + r.height/2)) * 0.3;
    gsap.to(ref.current, { x: dx, y: dy, duration: 0.35, ease: 'power2.out' });
  };
  const onLeave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1,0.4)' });
  return (
    <button ref={ref} {...props} onMouseMove={onMove} onMouseLeave={onLeave}>{children}</button>
  );
};

export default function ContactSection({ formData, formStatus, handleChange, handleSubmit }) {
  const sectionRef = useRef(null);
  const topRef     = useRef(null);
  const formRef    = useRef(null);
  const linksRef   = useRef(null);
  const [focused, setFocused] = useState(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const triggers = [];
    gsap.set([topRef.current, formRef.current, linksRef.current], { opacity: 0, y: 36 });
    triggers.push(ScrollTrigger.create({
      trigger: sectionRef.current, start: 'top 85%', once: true,
      onEnter: () => {
        gsap.to(topRef.current,   { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out' });
        gsap.to(formRef.current,  { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', delay: 0.14 });
        gsap.to(linksRef.current, { opacity: 1, y: 0, duration: 0.8,  ease: 'power3.out', delay: 0.26 });
      },
    }));
    const fb = setTimeout(() => {
      [topRef, formRef, linksRef].forEach(r => {
        if (r.current) gsap.set(r.current, { opacity: 1, y: 0 });
      });
    }, 2800);
    return () => { triggers.forEach(t => t.kill()); clearTimeout(fb); };
  }, []);

  const links = [
    { icon: FaEnvelope, label: 'Email',    value: 'thomasmern007@gmail.com',    href: 'mailto:thomasmern007@gmail.com' },
    { icon: FaGithub,   label: 'GitHub',   value: 'github.com/thomasukutty07',  href: 'https://github.com/thomasukutty07' },
    { icon: FaLinkedin, label: 'LinkedIn', value: 'Thomasukutty Reji',           href: 'https://www.linkedin.com/in/thomasukutty-reji-431b9027b/' },
  ];

  const iStyle = (name) => ({
    borderColor: focused === name ? 'var(--lime)' : undefined,
    background:  focused === name ? 'var(--lime-03)' : undefined,
  });

  return (
    <section id="contact" ref={sectionRef} className="contact">
      <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>

        {/* Big header */}
        <div ref={topRef}>
          <div className="sec-label" style={{ marginBottom: '2rem' }}>Contact</div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 'clamp(3rem, 7vw, 6rem)', lineHeight: 0.95, letterSpacing: '0.02em', color: 'var(--white)', marginBottom: '2.5rem' }}>
            LET'S BUILD<br /><span style={{ color: 'var(--lime)' }}>SOMETHING</span><br />GREAT
          </h2>

          {/* Big email */}
          <a
            href="mailto:thomasmern007@gmail.com"
            className="contact-big-email"
            data-text="thomasmern007@gmail.com"
          >
            thomasmern007@gmail.com
          </a>
        </div>

        {/* 2-col layout */}
        <div className="contact-grid">
          {/* Form */}
          <div ref={formRef}>
            {formStatus.success && (
              <div style={{ background: 'rgba(163,255,71,0.08)', border: '1px solid rgba(163,255,71,0.25)', color: 'var(--lime)', padding: '0.9rem 1.1rem', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.6rem', animation: 'scale-in 0.3s ease' }}>
                ✓ Message sent — I'll be in touch soon!
              </div>
            )}
            {formStatus.error && (
              <div style={{ background: 'rgba(255,77,109,0.07)', border: '1px solid rgba(255,77,109,0.25)', color: '#FF4D6D', padding: '0.9rem 1.1rem', marginBottom: '1.5rem', fontSize: '0.85rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                ✕ Something went wrong — please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="f-group">
              <div className="f-row">
                <div>
                  <label className="f-label" htmlFor="firstName">Name *</label>
                  <input className="contact-input" id="firstName" name="firstName" type="text"
                    value={formData.firstName || ''} onChange={handleChange} required
                    placeholder="Thomas" style={iStyle('firstName')}
                    onFocus={() => setFocused('firstName')} onBlur={() => setFocused(null)}
                  />
                </div>
                <div>
                  <label className="f-label" htmlFor="email">Email *</label>
                  <input className="contact-input" id="email" name="email" type="email"
                    value={formData.email} onChange={handleChange} required
                    placeholder="you@example.com" style={iStyle('email')}
                    onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                  />
                </div>
              </div>
              <div>
                <label className="f-label" htmlFor="subject">Subject</label>
                <input className="contact-input" id="subject" name="subject" type="text"
                  value={formData.subject || ''} onChange={handleChange}
                  placeholder="Project inquiry…" style={iStyle('subject')}
                  onFocus={() => setFocused('subject')} onBlur={() => setFocused(null)}
                />
              </div>
              <div>
                <label className="f-label" htmlFor="message">Message *</label>
                <textarea className="contact-input" id="message" name="message"
                  value={formData.message} onChange={handleChange} required
                  placeholder="Tell me about your project…" style={iStyle('message')}
                  onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                />
              </div>

              <MagBtn
                type="submit"
                disabled={formStatus.submitting}
                className="btn-lime"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.72rem', padding: '1rem', opacity: formStatus.submitting ? 0.65 : 1, cursor: formStatus.submitting ? 'not-allowed' : 'pointer', clipPath: 'none', borderRadius: 0 }}
              >
                {formStatus.submitting
                  ? <><div style={{ width: 16, height: 16, border: '2px solid rgba(5,5,5,0.3)', borderTopColor: '#050505', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />  Sending…</>
                  : <>Send Message →</>
                }
              </MagBtn>
            </form>
          </div>

          {/* Right — links + info */}
          <div ref={linksRef}>
            <p style={{ color: 'var(--white-60)', fontSize: '0.9rem', lineHeight: 1.88, marginBottom: '2.5rem', fontWeight: 300 }}>
              Whether it's a startup MVP, a freelance project, or just wanting to say hello — my inbox is always open.
            </p>

            <div className="contact-links">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Icon className="contact-link-icon" />
                  <div>
                    <div className="contact-link-label">{label}</div>
                    <div className="contact-link-val">{value}</div>
                  </div>
                  <span className="contact-link-arr">↗</span>
                </a>
              ))}
            </div>

            <div className="avail-badge">
              <span className="avail-dot" />
              Available for freelance &amp; full-time — response within 24h
            </div>
          </div>
        </div>
      </div>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </section>
  );
}