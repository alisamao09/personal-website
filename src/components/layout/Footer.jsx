import styled from '@emotion/styled';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  height: 80px;
  background: ${props => props.theme.colors.background};
  border-top: 1px solid rgba(255,255,255,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.text};
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;

  a {
    color: ${props => props.theme.colors.text};
    font-size: 1.5rem;
    transition: color 0.2s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <Copyright>© {new Date().getFullYear()} Jiangyue Mao. All rights reserved.</Copyright>
      <SocialLinks>
        <a 
          href="https://github.com/alisamao09" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/jiangyue-mao-522145199/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
}

export default Footer; 