import React from "react";
import styled from "styled-components";
import Text from "../Text";

const H = styled(Text)`
  font-weight: bold;
  font-size: 3rem;
  margin-top: 0;
  margin-bottom: 2.8rem;
`;

export default (props) => <H as="h1" {...props} />;
