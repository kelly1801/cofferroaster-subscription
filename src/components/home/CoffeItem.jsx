import { H3, BodyFont } from "../../global-styles/fontStyles";
import styled from "styled-components";
const CoffeItem = ({ coffeImg, coffeTitle, coffeDescription }) => {
  return (
    <ImageContainer>
      <img src={coffeImg} alt={coffeTitle} />
      <TextContainer>
        <H3>{coffeTitle}</H3>
        <BodyFont>{coffeDescription}</BodyFont>
      </TextContainer>
    </ImageContainer>
  );
};

export default CoffeItem;

const ImageContainer = styled.figure`
  width: calc(100% / 4);
  margin-top: -6rem;

  padding: 2rem;
  z-index: 1;
  img {
    width: 100%;
    margin: 1rem;
  }
`;
const TextContainer = styled.figcaption`
  text-align: center;
  ${H3} {
    margin: 1rem 0;
  }
`;
