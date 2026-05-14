
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Team from './pages/Team';
import VIP from './pages/VIP';
import Me from './pages/Me';
import Recharge from './pages/Recharge';
import Withdraw from './pages/Withdraw';
import ChangePassword from './pages/ChangePassword';

import SelectCurrency from './pages/SelectCurrency';

import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="vip" element={<VIP />} />
        <Route path="me" element={<Me />} />
        <Route path="select-currency" element={<SelectCurrency />} />
        <Route path="recharge" element={<Recharge />} />
        <Route path="withdraw" element={<Withdraw />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
