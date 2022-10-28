import styled from "styled-components";
import QualityImg from "../../assets/about/desktop/image-quality.jpg";
import bgImg from "../../assets/about/desktop/bg-quality.png";
import { H2, BodyFont } from "../../global-styles/fontStyles";
import mediumImg from "../../assets/about/tablet/image-quality.jpg";
import smallImg from "../../assets/about/mobile/image-quality.jpg";

const CallToAbout = () => {
  return (
    <ContentWrapper bgImage={bgImg}>
      <TextContainer>
        <H2>Uncompromising quality</H2>
        <BodyFont>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </BodyFont>
      </TextContainer>
      <img src={QualityImg} alt="quality" />
    </ContentWrapper>
  );
};
export default CallToAbout;

const ContentWrapper = styled.figure`
  color: var(--white);
  border-radius: 0.5rem;

  padding: 2rem 3rem;
  background-image: ${(props) => `url('${props.bgImage}')`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4rem 0;
  img {
    border-radius: 0.5rem;
    margin-top: -5rem;
  }
`;
const TextContainer = styled.figcaption`
  width: 50%;
  h2 {
    margin-bottom: 1rem;
  }
`;
