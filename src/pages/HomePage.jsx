import NavBar from "../components/NavBar";
import Header from "../components/Header";
import styled from "styled-components";
import headerImg from "../assets/home/desktop/hero.jpg";
import mobileHeroImg from "../assets/home/mobile/hero.jpg";
import tabletHeroImg from "../assets/home/tablet/hero.jpg";
import CoffeCollection from "../components/CoffeCollection";
import CallToBanner from "../components/CallToBanner";
import Footer from "../components/Footer";
import Info from "../components/Info";
const HomePage = () => {
  return (
    <HomePageContainer>

      <Header
        tabletImg={tabletHeroImg}
        mobileImg={mobileHeroImg}
        desktopImg={headerImg}
        title="Great coffee made simple."
        description=" Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        btnText="Create your plan."
      />

      <CoffeCollection/>
      <CallToBanner/>
      <Info/>

    </HomePageContainer>
  );
};

export default HomePage;

const HomePageContainer = styled.main`
  padding: 2rem;
`;
