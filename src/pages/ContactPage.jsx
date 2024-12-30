import styled from '@emotion/styled';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  color: ${props => props.theme.colors.text};
  margin-bottom: 3rem;
  text-align: center;
`;

const ContactSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 1rem;
  max-width: 1000px;
  margin: 0 auto;
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