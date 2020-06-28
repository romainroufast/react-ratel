import React from "react";
import Input from "../Input";
import styled from "styled-components";

const TTextarea = styled(Input)`
  height: auto;
`;

const Textarea = (props) => <TTextarea as="textarea" {...props} />;

export default Textarea;
