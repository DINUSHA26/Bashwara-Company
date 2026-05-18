'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { MegaMenu } from './MegaMenu';
import { AboutMegaMenu } from './AboutMegaMenu';
import { MobileDrawer } from './MobileDrawer';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { 
    name: 'About Us', 
    href: '/about', 
    hasDropdown: true,
    isAbout: true,
    subLinks: [
      { name: 'Vision & Mission', href: '/about/vision-mission' },
      { name: 'Leadership Profile', href: '/about/leadership' },
      { name: 'Our History', href: '/about/history' },
      { name: 'Our Partners', href: '/about/partners' },
    ]
  },
  { name: 'Our Sectors', href: '/sectors', hasDropdown: true, isSectors: true },
  { name: 'Investor Relations', href: '/investor-relations', hasDropdown: true },
  { name: 'ESG', href: '/esg' },
  { name: 'Careers', href: '/careers', hasDropdown: true },
  { name: 'News & Media', href: '/news' },
  { name: 'Contact Us', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === '/';

  // List of primary pages that have full-screen dark-overlay hero backgrounds
  const pathsWithHero = [
    '/',
    '/about',
    '/sectors',
    '/investor-relations',
    '/esg',
    '/careers',
    '/news',
    '/contact'
  ];

  // Also check dynamic sector pages: /sectors/[sector]
  const isSectorDetail = pathname.startsWith('/sectors/') && pathname.split('/').length === 3;
  const hasHero = pathsWithHero.includes(pathname) || isSectorDetail;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns immediately when the page route changes
  useEffect(() => {
    setActiveMenu(null);
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        onMouseLeave={() => setActiveMenu(null)}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled || activeMenu || isMobileOpen || !hasHero
            ? 'bg-brand-navy/95 backdrop-blur-md border-b border-white/10 py-3 shadow-lg'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          
          {/* Mobile view Logo on left, Hamburger on right */}
          <div className="lg:hidden flex items-center justify-between w-full z-50">
            <Logo />
            <button
              className="p-2 text-white hover:text-gold transition-colors min-h-[48px] min-w-[48px] flex items-center justify-center"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Split Layout */}
          <div className="hidden lg:flex items-center justify-between w-full">
            
            {/* Left Nav Links (Home to Investor Relations) */}
            <nav className="flex items-center gap-6 flex-1 justify-end pr-8">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.isSectors ? setActiveMenu('sectors') : link.isAbout ? setActiveMenu('about') : setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="text-white/90 hover:text-white text-sm font-medium tracking-wide flex items-center gap-1 py-2"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </div>
              ))}
            </nav>

            {/* Center Logo */}
            <div className="flex-shrink-0 z-50 px-8">
              <Logo />
            </div>

            {/* Right Nav Links (ESG to Contact Us + Search) */}
            <nav className="flex items-center gap-6 flex-1 justify-start pl-8">
              {NAV_LINKS.slice(4).map((link) => (
                <div
                  key={link.name}
                  className="relative group"
                  onMouseEnter={() => link.isSectors ? setActiveMenu('sectors') : link.isAbout ? setActiveMenu('about') : setActiveMenu(null)}
                >
                  <Link
                    href={link.href}
                    onClick={() => setActiveMenu(null)}
                    className="text-white/90 hover:text-white text-sm font-medium tracking-wide flex items-center gap-1 py-2"
                  >
                    {link.name}
                    {link.hasDropdown && (
                      <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  />
                </div>
              ))}

              {/* Clean search element */}
              <button className="p-2 hover:text-gold transition-colors text-white ml-2" aria-label="Search">
                <Search className="w-5 h-5" />
              </button>
            </nav>

          </div>
        </div>

        {/* Desktop Mega Menu Overlay */}
        <div className="hidden lg:block">
          <MegaMenu 
            isOpen={activeMenu === 'sectors'} 
            onMouseLeave={() => setActiveMenu(null)} 
            onLinkClick={() => setActiveMenu(null)} 
          />
          <AboutMegaMenu 
            isOpen={activeMenu === 'about'} 
            onMouseLeave={() => setActiveMenu(null)} 
            onLinkClick={() => setActiveMenu(null)} 
          />
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileDrawer isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} navLinks={NAV_LINKS} />
    </>
  );
}
