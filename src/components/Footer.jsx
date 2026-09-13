import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-20 bg-[#030712] text-slate-300 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 mb-12">
          
          {/* Col 1: Brand & Paragraph */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-lg font-bold text-white tracking-tight">
              CS — Ticket System
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Company</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Mission</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Services</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Products & Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Customer Stories</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Download Apps</a></li>
            </ul>
          </div>

          {/* Col 4: Information */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Information</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Join Us</a></li>
            </ul>
          </div>

          {/* Col 5: Social Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-white">Social Links</h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-[10px] font-bold">
                  𝕏
                </div>
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-[10px] font-bold">
                  in
                </div>
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-[10px] font-bold">
                  fb
                </div>
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 text-[10px] font-bold">
                  ✉
                </div>
                <span>support@cst.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-400">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
