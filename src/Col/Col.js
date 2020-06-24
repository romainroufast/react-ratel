import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";
import { Col as StyledCol } from "styled-bootstrap-grid";

const Col = styled(StyledCol)`

    ${(props) =>
      props.hidden &&
      breakpoint(props.hidden)`
        display: none;
    `}

    ${(props) =>
      props.noPadding &&
      css`
        padding: 0;
      `}

    ${(props) =>
      props.noPaddingLeft &&
      css`
        padding-left: 0;
      `}

    ${(props) =>
      props.noPaddingRight &&
      css`
        padding-right: 0;
      `}

    ${(props) =>
      props.height &&
      css`
        height: ${props.height};
      `}

    ${(props) =>
      props.center &&
      css`
        text-align: center;
      `}

    ${(props) =>
      props.right &&
      css`
        text-align: right;
      `}
`;

export default Col;
