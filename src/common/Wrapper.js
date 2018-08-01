import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.gap.md};
  background-color: ${props => props.theme.colors.bg};
`;

export default Wrapper;
