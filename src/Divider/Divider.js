import styled, { css } from "styled-components";

export default styled.div`
  position: relative;
  display: block;
  background-color: ${(props) => `rgb(${props.theme.color.light})`};
  height: 1px;
  margin: 1rem 1rem;

  ${(props) =>
    props.big &&
    css`
      margin: 2rem 1rem;
    `}

  ${(props) =>
    props.noPadding &&
    css`
      margin: 0 0;
    `}
`;
