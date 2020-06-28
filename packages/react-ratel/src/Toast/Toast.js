import styled, { css, keyframes } from "styled-components";

const appearBottom = keyframes`
  from {
    transform: translateY(10px);
    opacity: .5;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default styled.div`
    position: relative;
    display: inline-block;
    padding: .8em 3em;
    border-radius: 30px;
    background-color: rgb(${(props) => props.theme.color.white});
    font-weight: 500;
    border: 1px solid rgb(${(props) => props.theme.color.dark}); 
    box-shadow: 0 1px 1px 0 rgba(60,64,67,.08), 0 1px 3px 1px rgba(60,64,67,.16);
    animation: ${appearBottom} .2s cubic-bezier(0, 0, 0, 0.99);

    ${(props) =>
      props.noShadow &&
      css`
        box-shadow: none;
      `}
    
    ${(props) =>
      props.primary &&
      css`
        color: rgb(${(props) => props.theme.color.primary});
      `}
  
    ${(props) =>
      props.secondary &&
      css`
        color: rgb(${(props) => props.theme.color.secondary});
      `}
  
    ${(props) =>
      props.success &&
      css`
        color: rgb(${(props) => props.theme.color.green});
      `}
    
    ${(props) =>
      props.info &&
      css`
        color: rgb(${(props) => props.theme.color.blue});
      `}
    
    ${(props) =>
      props.warning &&
      css`
        color: rgb(${(props) => props.theme.color.yellow});
      `}
    
    ${(props) =>
      props.danger &&
      css`
        color: rgb(${(props) => props.theme.color.red});
      `}
    
    ${(props) =>
      props.color &&
      css`
        color: ${(props) => props.color};
      `}

    ${(props) =>
      props.noTransition &&
      css`
        animation: none;
      `}
    
`;
