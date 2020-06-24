import styled, { css } from "styled-components";

export default styled.a`
    cursor: pointer;
    text-decoration: none;
    color: rgb(${(props) => props.theme.color.primary});

    ${(props) =>
      props.dark &&
      css`
        color: ${props.theme.color.dark};
      `}

    ${(props) =>
      props.light &&
      css`
        color: rgb(${(props) => props.theme.color.light});
      `}

    ${(props) =>
      props.color &&
      css`
        color: ${props.color};
      `}

    ${(props) =>
      props.block &&
      css`
        display: block;
      `}
`;
