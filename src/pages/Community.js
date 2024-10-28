import styled from 'styled-components';
import { motion } from 'framer-motion';

const CommunityContainer = styled.div`
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

function Community() {
  return (
    <CommunityContainer>
      <Grid>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Join Our Community</h2>
          <p>Connect with fellow JUPAI enthusiasts</p>
        </motion.div>
      </Grid>
    </CommunityContainer>
  );
}

export default Community;
