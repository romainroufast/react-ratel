import styled, { css } from "styled-components";
import Box from "../Box";

export default styled(Box)`
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  ${(props) =>
    props.url &&
    css`
      background-image: url(${props.url});
    `}
`;
