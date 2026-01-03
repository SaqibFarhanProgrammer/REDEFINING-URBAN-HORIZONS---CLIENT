
import React, { useState } from 'react';
import { ACCENT_COLOR } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = ['ABOUT', 'SERVICES', 'PROPERTIES', 'CONTACT'];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" onClick={closeMenu} className="text-xl font-black tracking-tighter impact-heading z-50">
          ATLAS PROPERTY <span className="text-[#2BC0E4]">CO.</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10 items-center">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-xs font-semibold tracking-widest hover:text-[#2BC0E4] transition-colors"
            >
              {item}
            </a>
          ))}
          <a href="#contact" className="bg-neutral-900 text-white px-6 py-2 text-[10px] font-bold tracking-[0.2em] hover:bg-[#2BC0E4] transition-all">
            INQUIRE
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={toggleMenu}
          className="md:hidden z-50 p-2 text-neutral-900"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
          <nav className="flex flex-col items-center gap-8">
            {navItems.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="impact-heading text-4xl font-bold hover:text-[#2BC0E4] transition-colors"
              >
                {item}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={closeMenu}
              className="mt-4 bg-neutral-900 text-white px-10 py-4 text-xs font-bold tracking-[0.2em] hover:bg-[#2BC0E4] transition-all"
            >
              INQUIRE NOW
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
