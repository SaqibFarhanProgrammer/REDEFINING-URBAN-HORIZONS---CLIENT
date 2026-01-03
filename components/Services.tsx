
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 md:py-48 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <span className="text-[#2BC0E4] font-bold tracking-[0.3em] text-[10px] uppercase block mb-6">Capabilities</span>
            <h2 className="impact-heading text-5xl md:text-8xl leading-none">THE ADVISORY <br />ECOSYSTEM.</h2>
          </div>
          <p className="max-w-xs text-xs uppercase tracking-widest font-bold text-neutral-400 leading-relaxed pb-4 border-b border-neutral-100">
            A 360-degree approach to urban real estate mastery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-neutral-100">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className={`p-10 md:p-16 border-b md:border-b-0 ${index !== 2 ? 'md:border-r' : ''} border-neutral-100 group hover:bg-neutral-50 transition-colors`}
            >
              <span className="text-4xl font-black text-neutral-100 group-hover:text-[#2BC0E4] transition-colors impact-heading block mb-8">
                {service.tag}
              </span>
              <h3 className="text-2xl font-bold mb-6 tracking-tight uppercase">{service.title}</h3>
              <p className="text-neutral-500 font-light leading-relaxed mb-10">
                {service.description}
              </p>
              <a href="#contact" className="text-[10px] font-bold tracking-widest uppercase hover:text-[#2BC0E4] transition-colors">
                Explore &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
