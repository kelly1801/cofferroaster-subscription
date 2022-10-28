import styled from "styled-components";
import { H2, BodyFont } from "../../global-styles/fontStyles";
import Button from "./Button";
const Header = ({
  desktopImg,
  mobileImg,
  tabletImg,
  title,
  description,
  btnText,
}) => {
  return (
    <HeaderContainer>
      <TextContainer>
        <H2>{title}</H2>
        <BodyFont>{description}</BodyFont>
        {btnText && <Button>{btnText}</Button>}
      </TextContainer>

      <HeaderBg>
        <source media="(min-width:768px)" srcSet={tabletImg} />
        <source media="(min-width:480px)" srcSet={mobileImg} />

        <img src={desktopImg} alt="" />
      </HeaderBg>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.figure`
  display: flex;
  border-radius: 1rem;
  overflow: hidden;
  margin: 2rem 0;
  height: 100%;
  max-height: 450px;
  color: var(--white);
  position: relative;
`;
const HeaderBg = styled.picture`
  img {
    width: 100%;
    object-position: center;
    object-fit: cover;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    z-index: 1;
  }
`;

const TextContainer = styled.div`
  position: Absolute;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  width: 350px;
  text-align: left;
  height: 100%;
  margin: 0 2rem;
  z-index: 5;
`;
