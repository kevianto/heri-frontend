
import { NavLink } from 'react-router-dom';
import { Home, Users, Crown, User } from 'lucide-react';

const BottomNav = () => {
  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Team', path: '/team', icon: Users },
    { name: 'VIP', path: '/vip', icon: Crown },
    { name: 'Me', path: '/me', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-[500px] mx-auto bg-[#1a1a1a] border-t border-gray-800 flex justify-around items-center py-3 px-1 z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `flex flex-col items-center justify-center w-full transition-colors ${
              isActive ? 'text-primary' : 'text-gray-500'
            }`
          }
        >
          {({ isActive }) => (
            <>
              <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] mt-1 font-bold">{item.name}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomNav;
