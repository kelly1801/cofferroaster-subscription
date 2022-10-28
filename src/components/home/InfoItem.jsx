import React from "react";
import styled from "styled-components";
import { H1, BodyFont, H3 } from "../../global-styles/fontStyles";
const InfoItem = ({ number, title, description }) => {
  return (
    <ItemContainer>
      <div>
        <H1 as="h3">{number}</H1>
        <H3>{title}</H3>
        <BodyFont>{description}</BodyFont>
      </div>
    </ItemContainer>
  );
};

export default InfoItem;

const ItemContainer = styled.div`
  max-width: 285px;

  ${H1} {
    color: var(--orange);
  }
  h3 {
    margin: 1.5rem 0;
  }
  div {
    padding: 0 2rem;
  }
`;
