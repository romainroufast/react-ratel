import React from "react";
import styled, { keyframes, css } from "styled-components";

const ellipsis1 = keyframes`
    0% {
        transform: scale(.5) translateY(0);
    }
    50% {
        transform: scale(1) translateY(10px);
    }
    100% {
        transform: scale(.5) translateY(0);
    }
`;

const ellipsis1small = keyframes`
    0% {
        transform: scale(.5) translateY(0);
    }
    50% {
        transform: scale(1) translateY(5px);
    }
    100% {
        transform: scale(.5) translateY(0);
    }
`;

const Wrapper = styled.div`
    display: inline-block;
    position: relative;
    width: 48px;
    height: 22px;

    ${(props) =>
      props.dark &&
      css`
        ${FirstChild}, ${SecondChild}, ${ThirdChild} {
            background: rgb(${(props) => props.theme.color.secondary});
        }
    `}

    ${(props) =>
      props.light &&
      css`
        ${FirstChild}, ${SecondChild}, ${ThirdChild} {
            background: rgb(255,255,255);
        }
    `}

    ${(props) =>
      props.small &&
      css`
        width: 24px;
        height: 12px;

        ${FirstChild}, ${SecondChild}, ${ThirdChild}{
            top: 0;
            width: 5px;
            height: 5px;
        }

        ${FirstChild}{
            animation: ${ellipsis1small} .9s infinite;
        }

        ${SecondChild}{
            left: 9px;
            animation: ${ellipsis1small} .9s infinite;
            animation-delay: .3s;
        }

        ${ThirdChild}{
            left: 18px;
            animation: ${ellipsis1small} .9s infinite;
            animation-delay: .6s;
        }
    `}
`;

const Item = styled.div`
  position: absolute;
  top: 0;
  width: 11px;
  height: 11px;
  border-radius: 50%;
  animation-timing-function: cubic-bezier(0, 1, 1, 0);
  background: rgb(${(props) => props.theme.color.primary});
`;

const FirstChild = styled(Item)`
  left: 0;
  animation: ${ellipsis1} 0.9s infinite;
`;

const SecondChild = styled(Item)`
  left: 18px;
  animation: ${ellipsis1} 0.9s infinite;
  animation-delay: 0.3s;
`;

const ThirdChild = styled(Item)`
  left: 36px;
  animation: ${ellipsis1} 0.9s infinite;
  animation-delay: 0.6s;
`;

const Loader = (props) => (
  <Wrapper {...props}>
    <FirstChild />
    <SecondChild />
    <ThirdChild />
  </Wrapper>
);

export default Loader;
