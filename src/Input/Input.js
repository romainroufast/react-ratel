import styled, { css } from "styled-components";
import { darken, lighten } from "polished";
import { getBorder } from "../utils";

const Input = styled.input`
    margin:0;
    border:0;
    padding:0;
    display:inline-block;
    vertical-align:middle;
    white-space:normal;
    line-height:1;
    box-sizing: border-box;
    box-shadow: none;
    border-radius: ${(props) => props.theme.border.radius};
    ${(props) =>
      getBorder(props.theme.form.borderSize, props.theme.form.borderColor)}
    padding: 1.05em;
    background: rgb(${(props) => props.theme.form.backgroundColor});
    color: rgb(${(props) => props.theme.form.color});
    height: ${(props) => props.theme.form.inputHeight};


    ${(props) =>
      props.theme &&
      css`
        :focus {
          outline: 0;
          background: ${darken(
            "0.01",
            `rgb(${props.theme.form.backgroundColor})`
          )};
        }

        ::placeholder {
          color: ${darken("0.25", `rgb(${props.theme.form.backgroundColor})`)};
        }
      `}

    ${(props) =>
      props.type &&
      props.type === "range" &&
      css`
        background: transparent !important;
        :focus {
          background: transparent;
        }
      `}

    ${(props) =>
      props.block &&
      css`
        display: block;
        width: 100%;
      `}

    ${(props) =>
      props.lg &&
      css`
        font-size: 14px;
        padding: 1.2em;
        height: ${(props) => props.theme.form.inputLgHeight};
      `}

    ${(props) =>
      props.center &&
      css`
        text-align: center;
      `}

    ${(props) =>
      props.type &&
      props.type === "range" &&
      css`
        // reset styles
        box-shadow: none;
        padding: 0;
        width: 100%;
        border-radius: 4px;
        border: 0;

        -webkit-appearance: none;
        width: 100%;
        margin: 7px 0;

        :focus {
          outline: none;
          border: 0;
          background: transparent;
        }

        ::-webkit-slider-runnable-track {
          width: 100%;
          height: 6px;
          cursor: pointer;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0),
            0px 0px 1px rgba(13, 13, 13, 0);
          background: #f5f5f5;
          border-radius: 1px;
          border: 0px solid #222;
        }

        ::-webkit-slider-thumb {
          box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
          border: 1px solid #222;
          height: 20px;
          width: 20px;
          border-radius: 20px;
          background: #ffffff;
          cursor: pointer;
          -webkit-appearance: none;
          margin-top: -7px;
        }

        // :focus::-webkit-slider-runnable-track {
        //     background: #eee;
        // }

        ::-moz-range-track {
          width: 100%;
          height: 6px;
          cursor: pointer;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0),
            0px 0px 1px rgba(13, 13, 13, 0);
          background: #f5f5f5;
          border-radius: 1px;
          border: 0px solid #222;
        }

        ::-moz-range-thumb {
          box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
          border: 1px solid #00001e;
          height: 20px;
          width: 20px;
          border-radius: 20px;
          background: #ffffff;
          cursor: pointer;
        }

        ::-ms-track {
          width: 100%;
          height: 6px;
          cursor: pointer;
          background: transparent;
          border-color: transparent;
          color: transparent;
        }

        ::-ms-fill-lower {
          background: #e8e8e8;
          border: 0px solid #222;
          border-radius: 2px;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0),
            0px 0px 1px rgba(13, 13, 13, 0);
        }

        ::-ms-fill-upper {
          background: #f5f5f5;
          border: 0px solid #222;
          border-radius: 2px;
          box-shadow: 1px 1px 1px rgba(0, 0, 0, 0),
            0px 0px 1px rgba(13, 13, 13, 0);
        }

        ::-ms-thumb {
          box-shadow: 0.9px 0.9px 1px #000031, 0px 0px 0.9px #00004b;
          border: 1px solid #00001e;
          height: 20px;
          width: 20px;
          border-radius: 20px;
          background: #ffffff;
          cursor: pointer;
          height: 6px;
        }

        :focus::-ms-fill-lower {
          background: #f5f5f5;
        }

        :focus::-ms-fill-upper {
          background: #ffffff;
        }
      `}

`;

export default Input;
