import { css } from 'styled-components';

export const ResetCSS = css`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
a,
button,
input {
    transition: .3s ease-in-out;
}
button {
    cursor: pointer;
}
a:hover,
a:focus,
button:hover,
button:focus {
    opacity: .5;
}
`;