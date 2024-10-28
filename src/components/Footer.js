import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaTwitter, FaDiscord } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FooterContainer = styled.footer`
  padding: 2rem;
  background: ${({ theme }) => theme.colors.background};
  border-top: 1px solid ${({ theme }) => theme.colors.primary}30;
  position: relative;
  z-index: 0;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled(motion.a)`
  color: ${({ theme }) => theme.colors.primary}80;
  font-size: 18px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.primary}40;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.primary}10;
    transform: translateY(-2px);
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <div>
          <h3>$JUPAI</h3>
          <p>The AI-powered intern of the Jupiverse</p>
        </div>
       
        <div>
          <h4>Social</h4>
          <SocialLinks>
            <SocialIcon 
              href="https://twitter.com/JupiterAIIntern" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaTwitter />
            </SocialIcon>
            <SocialIcon 
              href="https://discord.gg/jupiterai" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
            >
              <FaDiscord />
            </SocialIcon>
          </SocialLinks>
        </div>
      </FooterContent>
    </FooterContainer>
  );
}

export default Footer;
