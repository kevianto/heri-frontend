import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { currencies } from '../config/currencies';

const SelectCurrency = () => {
  const navigate = useNavigate();
  
  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <div className="flex items-center px-4 py-5 border-b border-gray-800 sticky top-0 bg-[#121212] z-50">
        <button onClick={() => navigate(-1)} className="p-1 active:scale-90 transition-transform">
          <ChevronLeft size={24} strokeWidth={3} />
        </button>
        <h1 className="flex-grow text-center font-black text-lg mr-6 uppercase tracking-wider">Select the recharge currency</h1>
      </div>

      <div className="main-content-card !p-2">
        <div className="flex flex-col">
          {currencies.map((curr) => (
            <button 
              key={curr.id}
              onClick={() => navigate('/recharge', { state: { currencyId: curr.id } })}
              className="flex items-center justify-between p-5 border-b border-gray-50 last:border-b-0 active:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="bg-gray-100 p-2 rounded-xl">
                   <img src={curr.icon} alt={curr.name} className="w-8 h-8 object-contain" />
                </div>
                <span className="font-black text-sm text-gray-800 tracking-tight">{curr.name}</span>
              </div>
              <ChevronRight size={20} className="text-gray-300" strokeWidth={3} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectCurrency;
