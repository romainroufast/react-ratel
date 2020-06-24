import React from "react";
import styled, { css } from "styled-components";

export default styled.div`
  position: relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);

  ${(props) =>
    props.light &&
    css`
      background: rgba(0, 0, 0, 0.5);
    `}

  ${(props) =>
    props.gradient &&
    css`
      background: radial-gradient(
          ellipse at 100% 46%,
          rgba(28, 33, 41, 0.1) 0,
          rgba(28, 33, 41, 0.5) 30%,
          rgba(28, 33, 41, 0.6) 50%,
          #1c2129 100%
        ),
        radial-gradient(
          ellipse at 46% 100%,
          rgba(28, 33, 41, 0) 59%,
          rgba(28, 33, 41, 0.8) 87%,
          #1c2129 100%
        ),
        linear-gradient(
          90deg,
          #1c2129 0,
          rgba(28, 33, 41, 0.4) 25%,
          rgba(28, 33, 41, 0) 60%,
          rgba(28, 33, 41, 0.3) 95%,
          #1c2129 100%
        );
    `}
`;
