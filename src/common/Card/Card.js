import styled from 'styled-components';

import Title from './Title';

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0;
  height: 150px;
  border: 4px solid ${props => props.theme.colors.fg};
  &:nth-child(4n + 1) {
    grid-column: 3 / 8;
  }
  &:nth-child(4n + 2) {
    grid-column: 1 / 6;
  }
  &:nth-child(4n + 3) {
    grid-column: 4 / 9;
  }
  &:nth-child(4n + 4) {
    grid-column: 2 / 7;
  }
`;

Card.Title = Title;

export default Card;
