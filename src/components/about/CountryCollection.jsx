import { H4 } from "../../global-styles/fontStyles";
import styled from "styled-components";
import CountryItem from "./CountryItem";

const countryData = [
  {
    img: "/about/desktop/illustration-uk.svg",
    countryName: "United Kingdom",
    countryList: ["68  Asfordby Rd", "Alcaston", "SY6 1YA", "+44 1241 918425"],
  },
  {
    img: "/about/desktop/illustration-canada.svg",
    countryName: "Canada",
    countryList: [
      "1528  Eglinton Avenue",
      "Toronto",
      "Ontario M4P 1A6",
      "+1 416 485 2997",
    ],
  },
  {
    img: "/about/desktop/illustration-australia.svg",
    countryName: "Australia",
    countryList: [
      "36 Swanston Street",
      "Kewell",
      "Victoria",
      "+61 4 9928 3629",
    ],
  },
];
const CountryCollection = () => {
  return (
    <CollectionContainer>
      <H4>Our headquarters</H4>

      <div>
        {countryData.map(({ countryList, countryName, img }) => (
          <CountryItem
            key={countryName}
            img={img}
            countryName={countryName}
            countryList={countryList}
          />
        ))}{" "}
      </div>
    </CollectionContainer>
  );
};
export default CountryCollection;
const CollectionContainer = styled.section`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem 0;
  }
  h4 {
    color: var(--lightGray);
  }
`;