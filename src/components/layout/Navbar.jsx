import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  height: 80px;
  background: ${props => props.theme.colors.background};
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding: 0 2rem;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  a {
    color: ${props => props.theme.colors.text};
    font-weight: 500;
    transition: color 0.2s ease;

    &:hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`;

const Logo = styled.h1`
  color: ${props => props.theme.colors.text};
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Navbar() {
  return (
    <Nav>
      <NavContainer>
        <StyledLink to="/">
          <Logo>Jiangyue Mao</Logo>
        </StyledLink>
        <NavLinks>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/resume">Resume</StyledLink>
          <StyledLink to="/portfolio">Portfolio</StyledLink>
          <StyledLink to="/photography">Photography</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
}

export default Navbar; 