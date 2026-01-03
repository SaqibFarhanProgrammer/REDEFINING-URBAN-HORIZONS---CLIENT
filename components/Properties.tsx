
import React from 'react';
import { PROPERTIES } from '../constants';

const Properties: React.FC = () => {
  return (
    <section id="properties" className="py-24 md:py-48 bg-neutral-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
        <div>
          <span className="text-[#2BC0E4] font-bold tracking-[0.3em] text-[10px] uppercase block mb-6">Current Inventory</span>
          <h2 className="impact-heading text-5xl md:text-8xl leading-none">SIGNATURE <br />COLLECTION</h2>
        </div>
        <div className="hidden md:block">
          <p className="text-sm font-light text-neutral-400 max-w-xs mb-6">
            Explore our curated selection of properties that define modern luxury living.
          </p>
          <button className="border border-white/20 px-8 py-3 text-[10px] font-bold tracking-widest hover:bg-white hover:text-neutral-900 transition-all uppercase">
            View All Assets
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
        {PROPERTIES.map((property) => (
          <div key={property.id} className="relative group overflow-hidden border-b md:border-b-0 md:border-r border-white/10 last:border-r-0">
            <div className="aspect-[3/4] overflow-hidden">
              <img 
                src={property.imageUrl} 
                alt={property.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100"
              />
            </div>
            <div className="absolute inset-0 p-10 flex flex-col justify-end bg-gradient-to-t from-neutral-900 via-transparent to-transparent">
              <p className="text-[10px] font-bold tracking-widest text-[#2BC0E4] uppercase mb-2">
                {property.location}
              </p>
              <h3 className="text-2xl font-bold tracking-tight mb-4 uppercase">{property.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-lg font-light text-neutral-300">{property.price}</span>
                <button className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-[#2BC0E4] group-hover:border-[#2BC0E4] transition-all">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Properties;
