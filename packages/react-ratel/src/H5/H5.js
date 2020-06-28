import React from "react";
import styled from "styled-components";
import Text from "../Text";

const H = styled(Text)`
  font-weight: bold;
  font-size: 1.15rem;
  margin-top: 0;
  margin-bottom: 1.4rem;
`;

export default (props) => <H as="h5" {...props} />;
