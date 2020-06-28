import styled, { css } from "styled-components";

export default styled.span`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('${(props) => props.src || props.fallback}');

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
      props.cover &&
      css`
        background-size: cover;
      `}

    ${(props) =>
      props.background &&
      css`
        background-color: ${props.background};
      `}
`;
