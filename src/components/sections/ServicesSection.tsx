import React from 'react';
import { FadeIn } from '../ui/FadeIn';

interface ServiceItem {
  id: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    name: 'Full-Stack Development',
    description:
      'End-to-end web application development using the MERN stack, delivering scalable architecture, secure authentication, and seamless user experiences.',
  },
  {
    id: '02',
    name: 'Frontend Engineering',
    description:
      'Crafting responsive, high-performance, and intuitive user interfaces using React, TypeScript, and Tailwind CSS with clean component design.',
  },
  {
    id: '03',
    name: 'Backend & REST APIs',
    description:
      'Architecting robust server-side systems and RESTful APIs with Node.js and Express, emphasizing reliability, clean MVC patterns, and modular routes.',
  },
  {
    id: '04',
    name: 'Database Architecture',
    description:
      'Designing scalable document databases with MongoDB and Mongoose, optimizing schemas, data validation, and query performance for production workloads.',
  },
  {
    id: '05',
    name: 'API & Payment Integration',
    description:
      'Seamless integration of third-party APIs, real-time messaging with Socket.IO, and secure payment workflows via Stripe and Razorpay.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[32px] sm:rounded-t-[48px] md:rounded-t-[60px] px-4 sm:px-8 md:px-10 py-16 sm:py-28 md:py-36 relative z-10 select-none min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-5xl w-full mx-auto flex flex-col items-center justify-center">
        {/* Heading */}
        <FadeIn delay={0} y={30} className="w-full text-center">
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-12 sm:mb-16 md:mb-24"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 150px)' }}
          >
            Services
          </h2>
        </FadeIn>

        {/* 5 Service Items */}
        <div className="border-t border-[#0C0C0C]/15 w-full">
          {SERVICES.map((service, index) => (
            <FadeIn key={service.id} delay={index * 0.1} y={25} className="w-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-6 sm:py-8 md:py-11 border-b border-[#0C0C0C]/15 gap-4 sm:gap-8 md:gap-14 transition-colors duration-300 hover:bg-[#F9F9F9] px-3 sm:px-6 rounded-2xl w-full">
                {/* Number */}
                <span
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: 'clamp(2.2rem, 8vw, 130px)' }}
                >
                  {service.id}
                </span>

                {/* Name + Description stacked vertically */}
                <div className="flex flex-col flex-1 max-w-2xl">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] mb-1.5 sm:mb-3"
                    style={{ fontSize: 'clamp(0.95rem, 2vw, 1.95rem)' }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="font-light leading-relaxed text-[#0C0C0C]/60"
                    style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.15rem)' }}
                  >
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
