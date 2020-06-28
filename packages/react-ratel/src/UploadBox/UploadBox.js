import styled from "styled-components";
import Box from "../Box";

const getBackgroundColor = (props) => {
  if (props.isDragReject) {
    return `rgba(${props.theme.color.red}, .15)`;
  }
  if (props.isDragActive) {
    return `rgba(${props.theme.color.primary}, .35)`;
  }
  return `rgba(${props.theme.color.primary}, .15)`;
};

const getColor = (props) => {
  if (props.isDragReject) {
    return `rgba(${props.theme.color.red})`;
  }
  if (props.isDragActive) {
    return `rgba(${props.theme.color.primary})`;
  }
  return `rgba(${props.theme.color.primary})`;
};

export default styled(Box)`
  background-color: ${(props) => getBackgroundColor(props)};
  color: ${(props) => getColor(props)};
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
`;
