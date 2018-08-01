import {injectGlobal} from 'styled-components';
import theme from './theme';

injectGlobal`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Helvetica Neue', Helvetica, sans-serif;
}
body {
  background-color: ${theme.colors.fgOpacity}
}
`;
