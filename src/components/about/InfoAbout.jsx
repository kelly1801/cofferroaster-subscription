import styled from "styled-components";
import infoImg from "../../assets/about/desktop/image-commitment.jpg";
import { H2, BodyFont } from "../../global-styles/fontStyles";
const InfoAbout = () => {
  return (
    <InfoContainer>
      <img src={infoImg} alt="values" />
      <TextWrapper>
        <H2>Our commitment</H2>
        <BodyFont>
          We’re built on a simple mission and a commitment to doing good along
          the way. We want to make it easy for you to discover and brew the
          world’s best coffee at home. It all starts at the source. To locate
          the specific lots we want to purchase, we travel nearly 60 days a year
          trying to understand the challenges and opportunities in each of these
          places. We collaborate with exceptional coffee growers and empower a
          global community of farmers through with well above fair-trade
          benchmarks. We also offer training, support farm community
          initiatives, and invest in coffee plant science. Curating only the
          finest blends, we roast each lot to highlight tasting profiles
          distinctive to their native growing region.
        </BodyFont>
      </TextWrapper>
    </InfoContainer>
  );
};

export default InfoAbout;

const InfoContainer = styled.figure`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    border-radius: 1rem;
  }
`;
const TextWrapper = styled.figcaption`
  margin: 2rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  justify-content: space-between;

  h2 {
    margin: 3rem 0;
  }
`;
