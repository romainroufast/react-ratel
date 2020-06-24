import styled, { css } from "styled-components";

export default styled.div`
  display: inline-block;
  position: relative;
  width: auto;
  height: auto;
  vertical-align: top;

  ${(props) =>
    props.block &&
    css`
      display: block;
      width: 100%;
    `}
`;
