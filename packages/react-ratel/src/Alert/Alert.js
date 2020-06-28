import styled, { css } from "styled-components";
import React from "react";
import Close from "../Icon/Close";
import { darken, linearGradient } from "polished";
import { getRgb, chooseColor } from "../utils";

const getGradientStyle = (colorStart) => {
  const colorStop = darken("0.1", colorStart);
  return {
    ...linearGradient({
      colorStops: [colorStart + " 0%", colorStop + " 95%"],
      toDirection: "to right",
      fallback: colorStart,
    }),
  };
};

export default styled.div`
    position: relative;
    padding: 1rem 1.5rem;
    margin-bottom: 1rem;
    border-radius: ${(props) => props.theme.border.radius};
    font-weight: 600;

    ${(props) =>
      props.primary &&
      css`
        ${getGradientStyle(getRgb(props.theme.color.primary))}
        color: ${chooseColor(
          props.theme.color.primary,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
  
    ${(props) =>
      props.secondary &&
      css`
        ${getGradientStyle(getRgb(props.theme.color.secondary))}
        color: ${chooseColor(
          props.theme.color.secondary,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
  
    ${(props) =>
      props.success &&
      css`
        ${getGradientStyle(getRgb(props.theme.color.green))}
        color: ${chooseColor(
          props.theme.color.green,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
    
    ${(props) =>
      props.info &&
      css`
        ${getGradientStyle(getRgb(props.theme.color.blue))}
        color: ${chooseColor(
          props.theme.color.blue,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
    
    ${(props) =>
      props.warning &&
      css`
        ${getGradientStyle(getRgb(props.theme.color.yellow))}
        color: ${chooseColor(
          props.theme.color.yellow,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
    
    ${(props) =>
      props.danger &&
      css`
        ${getGradientStyle(getRgb(props.theme.color.red))}
        color: ${chooseColor(
          props.theme.color.red,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
    
    ${(props) =>
      props.dismissible &&
      css`
        padding-right: 3.8rem;
      `}
`;

const CloseIconPosition = styled(Close)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.85rem 1.25rem;
  cursor: pointer;
  :hover {
    fill: #000;
    text-decoration: none;
    opacity: 0.75;
  }
`;

const Alert = (props) => {
  const { onDismiss, children, ...otherProps } = props;

  return (
    <StyledAlert {...otherProps} role="alert">
      {props.dismissible && (
        <CloseIconPosition
          size={20}
          style={{ cursor: "pointer" }}
          onClick={onDismiss}
        />
      )}
      {children}
    </StyledAlert>
  );
};
