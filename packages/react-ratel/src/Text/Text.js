import styled, { css } from "styled-components";

export default styled.span`
    display: block;
    position: relative;

    ${(props) =>
      props.uppercase &&
      css`
        text-transform: uppercase;
      `}

    ${(props) =>
      props.inline &&
      css`
        display: inline-block;
      `}

    ${(props) =>
      props.bold &&
      css`
        font-weight: bold;
      `}

    ${(props) =>
      props.italic &&
      css`
        font-style: italic;
      `}

    ${(props) =>
      props.light &&
      css`
        font-weight: 200;
      `}

    ${(props) =>
      props.small &&
      css`
        font-size: 0.75em;
      `}

    ${(props) =>
      props.spaced &&
      css`
        letter-spacing: 3px;
      `}

    ${(props) =>
      props.pointer &&
      css`
        cursor: pointer;
      `}

    ${(props) =>
      props.help &&
      css`
        cursor: help;
      `}

    ${(props) =>
      props.wait &&
      css`
        cursor: wait;
      `}

    ${(props) =>
      props.color &&
      css`
        color: ${props.color};
      `}
    
    ${(props) =>
      props.primary &&
      css`
        color: rgb(${(props) => props.theme.color.primary});
      `}
  
    ${(props) =>
      props.secondary &&
      css`
        color: rgb(${(props) => props.theme.color.secondary});
      `}
  
    ${(props) =>
      props.success &&
      css`
        color: rgb(${(props) => props.theme.color.green});
      `}
    
    ${(props) =>
      props.info &&
      css`
        color: rgb(${(props) => props.theme.color.blue});
      `}
    
    ${(props) =>
      props.warning &&
      css`
        color: rgb(${(props) => props.theme.color.yellow});
      `}
    
    ${(props) =>
      props.danger &&
      css`
        color: rgb(${(props) => props.theme.color.red});
      `}

    ${(props) =>
      props.gray &&
      css`
        color: rgb(${(props) => props.theme.color.gray});
      `}

    ${(props) =>
      props.lightgray &&
      css`
        color: #c3c3c3;
      `}

    ${(props) =>
      props.noMargin &&
      css`
        margin: 0 0 0 0 !important;
      `}

    ${(props) =>
      props.center &&
      css`
        text-align: center;
      `}
`;
