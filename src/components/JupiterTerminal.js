import { useEffect, useState } from 'react';
import styled from 'styled-components';

const TerminalWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 999999;
  pointer-events: auto;
  width: 56px;
  height: 56px;
`;

function JupiterTerminal() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const checkJupiterLoaded = setInterval(() => {
      if (typeof window !== 'undefined' && window.Jupiter) {
        setIsScriptLoaded(true);
        clearInterval(checkJupiterLoaded);
      }
    }, 100);

    return () => clearInterval(checkJupiterLoaded);
  }, []);

  useEffect(() => {
    if (isScriptLoaded && !window.Jupiter._instance) {
      try {
        window.Jupiter.init({
          displayMode: 'widget',
          endpoint: 'https://mainnet.helius-rpc.com/?api-key=d8d8052a-72db-4652-8942-9ae97f24cdec',
          strictTokenList: false,
          defaultExplorer: 'Solana Explorer',
          containerStyles: {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 999999,
          },
          onSuccess: ({ txid }) => {
            console.log('Swap successful:', txid);
          },
        });
      } catch (error) {
        console.error('Error initializing Jupiter:', error);
      }
    }
  }, [isScriptLoaded]);

  return <TerminalWrapper id="jupiter-terminal" />;
}

export default JupiterTerminal;
