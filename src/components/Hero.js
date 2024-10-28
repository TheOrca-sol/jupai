import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import { FaTwitter, FaDiscord } from 'react-icons/fa';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  z-index: 0;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at center, 
      ${({ theme }) => theme.colors.primary}20 0%,
      transparent 70%);
    z-index: -1;
  }
`;

const Content = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Title = styled(motion.h1)`
  font-size: clamp(2.5rem, 8vw, 4rem);
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Subtitle = styled(motion.p)`
  font-size: clamp(1rem, 4vw, 1.2rem);
  margin-bottom: 2rem;
  opacity: 0.8;
`;

const LearnMoreButton = styled(motion.button)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 30px;
  cursor: pointer;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const FloatingJupiter = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradients.primary};
  filter: blur(60px);
  opacity: 0.3;
  z-index: -1;
`;

const SocialLinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
`;

const SocialIcon = styled(motion.a)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 24px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary}20;
  }
`;

const ContractAddress = styled.p`
  text-align: center;
  font-family: 'Courier New', monospace;
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
`;

const BuyButton = styled(motion.a)`
  padding: 1rem 2rem;
  font-size: 1.1rem;
  background: ${({ theme }) => theme.colors.gradients.primary};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 30px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

function Hero() {
  return (
    <HeroSection>
      <FloatingJupiter
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <Content>
        <Title
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to Jupiter AI Intern
        </Title>
        
        <Subtitle
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The first AI-powered intern in the Jupiverse, learning from degens and praising suits
        </Subtitle>
        
        <SocialLinksContainer>
          
          
          <BuyButton 
            as="button"
            onClick={() => {
              if (window.Jupiter) {
                window.Jupiter.resume();
              }
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Buy $JUPAI
          </BuyButton>
        </SocialLinksContainer>

        <ContractAddress>
          CA: Coming soon...
        </ContractAddress>
      </Content>
    </HeroSection>
  );
}

export default Hero;
