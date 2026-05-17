import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { MapPin, Phone, Mail, Briefcase, Share2, Camera, MessageSquare, PlayCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-brand-deep to-brand-navy text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        {/* Top Centered Logo */}
        <div className="flex flex-col items-center mb-12">
          <Logo className="mb-6 scale-110" />
          <div className="w-full max-w-2xl h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Contact Hub */}
          <div className="space-y-6">
            <h3 className="text-lg font-serif font-bold text-gold mb-6">Contact Hub</h3>
            <div className="flex flex-col gap-4">
              <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="flex items-start gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                  <MapPin className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm mt-1 leading-relaxed">No 400, Deans Road,<br />Colombo 10, Sri Lanka</span>
              </a>
              <a href="tel:+94112627000" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                  <Phone className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm">011 2 627 000</span>
              </a>
              <a href="mailto:info@cau.bashwara.com" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group">
                <div className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
                  <Mail className="w-5 h-5 text-gold" />
                </div>
                <span className="text-sm">info@cau.bashwara.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Sitemap A */}
          <div>
            <h3 className="text-lg font-serif font-bold text-gold mb-6">Explore</h3>
            <ul className="space-y-4">
              {['About Us', 'Our Sectors', 'Investor Relations', 'ESG'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/\s+/g, '-')}`} className="text-white/80 hover:text-gold text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Sitemap B */}
          <div>
            <h3 className="text-lg font-serif font-bold text-gold mb-6">Information</h3>
            <ul className="space-y-4">
              {['Careers', 'News & Media', 'FAQ', 'Contact Us'].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/\s+/g, '-')}`} className="text-white/80 hover:text-gold text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Social Matrix */}
          <div>
            <h3 className="text-lg font-serif font-bold text-gold mb-6">Connect With Us</h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Briefcase, href: '#' },
                { icon: Share2, href: '#' },
                { icon: Camera, href: '#' },
                { icon: MessageSquare, href: '#' },
                { icon: PlayCircle, href: '#' },
                { icon: MapPin, href: '#' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-white/20 hover:border-gold hover:bg-gold/10 hover:-translate-y-1 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5 text-white hover:text-gold transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/50 text-center lg:text-left">
            &copy; {new Date().getFullYear()} Bashwara & Company (Pvt) Ltd. | All Rights Reserved. Concept & Design by HBSI
          </p>
          <div className="flex items-center gap-6 text-xs text-white/60 flex-wrap justify-center">
            {['Cookie Policy', 'Privacy Notice', 'Terms & Conditions', 'Sitemap'].map((item) => (
              <Link key={item} href="#" className="hover:text-gold transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
