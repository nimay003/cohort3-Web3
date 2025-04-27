import React from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import {
  WalletConnectButton,
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { Airdrop } from "./Airdrop";
// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';

// Airdrop
function App() {
  return (
    // https://dashboard.alchemy.com/
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/hRy6LWWhmaSJ9x5KvidVRUbl078rHiSq"}> 
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton></WalletMultiButton>
          <WalletDisconnectButton></WalletDisconnectButton>
          <div>
            <b>hi there</b>
          </div>
          <Airdrop></Airdrop>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>

  )
}

export default App
