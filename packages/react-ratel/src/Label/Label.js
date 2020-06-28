import styled, { css } from "styled-components";

const Label = styled.label`
  font-weight: bold;
  display: inline-block;
  font-size: 12px;
  color: ${(props) => props.theme.color.gray};
  margin-bottom: 0.85rem;

  ${(props) =>
    props.block &&
    css`
      display: block;
    `}
`;

export default Label;
