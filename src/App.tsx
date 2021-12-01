import {
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { Wallet } from './context/wallet';
import { Hello } from './components/hello';

import './App.css';

function App() {
  return (
    <Wallet>
      <div className='App'>
        <Hello />
        <WalletMultiButton style={{ margin: '5px' }} />
        <WalletDisconnectButton style={{ margin: '5px' }} />
      </div>
    </Wallet>
  );
}

export default App;
