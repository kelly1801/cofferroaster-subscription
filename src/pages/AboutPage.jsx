import Header from "../components/shared/Header";
import tabletHeroImg from "../assets/about/tablet/image-hero-whitecup.jpg";
import mobileHeroImg from "../assets/about/mobile/image-hero-whitecup.jpg";
import headerImg from "../assets/about/desktop/image-hero-whitecup.jpg";
import styled from "styled-components";
import InfoAbout from "../components/about/InfoAbout";
import CallToAbout from "../components/about/CallToAbout";
import CountryCollection from "../components/about/CountryCollection";
const AboutPage = () => {
  return (
    <PageContainer>
      <Header
        tabletImg={tabletHeroImg}
        mobileImg={mobileHeroImg}
        desktopImg={headerImg}
        title="About Us"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
      />
      <InfoAbout />
      <CallToAbout />
      <CountryCollection />
    </PageContainer>
  );
};

export default AboutPage;

const PageContainer = styled.main`
  padding: 4rem;
`;
