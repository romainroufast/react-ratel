import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { chooseColor } from "../utils";

export default styled.button`
    appearance: none;
    max-width: 100%;
    display: inline-block;
    vertical-align: middle;
    cursor: pointer;
    font-weight: 500;
    text-decoration: none;
    text-align: center;
    border: 1px solid;
    border-radius: ${(props) => props.theme.border.radius};
    box-sizing: border-box;
    outline: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-right: .75rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    padding-left: 1rem;
    padding-right: 1rem;
    background: rgb(${(props) => props.theme.color.white});
    padding-left: 1.7rem;
    padding-right: 1.7rem;
    font-size: 1rem;
    // line-height: 2.6;
    height: ${(props) => props.theme.form.inputHeight};
    min-width: 6rem;

    ${(props) =>
      props.as === "a" &&
      css`
        line-height: 2.6;
      `}

    ${(props) => css`
      background: ${darken(
        props.active ? "0.1" : "0",
        `rgb(${props.theme.color.white})`
      )};
      &:hover {
        background: ${darken("0.07", `rgb(${props.theme.color.white})`)};
      }
      &:focus:active {
        background: ${darken("0.1", `rgb(${props.theme.color.white})`)};
      }
      border-color: ${darken("0.1", `rgb(${props.theme.color.white})`)};
      color: ${chooseColor(
        props.theme.color.white,
        "255,255,255",
        props.theme.color.dark
      )};
    `}


    ${(props) =>
      props.lg &&
      css`
        font-size: 1.125rem;
        height: ${(props) => props.theme.form.inputLgHeight};
        border-radius: ${(props) => props.theme.border.radius};

        ${(props) =>
          props.as === "a" &&
          css`
            line-height: 3.4;
          `}
      `}
    
    ${(props) =>
      props.shadow &&
      css`
        box-shadow: 0 0 0 0.0625rem #f0f0f0, 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.05);
      `}

    ${(props) =>
      props.block &&
      css`
        width: 100% !important;
      `}

    ${(props) =>
      props.primary &&
      css`
        background: ${darken(
          props.active ? "0.1" : "0",
          `rgb(${props.theme.color.primary})`
        )};
        &:hover {
          background: ${darken("0.07", `rgb(${props.theme.color.primary})`)};
        }
        &:focus:active {
          background: ${darken("0.1", `rgb(${props.theme.color.primary})`)};
        }
        border-color: ${darken("0.1", `rgb(${props.theme.color.primary})`)};
        color: ${chooseColor(
          props.theme.color.primary,
          "255,255,255",
          props.theme.color.dark
        )};
        ${props.shadow &&
        `box-shadow: 0 0.3125rem 0.625rem 0 rgba(${props.theme.color.primary}, .25);`};
      `}

    ${(props) =>
      props.secondary &&
      css`
        background: ${darken(
          props.active ? "0.1" : "0",
          `rgb(${props.theme.color.secondary})`
        )};
        &:hover {
          background: ${darken("0.07", `rgb(${props.theme.color.secondary})`)};
        }
        &:focus:active {
          background: ${darken("0.1", `rgb(${props.theme.color.secondary})`)};
        }
        border-color: ${darken("0.1", `rgb(${props.theme.color.secondary})`)};
        color: ${chooseColor(
          props.theme.color.secondary,
          "255,255,255",
          props.theme.color.dark
        )};
        ${props.shadow &&
        `box-shadow: 0 0.3125rem 0.625rem 0 rgba(${props.theme.color.secondary}, .25);`};
      `}

    ${(props) =>
      props.success &&
      css`
        background: ${darken(
          props.active ? "0.1" : "0",
          `rgb(${props.theme.color.green})`
        )};
        &:hover {
          background: ${darken("0.07", `rgb(${props.theme.color.green})`)};
        }
        &:focus:active {
          background: ${darken("0.1", `rgb(${props.theme.color.green})`)};
        }
        border-color: ${darken("0.1", `rgb(${props.theme.color.green})`)};
        color: ${chooseColor(
          props.theme.color.green,
          "255,255,255",
          props.theme.color.dark
        )};
        ${props.shadow &&
        `box-shadow: 0 0.3125rem 0.625rem 0 rgba(${props.theme.color.green}, .25);`};
      `}

    ${(props) =>
      props.warning &&
      css`
        background: ${darken(
          props.active ? "0.1" : "0",
          `rgb(${props.theme.color.yellow})`
        )};
        &:hover {
          background: ${darken("0.07", `rgb(${props.theme.color.yellow})`)};
        }
        &:focus:active {
          background: ${darken("0.1", `rgb(${props.theme.color.yellow})`)};
        }
        border-color: ${darken("0.1", `rgb(${props.theme.color.yellow})`)};
        color: ${chooseColor(
          props.theme.color.yellow,
          "255,255,255",
          props.theme.color.dark
        )};
        ${props.shadow &&
        `box-shadow: 0 0.3125rem 0.625rem 0 rgba(${props.theme.color.yellow}, .25);`}
      `}

    ${(props) =>
      props.danger &&
      css`
        background: ${darken(
          props.active ? "0.1" : "0",
          `rgb(${props.theme.color.red})`
        )};
        &:hover {
          background: ${darken("0.07", `rgb(${props.theme.color.red})`)};
        }
        &:focus:active {
          background: ${darken("0.1", `rgb(${props.theme.color.red})`)};
        }
        border-color: ${darken("0.1", `rgb(${props.theme.color.red})`)};
        color: ${chooseColor(
          props.theme.color.red,
          "255,255,255",
          props.theme.color.dark
        )};
        ${props.shadow &&
        `box-shadow: 0 0.3125rem 0.625rem 0 rgba(${props.theme.color.red}, .25);`};
      `}

    ${(props) =>
      props.info &&
      css`
        background: ${darken(
          props.active ? "0.1" : "0",
          `rgb(${props.theme.color.info})`
        )};
        &:hover {
          background: ${darken("0.07", `rgb(${props.theme.color.info})`)};
        }
        &:focus:active {
          background: ${darken("0.1", `rgb(${props.theme.color.info})`)};
        }
        border-color: ${darken("0.1", `rgb(${props.theme.color.blue})`)};
        color: ${chooseColor(
          props.theme.color.info,
          "255,255,255",
          props.theme.color.dark
        )};
        ${props.shadow &&
        `box-shadow: 0 0.3125rem 0.625rem 0 rgba(${props.theme.color.blue}, .25);`};
      `}

    ${(props) =>
      props.light &&
      css`
        background: ${darken(
          props.active ? "0.1" : "0",
          `rgb(${props.theme.color.light})`
        )};
        &:hover {
          background: ${darken("0.07", `rgb(${props.theme.color.light})`)};
        }
        &:focus:active {
          background: ${darken("0.1", `rgb(${props.theme.color.light})`)};
        }
        border-color: ${darken("0.1", `rgb(${props.theme.color.light})`)};
        color: ${chooseColor(
          props.theme.color.light,
          "255,255,255",
          props.theme.color.dark
        )};
        ${props.shadow &&
        `box-shadow: 0 0 0 0.0625rem #f0f0f0, 0 0.5rem 1rem 0 rgba(0,0,0,.05);`};
      `}

    ${(props) =>
      props.background &&
      css`
        background: rgba(255, 255, 255, 0.15);
        &:hover {
          background: ${darken("0.07", `rgba(255,255,255,.15)`)};
        }
        &:focus:active {
          background: ${darken("0.1", `rgba(255,255,255,.15)`)};
        }
        box-shadow: 0 0.3125rem 0.625rem 0 rgba(0, 0, 0, 0.15);
        backdrop-filter: blur(10px);

        ${(props) =>
          props.dark &&
          css`
            background: rgba(0, 0, 0, 0.35);
            color: #fff;
          `}
      `}

    ${(props) =>
      props.noMargin &&
      css`
        margin-right: 0;
      `}


`;
