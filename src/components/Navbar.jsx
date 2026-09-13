import React, { useState } from 'react';
import { Menu, X, Plus } from 'lucide-react';

export default function Navbar({ onOpenNewTicket }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo & Title with Pink Dot */}
          <div className="flex items-center space-x-2">
            <a href="#" className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight flex items-center">
              <span>CS — Ticket System</span>
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 ml-1.5 -mt-3 animate-pulse inline-block" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="#" className="hover:text-slate-900 transition-colors">FAQ</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Changelog</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Blog</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Download</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </nav>

          {/* New Ticket Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenNewTicket}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-lg bg-[#8b5cf6] hover:bg-[#7c3aed] text-white font-medium text-sm transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              <Plus className="w-4 h-4 stroke-[2.5]" />
              <span>New Ticket</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenNewTicket}
              className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-[#8b5cf6] text-white text-xs font-medium"
            >
              <Plus className="w-4 h-4" />
              <span>New Ticket</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Home
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            FAQ
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Changelog
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Blog
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Download
          </a>
          <a
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-slate-100"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
