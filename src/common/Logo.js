import React, {Component} from 'react';
import logo from './../assets/img/logo.svg';
import styled from 'styled-components';

const LogoStyled = styled.div`
  position: fixed;
  top: ${props => props.theme.gap.md};
  left: ${props => props.theme.gap.md};
`;

class Logo extends Component {
  render() {
    return (
      <LogoStyled>
        <img src={logo} alt="Matteo Barone"/>
      </LogoStyled>
    );
  }
}

export default Logo;
