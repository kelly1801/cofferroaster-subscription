import { H2, BodyFont } from "../global-styles/fontStyles";
import styled from "styled-components";
import BannerItem from "./BannerItem";

const BannerItemData = [
  {
    img: "./desktop/bean.svg",
    title: "Best Quality",
    description:
      "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
  },
  {
    img: "./desktop/gift.svg",
    title: "Exclusive benefits",
    description:
      "Special offers and swag when you subscribe, including 30% off your first shipment.",
  },
  {
    img: "./desktop/truck.svg",
    title: "Free shipping",
    description:
      "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
  },
];
const CallToBanner = () => {
  return (
    <>
      <BannerContainer>
        <TextContainer>
          <H2>Why choose us?</H2>
          <BodyFont>
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level
          </BodyFont>
        </TextContainer>

        <ItemsContainer>
          {BannerItemData.map(({ img, title, description }) => (
            <BannerItem image={img} title={title} description={description} />
          ))}
        </ItemsContainer>
      </BannerContainer>
    </>
  );
};

export default CallToBanner;

const BannerContainer = styled.div`
  text-align: center;
  color: var(--white);
  background-color: var(--secondary);
  padding: 6rem;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-bottom: 2rem;
`;
const TextContainer = styled.div`
  max-width: 530px;
  margin: 3rem auto;

  h2 {
    margin: 2rem 0;
  }
`;

const ItemsContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: -30%;
  margin: 0 2rem;
`;
