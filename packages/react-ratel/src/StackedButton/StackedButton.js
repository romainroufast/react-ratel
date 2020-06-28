import styled, { css } from "styled-components";
import Button from "../Button/Button";

export default styled(Button)`
    ${(props) =>
      props.left &&
      css`
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
        margin-right: 0px;
        border-right-style: solid;
        border-right-width: 1px;
      `}

    ${(props) =>
      props.middle &&
      css`
        border-radius: 0px !important;
        margin-left: 0px !important;
        margin-right: 0px !important;
        border-right-style: solid;
        border-right-width: 1px;
      `}

    ${(props) =>
      props.right &&
      css`
        margin-left: 0px;
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
      `}

`;
