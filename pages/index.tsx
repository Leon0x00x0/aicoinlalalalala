import type { NextPage } from 'next';
import Head from 'next/head';
import { WalletMultiButton, WalletDisconnectButton } from '@solana/wallet-adapter-react-ui';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Solana Meme Coin Generator</title>
        <meta name="description" content="Solana Meme Coin Generator mit Wallet-Anbindung" />
      </Head>
      <h1>Solana Meme Coin Generator</h1>
      <p>Verbinde deine Wallet, um loszulegen:</p>
      <div className="button-group">
        <WalletMultiButton />
        <WalletDisconnectButton />
      </div>
    </div>
  );
};
export default Home;
