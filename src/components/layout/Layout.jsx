import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import Navbar from './Navbar';
import Footer from './Footer';

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Layout() {
  return (
    <LayoutContainer>
      <Navbar />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
}

export default Layout; 