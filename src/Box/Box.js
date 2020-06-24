import styled, { css } from "styled-components";

export default styled.div`
    max-width: 100%;
    width: 100%;
    position: relative;
    padding: 3.5rem 3rem 3.5rem;
    background-color: rgb(${(props) => props.theme.color.white});
    box-shadow: 0 0.265rem 1.25rem 0 rgba(0,0,0,.02);
    box-sizing: border-box;
    border-radius: ${(props) => props.theme.border.radius};

    ${(props) =>
      props.smallPadding &&
      css`
        padding: 2rem 1.5rem 2rem;
      `}

    ${(props) =>
      props.inline &&
      css`
        display: inline-block;
        vertical-align: top;
        width: auto;
      `}

    ${(props) =>
      props.noPadding &&
      css`
        padding: 0 0 0;
      `}

    ${(props) =>
      props.noShadow &&
      css`
        box-shadow: none !important;
      `}

    ${(props) =>
      props.center &&
      css`
        text-align: center;
      `}

    ${(props) =>
      props.left &&
      css`
        text-align: left;
      `}

    ${(props) =>
      props.right &&
      css`
        text-align: right;
      `}

    ${(props) =>
      props.full &&
      css`
        width: 100vw;
        height: 100vh;
      `}

    ${(props) =>
      props.width &&
      css`
        width: ${props.width};
      `}

    ${(props) =>
      props.height &&
      css`
        height: ${props.height};
      `}

    ${(props) =>
      props.align &&
      css`
        vertical-align: ${props.align};
      `}

    ${(props) =>
      props.fixed &&
      css`
        position: fixed;
      `}

    ${(props) =>
      props.transparent &&
      css`
        background-color: rgba(0, 0, 0, 0) !important;
      `}

    ${(props) =>
      props.noBorderRadius &&
      css`
        border-radius: 0;
      `}
      
    ${(props) =>
      props.dark &&
      css`
        background-color: rgb(${props.theme.color.dark});
        color: rgb(${props.theme.color.white});
      `}
    
    ${(props) =>
      props.light &&
      css`
        background-color: rgb(${props.theme.color.light});
      `}

`;
