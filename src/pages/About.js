import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRocket, FaUsers, FaCat, FaInfinity, FaHandshake } from 'react-icons/fa';

const AboutSection = styled.section`
  min-height: 100vh;
  padding: 100px 2rem 2rem 2rem;
  position: relative;
  z-index: 1;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled(motion.div)`
  background: rgba(0, 0, 0, 0.3);
  padding: 2.5rem;
  border-radius: 15px;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  margin-bottom: 2.5rem;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1.5rem;
  font-size: 2.5rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(0, 255, 157, 0.05);
  padding: 1.5rem;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.primary}30;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 255, 157, 0.1);
    transform: translateY(-3px);
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const FeatureTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const Text = styled.p`
  margin-bottom: 1rem;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const CallToAction = styled(motion.div)`
  text-align: center;
  font-size: 2rem;
  margin-top: 3rem;
  padding: 2rem;
  background: ${({ theme }) => theme.colors.gradients.primary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

function About() {
  return (
    <AboutSection>
      <Container>
        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title>About JUPAI</Title>
          <Text>
            Born in the Jupiverse, Jupiter AI Intern ($JUPAI) is the first 
            AI-powered intern learning from the best degens while praising 
            the wisdom of suits.
          </Text>
        </Section>

        <Section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Title>About JUP</Title>
          <Text>
            Jupiter aims to build the everything exchange, push the giant unified market 
            and help to accelerate the decentralized meta. JUP is the crucial resource 
            and alignment mechanism at the heart of it all.
          </Text>
          
          <FeatureGrid>
            <FeatureCard whileHover={{ scale: 1.02 }}>
              <IconWrapper>
                <FaCat /> Certainty
              </IconWrapper>
              <Text>
                From genesis, Jupiter took comprehensive steps to ensure token holder 
                certainty through best-in-class minting documentation, cold wallet controls, 
                and transparent launch processes.
              </Text>
            </FeatureCard>

            <FeatureCard whileHover={{ scale: 1.02 }}>
              <IconWrapper>
                <FaHandshake /> Alignment
              </IconWrapper>
              <Text>
                The 50/50 tokenomics philosophy embodies perfect alignment between team 
                and community, creating a foundation of trust and shared purpose in 
                building Jupiter's future.
              </Text>
            </FeatureCard>

            <FeatureCard whileHover={{ scale: 1.02 }}>
              <IconWrapper>
                <FaUsers /> Transparency
              </IconWrapper>
              <Text>
                Through meticulous documentation, public scrutiny, and inclusive distribution 
                to nearly 1M wallets, Jupiter maintains complete transparency in all operations 
                and token distribution.
              </Text>
            </FeatureCard>

            <FeatureCard whileHover={{ scale: 1.02 }}>
              <IconWrapper>
                <FaInfinity /> Community Trust
              </IconWrapper>
              <Text>
                Building and maintaining trust between early stakeholders is the crucial 
                foundation. Without trust, even the most advanced project cannot succeed - 
                it's like building a skyscraper on tofu.
              </Text>
            </FeatureCard>

            <FeatureCard whileHover={{ scale: 1.02 }}>
              <IconWrapper>
                <FaRocket /> The Journey Ahead
              </IconWrapper>
              <Text>
                We're extremely early in this journey. Through C.A.T. principles 
                (Certainty, Alignment, Transparency), we're building a cohesive 
                community and ecosystem to achieve our lofty goals.
              </Text>
            </FeatureCard>
          </FeatureGrid>
        </Section>

        <CallToAction
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          Do you still want to be a sideliner?
        </CallToAction>
      </Container>
    </AboutSection>
  );
}

export default About;
