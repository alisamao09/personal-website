import styled from '@emotion/styled';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
  text-align: center;
`;

const ContactSection = styled.div`
  background-color: ${props => props.theme.colors.surface};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadows.md};
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.glow};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const Icon = styled.div`
  color: ${props => props.theme.colors.primary};
  font-size: 1.5rem;
  width: 2rem;
`;

const ContactLink = styled.a`
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.theme.colors.accent};
  }
`;

const ContactText = styled.div`
  h3 {
    color: ${props => props.theme.colors.textDark};
    margin-bottom: 0.25rem;
    font-size: 1.1rem;
  }
`;

function ContactPage() {
  return (
    <Container>
      <Title>Contact Me</Title>
      <ContactSection>
        <ContactItem>
          <Icon>
            <FaEnvelope />
          </Icon>
          <ContactText>
            <h3>Email</h3>
            <ContactLink href="mailto:alisamao0205@gmail.com">
              alisamao0205@gmail.com
            </ContactLink>
          </ContactText>
        </ContactItem>

        <ContactItem>
          <Icon>
            <FaPhone />
          </Icon>
          <ContactText>
            <h3>Phone</h3>
            <ContactLink href="tel:+17343538253">
              (734) 353-8253
            </ContactLink>
          </ContactText>
        </ContactItem>

        <ContactItem>
          <Icon>
            <FaLinkedin />
          </Icon>
          <ContactText>
            <h3>LinkedIn</h3>
            <ContactLink 
              href="https://www.linkedin.com/in/jiangyue-mao-522145199/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Jiangyue Mao
            </ContactLink>
          </ContactText>
        </ContactItem>

        <ContactItem>
          <Icon>
            <FaGithub />
          </Icon>
          <ContactText>
            <h3>GitHub</h3>
            <ContactLink 
              href="https://github.com/alisamao09" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              alisamao09
            </ContactLink>
          </ContactText>
        </ContactItem>
      </ContactSection>
    </Container>
  );
}

export default ContactPage; 