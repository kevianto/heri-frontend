
import { Calendar } from 'lucide-react';

const Team = () => {
  const stats = [
    { label: 'Team size', value: '0' },
    { label: 'Team recharge', value: '$0.00' },
    { label: 'Team Withdrawal', value: '$0.00' },
    { label: 'New team', value: '0' },
    { label: 'First time recharge', value: '0' },
    { label: 'First withdrawal', value: '0' },
  ];

  const levels = [
    { level: 'LEVEL 1', register: '0/0', commission: '10%', income: '0', gradient: 'level-1-gradient' },
    { level: 'LEVEL 2', register: '0/0', commission: '3%', income: '0', gradient: 'level-2-gradient' },
    { level: 'LEVEL 3', register: '0/0', commission: '1%', income: '0', gradient: 'level-3-gradient' },
  ];

  const socialIcons = [
    'https://cdn-icons-png.flaticon.com/512/733/733579.png',
    'https://cdn-icons-png.flaticon.com/512/733/733547.png',
    'https://cdn-icons-png.flaticon.com/512/2111/2111646.png',
    'https://cdn-icons-png.flaticon.com/512/145/145807.png',
    'https://cdn-icons-png.flaticon.com/512/733/733585.png',
    'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
    'https://cdn-icons-png.flaticon.com/512/3046/3046121.png',
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="main-content-card">
        {/* Invitation Section */}
        <div className="bg-gray-50 rounded-[2.5rem] p-8 text-black flex flex-col items-center gap-6 text-center shadow-inner border border-gray-100">
          <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-lg transform -rotate-3">
             <img src="https://cdn-icons-png.flaticon.com/512/4213/4213958.png" alt="Gift" className="w-16 animate-pulse" />
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-400 text-xs font-black uppercase tracking-widest">Invitation code</span>
            <div className="flex items-center gap-3 bg-white px-6 py-2 rounded-2xl shadow-sm border border-gray-100">
              <span className="text-4xl font-black tracking-tighter">2h8nzh</span>
              <button className="bg-gray-900 text-white px-5 py-2 rounded-xl text-xs font-black uppercase tracking-wider active:scale-90 transition-transform">Copy</button>
            </div>
          </div>
          <p className="text-gray-400 text-[11px] font-bold leading-relaxed px-4">Share your referral link and start earning high commissions today!</p>
          <div className="w-full bg-white rounded-[1.5rem] p-4 flex items-center justify-between gap-3 shadow-sm border border-gray-100">
             <span className="text-[10px] text-gray-400 truncate flex-grow font-bold">https://t.me/OEUuuulbot?start=i...</span>
             <button className="bg-gray-900 text-white px-6 py-2 rounded-xl text-xs font-black uppercase whitespace-nowrap active:scale-95">Copy</button>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-2">
             {socialIcons.map((url, idx) => (
               <div key={idx} className="bg-white p-2 rounded-xl shadow-sm border border-gray-50 hover:scale-110 transition-transform cursor-pointer">
                 <img src={url} alt="social" className="w-6 h-6 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
               </div>
             ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-[#121212] rounded-[2.5rem] p-8 flex flex-col gap-8 mt-8 shadow-2xl border border-gray-800">
          <div className="flex items-center gap-3 text-sm font-black text-white uppercase tracking-widest">
             <div className="bg-red-500/20 p-2 rounded-xl">
               <Calendar size={20} className="text-red-500" />
             </div>
             <span>Selection period</span>
          </div>
          
          <div className="grid grid-cols-3 gap-y-10 gap-x-4 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-[10px] text-gray-500 font-black uppercase leading-tight tracking-wider">{stat.label}</span>
                <span className="text-xl font-black text-white tracking-tighter">{stat.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Levels Section */}
        <div className="grid grid-cols-3 gap-4 mt-8 pb-10">
          {levels.map((lvl, idx) => (
            <div key={idx} className={`${lvl.gradient} rounded-[2rem] p-5 flex flex-col gap-6 relative overflow-hidden min-h-[250px] shadow-xl text-white`}>
              <div className="absolute top-5 left-[-15px] bg-white/20 backdrop-blur-md text-[9px] font-black px-6 py-1.5 rotate-[-45deg] uppercase tracking-widest shadow-lg">
                 {lvl.level}
              </div>
              <div className="flex flex-col items-center text-center mt-10 gap-5">
                <div className="flex flex-col">
                  <span className="text-[9px] font-black opacity-70 uppercase tracking-widest">Register/Valid</span>
                  <span className="text-2xl font-black">{lvl.register}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black opacity-70 uppercase tracking-widest leading-tight">Commission %</span>
                  <span className="text-2xl font-black">{lvl.commission}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[9px] font-black opacity-70 uppercase tracking-widest">Total Income</span>
                  <span className="text-2xl font-black">{lvl.income}</span>
                </div>
                <button className="mt-2 bg-white text-gray-900 text-[10px] font-black py-2 px-8 rounded-full uppercase tracking-wider shadow-lg active:scale-90 transition-transform">Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
