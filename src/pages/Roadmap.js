import styled from 'styled-components';
import { motion } from 'framer-motion';

const RoadmapSection = styled.section`
  min-height: 100vh;
  padding: 100px 2rem 2rem 2rem; // Added top padding to account for navbar
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`;

function Roadmap() {
  return (
    <RoadmapSection>
      <Container>
        <Grid>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2>Roadmap</h2>
            {/* Your roadmap content */}
          </motion.div>
        </Grid>
      </Container>
    </RoadmapSection>
  );
}

export default Roadmap;
