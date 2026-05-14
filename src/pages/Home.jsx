
import { useState, useEffect } from 'react';
import { Landmark, FileText, Calendar, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';

import banner1 from '../assets/banner1.jpeg';
import banner2 from '../assets/banner2.jpeg';
import banner3 from '../assets/banner3.jpeg';

const Home = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [banner1, banner2, banner3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Banner & Announcement in dark area */}
      <div className="px-4 pt-2 flex flex-col gap-4">
        {/* Banner Carousel */}
        <div className="w-full h-44 rounded-[2rem] overflow-hidden relative shadow-lg bg-gray-900">
          {banners.map((img, idx) => (
            <img 
              key={idx}
              src={img} 
              alt={`Banner ${idx + 1}`} 
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
                idx === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {banners.map((_, i) => (
              <div 
                key={i} 
                className={`h-1 rounded-full transition-all ${
                  i === currentBanner ? 'w-6 bg-white' : 'w-2 bg-white/40'
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Announcement */}
        <div className="bg-[#1e1e1e] rounded-2xl px-4 py-2.5 flex items-center gap-3 text-sm text-gray-300 overflow-hidden border border-gray-800">
          <Landmark size={18} className="flex-shrink-0 text-primary" />
          <div className="whitespace-nowrap animate-marquee">
            Join Global transfer Investment today and start earning high commissions. Let's move towards a future of sustainable energy together.
          </div>
        </div>
      </div>

      {/* Main Content White Card */}
      <div className="main-content-card mt-6">
        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 row-span-2 bg-[#121212] rounded-[2rem] p-6 flex flex-col justify-between relative overflow-hidden h-44 shadow-lg border border-gray-800">
             <span className="text-2xl font-bold text-white z-10">App</span>
             <div className="absolute right-[-10%] bottom-[-10%] opacity-60">
                <img src="https://cdn-icons-png.flaticon.com/512/2150/2150150.png" width="90" alt="" />
             </div>
          </div>
          
          <Link to="/select-currency" className="bg-[#f3e8ff] rounded-[2rem] p-5 flex flex-col justify-center gap-1 relative overflow-hidden h-20 shadow-md">
             <span className="text-lg font-bold text-[#7c3aed]">Recharge</span>
             <span className="text-[10px] text-[#7c3aed]/60 font-bold uppercase tracking-widest">GO &gt;</span>
             <div className="absolute right-2 bottom-2">
                <img src="https://cdn-icons-png.flaticon.com/512/2489/2489756.png" width="45" alt="" />
             </div>
          </Link>
          
          <div className="grid grid-cols-2 gap-4">
            <Link to="/withdraw" className="bg-[#f0f9ff] rounded-[1.5rem] p-3 flex flex-col items-center justify-center gap-1 shadow-sm border border-blue-50">
               <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                 <Landmark size={22} />
               </div>
               <span className="text-[10px] font-bold text-blue-900 mt-1">Withdraw</span>
            </Link>
            <div className="bg-[#fdf2f8] rounded-[1.5rem] p-3 flex flex-col items-center justify-center gap-1 shadow-sm border border-pink-50">
               <div className="bg-pink-100 p-2 rounded-xl text-pink-600">
                 <FileText size={22} />
               </div>
               <span className="text-[10px] font-bold text-pink-900 mt-1 text-center leading-tight">Company Profile</span>
            </div>
          </div>
        </div>

        {/* Activitys Section */}
        <div className="mt-8">
          <h2 className="text-xl font-extrabold mb-5 px-1">Activitys</h2>
          <div className="flex flex-col gap-4">
            {[
              { title: 'Invite 30 members and complete valid recharge to easily get VIP3 rewards.', reward: '+106.00 USDT', emoji: '😊' },
              { title: 'Invite 5 VIP members to recharge effectively and you can get VIP4 rewards for free.', reward: '+292.00 USDT', emoji: '🤑' }
            ].map((activity, idx) => (
              <div key={idx} className="bg-gray-50 rounded-[2rem] p-5 flex items-center justify-between gap-4 border border-gray-100 shadow-sm">
                <div className="text-4xl bg-white p-3 rounded-2xl shadow-inner">{activity.emoji}</div>
                <div className="flex-grow">
                  <p className="text-[11px] leading-relaxed font-semibold text-gray-700">{activity.title}</p>
                  <button className="mt-3 bg-gray-900 text-white text-[9px] px-4 py-1.5 rounded-full font-bold uppercase tracking-wider">View Tasks</button>
                </div>
                <div className="text-[#10b981] text-sm font-black whitespace-nowrap">{activity.reward}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Floating Side Buttons */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-40">
         <div className="bg-[#d4ff70] p-2.5 rounded-full text-black shadow-xl border-2 border-white/20"><Calendar size={22} strokeWidth={2.5} /></div>
         <div className="bg-[#d4ff70] p-2.5 rounded-full text-black shadow-xl border-2 border-white/20"><Gift size={22} strokeWidth={2.5} /></div>
      </div>
    </div>
  );
};

export default Home;
