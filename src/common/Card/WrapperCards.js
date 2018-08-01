import styled from 'styled-components';
import Card from './Card';
import React from "react";

const WrapperCardsStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 12.5%);
  grid-template-rows: auto;
  width: 100%;
`;

const WrapperCards = (props) => (
  <WrapperCardsStyled>
    {props.cards.map((title) =>
    <Card>
      <Card.Title>{title}</Card.Title>
    </Card>
    )}
  </WrapperCardsStyled>
);

export default WrapperCards;
