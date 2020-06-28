import styled, { css } from "styled-components";

export default styled.div`
    position: relative;
    display: inline-block;
    background-color: rgb(${(props) => props.theme.color.light});
    width: 100%;
    min-height: 3em;
    border-radius: .45em;
    text-align: center;


    ${(props) =>
      props.width &&
      css`
        width: ${props.width};
      `}

    ${(props) =>
      props.height &&
      css`
        height: ${props.height};
      `}

    ${(props) =>
      props.background &&
      css`
        background-color: ${props.background};
      `}

    ${(props) =>
      props.noBorder &&
      css`
        border-radius: ${props.noBorder};
      `}

`;
