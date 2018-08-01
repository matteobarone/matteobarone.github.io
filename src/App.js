import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import Logo from './common/Logo';
import Wrapper from './common/Wrapper';
import theme from './style/theme';
import './style/style';
import WrapperCards from './common/Card/WrapperCards';

class App extends Component {
  constructor() {
    super();
    this.cards = ['Fendi', 'Gucci', 'Prada', 'Armani', 'D&G', 'H&M', 'Adidas', 'Nike'];
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Logo>MB</Logo>
          <WrapperCards cards={this.cards}/>
        </Wrapper>
      </ThemeProvider>
    );
  }
}

export default App;
