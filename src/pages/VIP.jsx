
import { Crown } from 'lucide-react';

const VIP = () => {
  const vips = [
    { level: 'VIP0', price: '$0.00', daily: '$2.00', total: '$730.00', days: '365' },
    { level: 'VIP1', price: '$30.00', daily: '$9.00', total: '$3,285.00', days: '365' },
    { level: 'VIP2', price: '$110.00', daily: '$33.00', total: '$12,045.00', days: '365' },
    { level: 'VIP3', price: '$350.00', daily: '$105.00', total: '$38,325.00', days: '365' },
    { level: 'VIP4', price: '$1,200.00', daily: '$360.00', total: '$131,400.00', days: '365' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <div className="main-content-card">
        <h1 className="text-2xl font-black mb-6 px-1">VIP Membership</h1>
        
        <div className="flex flex-col gap-6 pb-10">
          {vips.map((vip, idx) => (
            <div key={idx} className="bg-gray-50 rounded-[2.5rem] p-8 flex flex-col gap-6 relative overflow-hidden shadow-lg border border-gray-100">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="bg-primary p-3 rounded-2xl text-black shadow-lg">
                    <Crown size={28} strokeWidth={2.5} />
                  </div>
                  <span className="text-3xl font-black tracking-tighter">{vip.level}</span>
                </div>
                <div className="bg-gray-900 px-6 py-2 rounded-full text-xs font-black text-primary shadow-lg border border-primary/20">
                  {vip.price}
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-2">
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Daily Profit</span>
                  <span className="text-xl font-black text-green-600 tracking-tighter">{vip.daily}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Total Profit</span>
                  <span className="text-xl font-black text-gray-900 tracking-tighter">{vip.total}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Validity Period</span>
                  <span className="text-sm font-black text-gray-700">{vip.days} Days</span>
                </div>
              </div>
              
              <button className="w-full bg-[#ffcc80] text-black font-black py-4 rounded-[1.5rem] mt-2 flex items-center justify-center gap-2 shadow-xl shadow-[#ffcc80]/20 active:scale-95 transition-transform uppercase tracking-widest text-sm">
                 <span>Purchase Now</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VIP;
