
import { Bell, ChevronDown, Globe } from 'lucide-react';

import logo from '../assets/logo.jpeg';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 sticky top-0 bg-[#121212] z-50 border-b border-gray-800/50">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg border border-white/10 relative">
          <img src={logo} alt="Logo" className="w-full h-full object-contain" />
        </div>
        <span className="font-black text-xl tracking-tighter text-white">Global transfer Investment</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-1 text-[11px] font-black uppercase tracking-widest text-gray-300">
          <Globe size={16} strokeWidth={2.5} className="text-primary" />
          <span>English</span>
          <ChevronDown size={12} strokeWidth={3} />
        </div>
        <div className="relative bg-gray-800/50 p-2 rounded-xl">
          <Bell size={20} strokeWidth={2.5} className="text-gray-300" />
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-600 rounded-full border-2 border-[#121212] animate-pulse"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
