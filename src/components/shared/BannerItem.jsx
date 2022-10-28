import { H4, BodyFont } from "../../global-styles/fontStyles";
import styled from "styled-components";
const BannerItem = ({ image, title, description }) => {
  return (
    <ItemContainer>
      <img src={image} alt={title} />
      <TextContainer>
        <H4>{title}</H4>
        <BodyFont>{description}</BodyFont>
      </TextContainer>
    </ItemContainer>
  );
};

export default BannerItem;

const ItemContainer = styled.figure`
  background-color: var(--primary);
  display: flex;
  flex-direction: column;
  max-width: 382px;

  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 0 1rem;

  img {
    width: 5rem;
  }
`;
const TextContainer = styled.figure`
  text-align: center;
  color: var(--white);
  h4 {
    margin-bottom: 1rem;
  }
`;
