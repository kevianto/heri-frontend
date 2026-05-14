import { useState } from 'react';
import { ChevronLeft, Info, CheckCircle2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getCurrencyById } from '../config/currencies';

import logo from '../assets/logo.jpeg';

const Recharge = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const currencyData = getCurrencyById(location.state?.currencyId);
  const { name, network, address } = currencyData;

  const handleRechargeComplete = () => {
    setShowSuccessModal(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#121212] text-white relative">
      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowSuccessModal(false)}></div>
          <div className="bg-white rounded-[3rem] p-10 flex flex-col items-center text-center gap-6 relative z-10 w-full max-w-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500 shadow-inner">
               <CheckCircle2 size={60} strokeWidth={2.5} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Submitted!</h3>
              <p className="text-gray-500 text-xs font-bold leading-relaxed">Your recharge request is being processed. Funds will arrive in your account in 1 to 3 minutes.</p>
            </div>
            <button 
              onClick={() => {
                setShowSuccessModal(false);
                navigate('/me');
              }}
              className="w-full bg-[#ffcc80] text-black font-black py-5 rounded-[1.5rem] text-lg shadow-xl shadow-[#ffcc80]/20 active:scale-95 transition-transform uppercase tracking-widest mt-2"
            >
              Done
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="flex items-center px-4 py-5 border-b border-gray-800 sticky top-0 bg-[#121212] z-50">
        <button onClick={() => navigate(-1)} className="p-1 active:scale-90 transition-transform">
          <ChevronLeft size={24} strokeWidth={3} />
        </button>
        <h1 className="flex-grow text-center font-black text-lg mr-6 uppercase tracking-wider">Recharge</h1>
      </div>

      <div className="main-content-card">
        {/* Wallet Address Section */}
        <div className="bg-gray-50 rounded-[2.5rem] p-8 flex flex-col items-center gap-8 text-black shadow-inner border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg border border-gray-100">
               <img src={logo} alt="Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-black text-base uppercase tracking-tight">Global transfer Investment</span>
          </div>

          <div className="w-full bg-white rounded-2xl p-4 flex flex-col gap-2 shadow-sm border border-gray-200">
            <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{name} Address</span>
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] text-gray-800 truncate flex-grow font-black">{address}</span>
              <button 
                onClick={() => {
                  navigator.clipboard.writeText(address);
                  alert('Address copied to clipboard');
                }}
                className="bg-gray-900 text-white px-5 py-2 rounded-xl text-xs font-black uppercase whitespace-nowrap active:scale-90 transition-transform shadow-lg shadow-black/20"
              >
                Copy
              </button>
            </div>
          </div>

          <button 
            onClick={handleRechargeComplete}
            className="w-full bg-[#ffcc80] text-black font-black py-5 rounded-[1.5rem] text-lg shadow-xl shadow-[#ffcc80]/20 active:scale-95 transition-transform uppercase tracking-widest"
          >
             Recharge completed
          </button>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-[2.5rem] p-8 text-black flex flex-col gap-6 mt-8 shadow-md border border-gray-50 mb-10">
          <div className="flex items-center gap-3 text-gray-400 font-black text-sm uppercase tracking-widest">
             <div className="bg-gray-100 p-2 rounded-xl">
               <Info size={18} strokeWidth={3} />
             </div>
             <span>Instructions</span>
          </div>
          <ol className="flex flex-col gap-5 text-xs text-gray-600 leading-relaxed font-semibold">
            <li className="flex gap-3">
              <span className="text-gray-900 font-black">1.</span>
              <span>Copy the address above or scan the QR code and select the <span className="text-gray-900 font-black">{network}</span> network to deposit assets.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-900 font-black">2.</span>
              <span>Please do not recharge other non-{name} assets, the funds will arrive in your account in 1 to 3 minutes.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-gray-900 font-black">3.</span>
              <span>If it does not arrive for a long time, please refresh the page or contact customer service.</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Recharge;
