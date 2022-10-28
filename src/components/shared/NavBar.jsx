import Logo from "../../assets/shared/desktop/logo.svg";
import { NavFont } from "../../global-styles/fontStyles";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  function redirectTo(route) {
    navigate(route);
  }

  return (
    <NavBarContainer>
      <LogoContainer onClick={() => redirectTo("/")}>
        <img src={Logo} alt="logo" />
      </LogoContainer>

      <MenuContainer>
        <NavLink onClick={() => redirectTo("/")}>HOME</NavLink>
        <NavLink onClick={() => redirectTo("/about")}>ABOUT US</NavLink>
        <NavLink>CREATE YOUR PLAN</NavLink>
      </MenuContainer>
    </NavBarContainer>
  );
};

export default NavBar;

const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
`;
export const LogoContainer = styled.figure`
  cursor: pointer;
`;
export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
`;
export const NavLink = styled(NavFont)`
  margin-left: 1rem;
`;
