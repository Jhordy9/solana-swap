import { Swap as SwapComponent } from '@project-serum/swap-ui';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Provider } from '@project-serum/anchor';
import {
  TokenListProvider,
  TokenListContainer,
} from '@solana/spl-token-registry';
import { useEffect, useState } from 'react';

export const Swap = () => {
  const [tokenList, setTokenList] = useState<TokenListContainer | null>(null);
  const { signTransaction, signAllTransactions, publicKey } = useWallet();
  const { connection } = useConnection();

  useEffect(() => {
    new TokenListProvider().resolve().then(setTokenList);
  }, [setTokenList]);

  if (!publicKey || !signTransaction || !signAllTransactions || !tokenList)
    return <div />;

  const provider = new Provider(
    connection,
    { publicKey: publicKey, signAllTransactions, signTransaction },
    {}
  );
  return <SwapComponent provider={provider} tokenList={tokenList} />;
};
