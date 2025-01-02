import styled from '@emotion/styled';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: #121212;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('${import.meta.env.BASE_URL}assets/background.jpg');
    background-size: cover;
    background-position: center 40%;
    opacity: 0.3;
    z-index: -1;
  }
`;

const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const ProfileImage = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 0 auto 2rem;
  overflow: hidden;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 2rem;
`;

const Description = styled.div`
  color: ${props => props.theme.colors.text};
  line-height: 1.8;
  font-size: 1.1rem;
  max-width: 800px;
  margin: 2rem auto;
  padding: 2.5rem;
  background: rgba(32, 32, 32, 0.6);
  border-radius: 12px;
  box-shadow: ${props => props.theme.shadows.md};
  text-align: left;

  p {
    margin-bottom: 1rem;
    padding: 0 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

function HomePage() {
  console.log('HomePage is rendering');
  return (
    <>
      <BackgroundContainer />
      <PageWrapper>
        <Navbar />
        <MainContent>
          <ProfileImage>
            <Image 
              src={`${import.meta.env.BASE_URL}assets/profile.jpg`}
              alt="Jiangyue Mao" 
              loading="eager"
            />
          </ProfileImage>
          <Title>Hi, welcome to my world!</Title>
          <Subtitle>Engineer. Designer. Innovator.</Subtitle>
          <Description>
            <p>
              I'm Jiangyue Mao, a passionate engineer with a proven track record of delivering scalable solutions in fast-paced environments. 
              With an MSc in Data Science from the University of Michigan and a BA from University of Toronto, I thrive at the intersection of engineering, design, art, and data.
            </p>
          </Description>
        </MainContent>
        <Footer />
      </PageWrapper>
    </>
  );
}

export default HomePage; 