import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Logo from './common/Logo';
import Wrapper from './common/Wrapper';
import theme from './style/theme';
import './style/style';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Logo>MB</Logo>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
