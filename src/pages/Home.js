import styled from 'styled-components';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import SpaceBackground from '../components/SpaceBackground';

const HomeContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

function Home() {
  return (
    <HomeContainer>
      <SpaceBackground />
      <Hero />
    </HomeContainer>
  );
}

export default Home;
