import Logo from "../../assets/shared/desktop/logo.svg";
import { LogoContainer, MenuContainer, NavLink } from "./NavBar";
import styled from "styled-components";
import facebookIcon from "../../assets/shared/desktop/icon-facebook.svg";
import twitterIcon from "../../assets/shared/desktop/icon-twitter.svg";
import instagramIcon from "../../assets/shared/desktop/icon-instagram.svg";
import footerLogo from "../../assets/shared/desktop/logo.svg";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  function redirectTo(route) {
    navigate(route);
  }
  return (
    <FooterContainer>
      <MenuContainer>
        <LogoWrapper onClick={() => redirectTo("/")}>
          <img src={footerLogo} alt="logo" />
        </LogoWrapper>

        <NavLink onClick={() => redirectTo("/")}>HOME</NavLink>
        <NavLink onClick={() => redirectTo("/about")}>ABOUT US</NavLink>
        <NavLink>CREATE YOUR PLAN</NavLink>
      </MenuContainer>

      <IconContainer>
        <img src={facebookIcon} alt="facebook icon" />
        <img src={twitterIcon} alt="twitter icon" />
        <img src={instagramIcon} alt={"instagram icon"} />
      </IconContainer>
    </FooterContainer>
  );
};

export default Footer;
const LogoWrapper = styled(LogoContainer)``;
const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 0 2rem;
  img {
    margin-left: 1rem;
    cursor: pointer;
  }
`;
const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: var(--secondary);
  padding: 1rem;
  margin: 2rem 4rem;
  color: var(--lightGray);
`;
