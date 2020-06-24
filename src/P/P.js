import React from "react";
import styled, { css } from "styled-components";
import Text from "../Text";

const T = styled(Text)`
  display: block;
  font-weight: 200;
  line-height: 1.96;
  margin-bottom: 0;
  margin-top: 0;

  ${(props) =>
    props.lead &&
    css`
      font-size: 1.18rem;
      line-height: 1.98;
    `}
`;

export default (props) => <T as="p" {...props} />;
