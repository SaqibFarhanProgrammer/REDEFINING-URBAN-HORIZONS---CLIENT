
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="pt-40 pb-20 md:pt-60 md:pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-10">
            <h1 className="impact-heading text-6xl md:text-9xl lg:text-[11rem] font-bold leading-tight">
              REDEFINING <br />
              <span className="text-neutral-300">URBAN</span> <br />
              <span className="relative">
                HORIZONS
                <div className="absolute -bottom-2 md:-bottom-4 left-0 w-1/3 h-2 md:h-4 bg-[#2BC0E4]"></div>
              </span>
            </h1>
          </div>
          <div className="md:col-span-2 hidden md:block pb-6">
            <div className="flex flex-col gap-4 text-xs font-bold tracking-[0.2em] border-l-2 border-neutral-100 pl-6">
              <span>EST. 2012</span>
              <span>LONDON</span>
              <span>NEW YORK</span>
              <span>LA</span>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-12">
          <div className="md:col-start-7 md:col-span-5">
            <p className="text-xl md:text-2xl font-light leading-relaxed text-neutral-500">
              Atlas Property Co. is a boutique advisory firm specializing in high-yield, 
              <span className="text-neutral-900 font-medium italic"> trophy assets </span> 
              within the world's most competitive metropolitan landscapes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
