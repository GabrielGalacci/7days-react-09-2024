import { createGlobalStyle } from 'styled-components';
import { ResetCSS } from './ResetCSS';

export const GlobalStyle = createGlobalStyle`
${ResetCSS}
body {
    font-family: 'Montserrat', sans-serif;
}
main {
    max-width: 1200px;
    margin: auto;
}
@media(min-width: 920px) {
    body {
        background-image: url('/images/body-shape.svg'),
                          url('/images/bg.jpg');
        background-repeat: no-repeat, 
                          repeat-x;
        background-position: right top;
    }
}
`;