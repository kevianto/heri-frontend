
import { Lock, ChevronsRight } from 'lucide-react';

const Task = () => {
  const tasks = [
    { level: 'VIP0', commission: '$2.00', locked: false },
    { level: 'VIP1', commission: '$9.00', locked: true },
    { level: 'VIP2', commission: '$33.00', locked: true },
    { level: 'VIP3', commission: '$105.00', locked: true },
    { level: 'VIP4', commission: '$360.00', locked: true },
    { level: 'VIP5', commission: '$920.00', locked: true },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#121212]">
      <div className="main-content-card">
        <h1 className="text-2xl font-black mb-6 px-1 tracking-tight text-gray-900">Task Hall</h1>
        
        <div className="grid grid-cols-2 gap-4">
          {tasks.map((task, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-3 flex flex-col gap-3 relative shadow-sm border border-gray-100">
              {/* Top Gray Container for Barrel */}
              <div className="aspect-square bg-gray-100 rounded-[1.8rem] flex items-center justify-center relative overflow-hidden">
                <div className={`relative w-full h-full flex items-center justify-center ${task.locked ? 'opacity-50' : ''}`}>
                  {/* Golden Barrel Placeholder - Using specific transform for 3D look */}
                  <div className="relative w-[75%] h-[75%]">
                     <img 
                      src="https://cdn-icons-png.flaticon.com/512/2830/2830305.png" 
                      alt="Barrel" 
                      className="w-full h-full object-contain brightness-110 drop-shadow-xl"
                      style={{ filter: task.locked ? 'grayscale(1)' : 'sepia(1) saturate(8) hue-rotate(-10deg)' }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                       <span className={`font-black text-xl tracking-tighter drop-shadow-md ${task.locked ? 'text-gray-400' : 'text-black opacity-80'}`}>{task.level}</span>
                    </div>
                  </div>
                </div>
                
                {task.locked && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 p-4 rounded-3xl shadow-xl">
                      <Lock size={32} className="text-gray-900" strokeWidth={2.5} />
                    </div>
                  </div>
                )}
              </div>
              
              {/* Bottom Info Section */}
              <div className="flex flex-col px-1 gap-1">
                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest leading-none">Order commission</span>
                <span className="text-xl font-black text-gray-900 leading-tight">{task.commission}</span>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{task.level}</span>
                  <button className={`p-1.5 rounded-xl transition-all shadow-md active:scale-90 ${task.locked ? 'bg-gray-800 opacity-80' : 'bg-gray-800'}`}>
                    <ChevronsRight size={14} className="text-white" strokeWidth={3} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Task;
