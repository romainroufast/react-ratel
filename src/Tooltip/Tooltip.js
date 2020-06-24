import React from "react";
import styled from "styled-components";
import { darken } from "polished";
import Tippy from "@tippyjs/react/headless";

const Box = styled.div`
  background: rgb(${(props) => props.theme.color.white});
  border-radius: ${(props) => props.theme.border.radius};
  border: 1px solid
    ${(props) => darken("0.1", `rgb(${props.theme.color.white})`)};
  text-align: center;
`;

export default ({ html, children, ...otherProps }) => {
  return (
    <Tippy render={(attrs) => <Box {...attrs}>{html}</Box>} {...otherProps}>
      {children}
    </Tippy>
  );
};
