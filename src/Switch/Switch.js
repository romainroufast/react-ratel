import React from "react";
import styled from "styled-components";

const WIDTH = "52px";
const HEIGHT = "24px";
const BALL_SIZE = "18px";
const MARGIN_LEFT = "30px";
const MARGIN = "3px";

const LG_WIDTH = "62px";
const LG_HEIGHT = "30px";
const LG_BALL_SIZE = "22px";
const LG_MARGIN_LEFT = "36px";
const LG_MARGIN = "4px";

const CheckBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: ${(props) => (props.lg ? LG_WIDTH : WIDTH)};
  height: ${(props) => (props.lg ? LG_HEIGHT : HEIGHT)};
  border-radius: 15px;
  background: rgb(${(props) => props.theme.form.backgroundColor});
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: ${(props) => (props.lg ? LG_BALL_SIZE : BALL_SIZE)};
    height: ${(props) => (props.lg ? LG_BALL_SIZE : BALL_SIZE)};
    margin: ${(props) => (props.lg ? LG_MARGIN : MARGIN)};
    background: rgb(${(props) => props.theme.color.white});
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: ${(props) => (props.lg ? LG_WIDTH : WIDTH)};
  height: ${(props) => (props.lg ? LG_HEIGHT : HEIGHT)};
  &:checked + ${CheckBoxLabel} {
    background: rgb(${(props) => props.theme.color.primary});
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: ${(props) => (props.lg ? LG_BALL_SIZE : BALL_SIZE)};
      height: ${(props) => (props.lg ? LG_BALL_SIZE : BALL_SIZE)};
      margin-left: ${(props) => (props.lg ? LG_MARGIN_LEFT : MARGIN_LEFT)};
      transition: 0.2s;
    }
  }
`;

const Switch = ({ name, checked, lg, onChange }) => {
  return (
    <CheckBoxWrapper>
      <CheckBox
        id={name}
        type="checkbox"
        lg={lg}
        checked={checked}
        onChange={(e) => onChange(!!e.target.checked)}
      />
      <CheckBoxLabel htmlFor={name} lg={lg} />
    </CheckBoxWrapper>
  );
};

export default Switch;
