import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #FAFAFA;
`;

const Logo = styled.h1`
  color: #0028FF;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Logo>MB</Logo>
      </Wrapper>
    );
  }
}

export default App;
