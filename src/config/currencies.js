import usdtIcon from '../assets/images/currencies/usdt.png';
import ethIcon from '../assets/images/currencies/eth.png';
import solIcon from '../assets/images/currencies/sol.png';
import btcIcon from '../assets/images/currencies/btc.png';
import xrpIcon from '../assets/images/currencies/xrp.png';
import dogeIcon from '../assets/images/currencies/doge.png';

export const currencies = [
  { 
    id: 'trc20',
    name: 'TRC20', 
    icon: usdtIcon, 
    network: 'Tron (TRC20)',
    address: 'TCEuFE31ivsVLoYoe97cJuev4sY6cnxnoz' 
  },
  { 
    id: 'ethereum',
    name: 'Ethereum', 
    icon: ethIcon, 
    network: 'Ethereum (ERC20)',
    address: '0x87da0d61eaf174e938dbb296fb12a2e54fdbb51d' 
  },
  { 
    id: 'solana',
    name: 'Solana', 
    icon: solIcon, 
    network: 'Solana',
    address: 'CTWYGGLfbuSTvLWUby9TE37wumDe4D7YYdrVxjfBcrEM' 
  },
  { 
    id: 'btc',
    name: 'BTC', 
    icon: btcIcon, 
    network: 'Bitcoin',
    address: 'bc1qxm2el79gfm5lwpz6766dq43ypsqurg2g4kl7vaays4sulsxvp3lqxml3l6' 
  },
  { 
    id: 'xrp',
    name: 'XRP', 
    icon: xrpIcon, 
    network: 'XRP Ledger',
    address: 'rBuZfn1m4tA6znziHsRp9AyC1M3qg6rgbF' 
  },
  { 
    id: 'doge',
    name: 'Doge', 
    icon: dogeIcon, 
    network: 'Dogecoin',
    address: 'ACt7EFy5gyD3g4ch2kvHvyuCPyLTPtxYNF' 
  },
];

export const getCurrencyById = (id) => currencies.find(c => c.id === id) || currencies[0];
export const getCurrencyByName = (name) => currencies.find(c => c.name === name) || currencies[0];
