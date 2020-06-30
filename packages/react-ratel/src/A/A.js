import styled, { css } from "styled-components";
import { darken } from "polished";

export default styled.a`
  cursor: pointer;
  text-decoration: none;
  color: rgb(${(props) => props.theme.color.blue});

  &:hover {
    color: ${(props) => darken("0.1", `rgb(${props.theme.color.blue})`)};
  }

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
