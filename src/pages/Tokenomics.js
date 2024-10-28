import styled from 'styled-components';
import { motion } from 'framer-motion';

const TokenomicsContainer = styled.div`
  min-height: 100vh;
  padding: 6rem 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

function Tokenomics() {
  return (
    <TokenomicsContainer>
      <Grid>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Tokenomics</h2>
          <p>Understanding $JUPAI's token distribution</p>
        </motion.div>
      </Grid>
    </TokenomicsContainer>
  );
}

export default Tokenomics;
