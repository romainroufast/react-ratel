import { createGlobalStyle } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import tooltipCss from "../Tooltip/css";
// @font-face {
//     font-family: ${props => props.theme.font.family || 'Arial sans-serif'};
//     src: url('${props => props.theme.font.familyUrl || 'Arial sans-serif'}');
// }
export default createGlobalStyle`
    @import url(${(props) => props.theme.font.familyUrl});

    body, html {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-family: ${(props) => props.theme.font.family};
        background-color: ${(props) => props.theme.body.bg};
        color: ${(props) => props.theme.body.color};
        font-size: ${(props) => props.theme.font.size || "14px"};

        ${breakpoint("xs")`
            font-size: .75rem;
        `}

        ${breakpoint("sm")`
            font-size: .9rem;
        `}

        ${breakpoint("md")`
            font-size: ${(props) => props.theme.font.size || "14px"};
        `}
    }

    input, textarea, select, button {
        text-rendering: auto;
        color: initial;
        letter-spacing: normal;
        word-spacing: normal;
        text-transform: none;
        text-indent: 0px;
        text-shadow: none;
        display: inline-block;
        text-align: start;
        margin: 0em;
        font-weight: 400;
        font-family: ${(props) => props.theme.font.family};
    }

    ${(props) =>
      tooltipCss +
      ` .tippy-popper[x-placement^=top] .tippy-tooltip [x-arrow]{border-top-color: rgb(${props.theme.form.backgroundColor}) !important;}` +
      ` .tippy-popper[x-placement^=bottom] .tippy-tooltip [x-arrow]{border-bottom-color: rgb(${props.theme.form.backgroundColor}) !important;}`}
    
`;
