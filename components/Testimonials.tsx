
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 md:py-48 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="relative">
              <div className="text-[12rem] font-black absolute -top-24 -left-10 text-neutral-50 pointer-events-none select-none">“</div>
              <p className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-800 mb-8 relative z-10 italic">
                {t.content}
              </p>
              <div>
                <span className="block font-bold tracking-widest text-sm uppercase">{t.name}</span>
                <span className="block text-xs text-neutral-400 font-medium tracking-widest uppercase mt-1">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
