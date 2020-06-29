import styled, { css } from "styled-components";

const Label = styled.label`
  font-weight: bold;
  display: inline-block;
  font-size: 12px;
  color: ${(props) => `rgb(${props.theme.color.gray})`};
  margin-bottom: 0.85rem;
  margin-top: 0.7rem;

  ${(props) =>
    props.block &&
    css`
      display: block;
    `}
`;

export default Label;
