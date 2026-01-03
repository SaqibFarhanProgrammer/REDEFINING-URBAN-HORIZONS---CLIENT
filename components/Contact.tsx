
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 md:py-48 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-20">
          <div className="md:col-span-5">
            <span className="text-[#2BC0E4] font-bold tracking-[0.3em] text-[10px] uppercase block mb-6">Get in Touch</span>
            <h2 className="impact-heading text-6xl md:text-8xl leading-none mb-10">THE <br />START OF <br />A LEGACY.</h2>
            <div className="space-y-4">
              <p className="text-lg font-light text-neutral-500">
                Contact our London or Manhattan offices for a private consultation.
              </p>
              <div className="pt-6 space-y-2">
                <p className="font-bold tracking-widest text-xs uppercase">Email: concierge@atlasproperty.co</p>
                <p className="font-bold tracking-widest text-xs uppercase">Phone: +44 (0) 20 7946 0958</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 bg-white p-10 md:p-16 shadow-xl">
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="border-b border-neutral-200 py-2 group focus-within:border-[#2BC0E4] transition-colors">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-none outline-none text-lg font-light" placeholder="John Doe" />
                </div>
                <div className="border-b border-neutral-200 py-2 group focus-within:border-[#2BC0E4] transition-colors">
                  <label className="block text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-none outline-none text-lg font-light" placeholder="john@example.com" />
                </div>
              </div>
              <div className="border-b border-neutral-200 py-2 group focus-within:border-[#2BC0E4] transition-colors">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Interest</label>
                <select className="w-full bg-transparent border-none outline-none text-lg font-light appearance-none">
                  <option>Property Acquisition</option>
                  <option>Portfolio Management</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="border-b border-neutral-200 py-2 group focus-within:border-[#2BC0E4] transition-colors">
                <label className="block text-[10px] font-bold tracking-[0.2em] text-neutral-400 uppercase mb-1">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-none outline-none text-lg font-light resize-none" placeholder="How can we assist you?"></textarea>
              </div>
              <button className="w-full py-6 bg-neutral-900 text-white text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#2BC0E4] transition-all">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
