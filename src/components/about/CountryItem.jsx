import styled from "styled-components";
import { H3 } from "../../global-styles/fontStyles";

const CountryItem = ({ img, countryList, countryName }) => {
  return (
    <ItemContainer>
      <img src={img} alt={countryName} />
      <H3>{countryName}</H3>
      <ItemDescription>
        <ul>
          {countryList.map((country) => (
            <li key={country}>{country}</li>
          ))}
        </ul>
      </ItemDescription>
    </ItemContainer>
  );
};
export default CountryItem;

const ItemContainer = styled.figure`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  img {
    max-width: 5rem;
  }
  h3 {
    margin: 1rem 0;
  }
`;
const ItemDescription = styled.figcaption`
  li {
    margin: 0.5rem 0;
  }
`;
