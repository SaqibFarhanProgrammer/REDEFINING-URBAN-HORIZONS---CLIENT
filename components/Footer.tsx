
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 bg-white border-t border-neutral-100 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-xl font-black tracking-tighter impact-heading">
          ATLAS PROPERTY <span className="text-[#2BC0E4]">CO.</span>
        </div>
        
        <div className="flex gap-10">
          <a href="#" className="text-[10px] font-bold tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors uppercase underline-offset-4 underline">Instagram</a>
          <a href="#" className="text-[10px] font-bold tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors uppercase underline-offset-4 underline">LinkedIn</a>
          <a href="#" className="text-[10px] font-bold tracking-widest text-neutral-400 hover:text-neutral-900 transition-colors uppercase underline-offset-4 underline">Twitter</a>
        </div>

        <p className="text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
          &copy; 2024 ATLAS PROPERTY CO. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
