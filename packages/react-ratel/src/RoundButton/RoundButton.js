import styled, { css } from "styled-components";
import { memo } from "react";
import Button from "../Button/Button";

export default memo(styled(Button)`
  position: relative;
  border-radius: 60px;
  min-width: 0;
  padding: 0 0 0 0;
  line-height: inherit;
  width: 32px;
  height: 32px;
  text-overflow: inherit;
  text-align: center;
  overflow: hidden;

  * {
    vertical-align: top;
  }

  > * {
    position: relative;
    margin-bottom: 4px;
  }

  ${(props) =>
    props.small &&
    css`
      width: 22px;
      height: 22px;
    `}

  ${(props) =>
    props.large &&
    css`
      width: 46px;
      height: 46px;

      > * {
        margin-bottom: 0;
      }
    `}
`);
