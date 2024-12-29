import styled from '@emotion/styled';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled.main`
  min-height: calc(100vh - 160px);
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ContentWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Layout({ children }) {
  return (
    <ContentWrapper>
      <Navbar />
      <Main>{children}</Main>
      <Footer />
    </ContentWrapper>
  );
}

export default Layout; 