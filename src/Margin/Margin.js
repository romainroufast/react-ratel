// https://github.com/jameslnewell/styled-components-spacing
import { Margin as MarginStyled } from "styled-components-spacing";
import styled, { css } from "styled-components";

const responsiveValues = { mobile: 1, tablet: 3, desktop: 4 };

export default styled(MarginStyled).attrs((props) => ({
  all: (props.responsive && responsiveValues) || props.all || {},
}))`
  ${(props) =>
    props.inline &&
    css`
      display: "inline-block";
      width: auto;
    `}
`;
