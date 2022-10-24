import Logo from '../assets/shared/desktop/logo.svg'
import { NavFont } from '../global-styles/fontStyles'
import styled from 'styled-components'
const NavBar = () => {
  return (
    <NavBarContainer >

    <LogoContainer >
    <img src={Logo} alt="logo" />
    </LogoContainer>

    <MenuContainer>
      <NavLink>HOME</NavLink>
      <NavLink>ABOUT US</NavLink>
      <NavLink>CREATE YOUR PLAN</NavLink>
    </MenuContainer>
    </NavBarContainer>
  )
}

export default NavBar

const NavBarContainer = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;


`
const LogoContainer = styled.figure`

`
const MenuContainer = styled.ul`
display: flex;
align-items: center;

`
const NavLink = styled(NavFont)`
margin-left: 1rem;`