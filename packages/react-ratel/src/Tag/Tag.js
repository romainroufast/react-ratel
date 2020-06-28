import styled, { css } from "styled-components";
import React from "react";
import Close from "../Icon/Close";
import { chooseColor } from "../utils";

const CloseIconPosition = styled(Close)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 0.55em;
  padding: 0;
  cursor: pointer !important;
  :hover {
    fill: #000;
    text-decoration: none;
    opacity: 0.75;
  }
`;

const TagStyled = styled.div`
    position: relative;
    display: inline-block;
    padding: .5em 1.1em;
    border-radius: 2rem;
    font-size: .65em;
    background-color: #fff;
    margin-right: .75em;
    margin-bottom: .75em;
    cursor: pointer;
    font-weight: 500;
    color: #fff;
    
    ${(props) =>
      props.large &&
      css`
        padding: 1.1em 2.2em;
        font-size: 0.9em;
      `}
    
    ${(props) =>
      props.medium &&
      css`
        padding: 0.8em 1.8em;
        font-size: 0.8em;
      `}
    
    ${(props) =>
      props.shadow &&
      css`
        box-shadow: 0 1px 1px 0 rgba(60, 64, 67, 0.08),
          0 1px 3px 1px rgba(60, 64, 67, 0.16);
      `}
    
    ${(props) =>
      props.noMargin &&
      css`
        margin-right: 0;
        margin-bottom: 0;
      `}
    
    ${(props) =>
      props.upper &&
      css`
        text-transform: uppercase;
      `}
    
    ${(props) =>
      props.noShadow &&
      css`
        box-shadow: none;
      `}
    
    ${(props) =>
      props.primary &&
      css`
        background-color: rgb(${props.theme.color.primary});
        color: ${chooseColor(
          props.theme.color.primary,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
  
    ${(props) =>
      props.secondary &&
      css`
        background-color: rgb(${props.theme.color.secondary});
        color: ${chooseColor(
          props.theme.color.secondary,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
  
    ${(props) =>
      props.success &&
      css`
        background-color: rgb(${props.theme.color.green});
        color: ${chooseColor(
          props.theme.color.green,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
    
    ${(props) =>
      props.info &&
      css`
        background-color: rgb(${props.theme.color.blue});
        color: ${chooseColor(
          props.theme.color.blue,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
    
    ${(props) =>
      props.warning &&
      css`
        background-color: rgb(${props.theme.color.yellow});
        color: ${chooseColor(
          props.theme.color.yellow,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
    
    ${(props) =>
      props.danger &&
      css`
        background-color: rgb(${props.theme.color.red});
        color: ${chooseColor(
          props.theme.color.red,
          "255,255,255",
          props.theme.color.dark
        )};
      `}
    
    ${(props) =>
      props.light &&
      css`
        background-color: rgb(${props.theme.color.light});
        color: ${chooseColor(
          props.theme.color.light,
          "255,255,255",
          props.theme.color.dark
        )};
      `}

    ${(props) =>
      props.noTransition &&
      css`
        animation: none;
      `}
    
    ${(props) =>
      props.dismissible &&
      css`
        padding-right: 2.7em;

        ${(props) =>
          props.large &&
          css`
            padding-right: 4.4em;
          `}

        ${(props) =>
          props.medium &&
          css`
            padding-right: 3.8em;
          `}
      `}

    ${CloseIconPosition} {
        ${(props) =>
          props.large &&
          css`
            right: 1.2em;
          `}

        ${(props) =>
          props.medium &&
          css`
            right: 1em;
          `}
    }
`;

export default (props) => {
  const { onDismiss, children, large, medium, ...otherProps } = props;

  return (
    <TagStyled {...otherProps} large={large} medium={medium}>
      {props.dismissible && (
        <CloseIconPosition
          size={large ? 20 : medium ? 16 : 14}
          onClick={onDismiss}
        />
      )}
      {children}
    </TagStyled>
  );
};
