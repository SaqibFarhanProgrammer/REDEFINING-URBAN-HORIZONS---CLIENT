
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-48 bg-neutral-50 border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">
          <div className="md:col-span-6 relative">
            <div className="aspect-[4/5] bg-neutral-200 overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Urban Architecture" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white p-8 hidden md:block">
              <span className="text-4xl font-black text-[#2BC0E4]">12+</span>
              <p className="text-[10px] font-bold tracking-widest mt-2 uppercase text-neutral-400">Years of Market Expertise</p>
            </div>
          </div>
          <div className="md:col-span-6">
            <span className="text-[#2BC0E4] font-bold tracking-[0.3em] text-[10px] uppercase block mb-6">Our Philosophy</span>
            <h2 className="impact-heading text-5xl md:text-7xl mb-8 leading-[0.9]">
              WE DON'T <br />SELL PROPERTY. <br />
              <span className="text-neutral-300">WE CURATE</span> <br />INVESTMENTS.
            </h2>
            <div className="space-y-6 text-neutral-600 font-light leading-loose text-lg">
              <p>
                In the luxury sector, access is the ultimate currency. We provide our clients with more than just a portfolio—we provide a strategic advantage through insider market knowledge and exclusive off-market inventory.
              </p>
              <p>
                Every asset we advise on undergoes rigorous quantitative and qualitative vetting. From structural integrity to long-term zoning projections, we leave no detail unexamined.
              </p>
            </div>
            <button className="mt-10 group flex items-center gap-4 text-xs font-bold tracking-widest">
              LEARN OUR PROCESS
              <span className="w-10 h-px bg-neutral-900 group-hover:w-16 group-hover:bg-[#2BC0E4] transition-all"></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
