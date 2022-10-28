import { BigTitle } from "../global-styles/fontStyles";
import CoffeItem from "./CoffeItem";
import styled from "styled-components";
const coffeData = [
  {
    title: "Gran Espresso",
    description:
      "Light and flavorful blend with cocoa and black pepper for an intense experience.",
    img: "./desktop/espresso.png",
  },
  {
    title: "Planalto",
    description:
      "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts.",
    img: "./desktop/planalto.png",
  },
  {
    title: "Piccollo",
    description:
      "Mild and smooth blend featuring notes of toasted almond and dried cherry.",
    img: "./desktop/piccollo.png",
  },
  {
    title: "Danche",
    description:
      "Ethiopian hand-harvested blend densely packed with vibrant fruit notes.",
    img: "./desktop/danche.png",
  },
];
const CoffeCollection = () => {
  return (
    <div>
      <BigTitle>our collection</BigTitle>
<CollectionContainer>
      {coffeData.map(({ title, description, img }) => (
        <CoffeItem
          coffeImg={img}
          coffeTitle={title}
          coffeDescription={description}
        />
      ))}

</CollectionContainer>
    </div>
  );
};

export default CoffeCollection;
const CollectionContainer = styled.div`
display:flex;

`