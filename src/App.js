import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import WrapperCards from './common/Card/WrapperCards';
import Logo from './common/Logo';
import Wrapper from './common/Wrapper';
import theme from './style/theme';
import './style/style';
import * as data from './storage/data.json';

class App extends Component {
  constructor() {
    super();
    this.data = data;
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Logo/>
          <WrapperCards cards={this.data.projects}/>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
