import { useState } from 'react';
import { ChevronLeft, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState([false, false, false]);

  const togglePass = (idx) => {
    const newShowPass = [...showPass];
    newShowPass[idx] = !newShowPass[idx];
    setShowPass(newShowPass);
  };

  return (
    <div className="flex flex-col min-h-screen bg-bg-dark">
      {/* Header */}
      <div className="flex items-center px-4 py-4 border-b border-gray-800">
        <button onClick={() => navigate(-1)} className="p-1">
          <ChevronLeft size={24} />
        </button>
        <h1 className="flex-grow text-center font-bold text-lg mr-6">Change Password</h1>
      </div>

      <div className="p-4 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="bg-white rounded-3xl p-8 w-full flex flex-col gap-6 text-black shadow-2xl">
          <div className="flex flex-col gap-4">
            {[
              { label: 'Old Password', placeholder: 'Old Password' },
              { label: 'New Password', placeholder: 'New Password' },
              { label: 'Reenter new password', placeholder: 'Reenter new password' }
            ].map((field, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex items-center justify-between">
                <input 
                  type={showPass[idx] ? "text" : "password"} 
                  placeholder={field.placeholder} 
                  title={field.label}
                  className="w-full bg-transparent outline-none text-sm font-semibold text-gray-700" 
                />
                <button onClick={() => togglePass(idx)} className="text-gray-400">
                  {showPass[idx] ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            ))}
          </div>

          <button className="w-full bg-primary text-black font-bold py-5 rounded-2xl text-lg shadow-lg mt-4">
             Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
