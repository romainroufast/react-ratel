import React from "react";
import styled, { css, keyframes } from "styled-components";
import Box from "../Box";
import Overlay from "../Overlay";

const appear = keyframes`
  from {
    opacity: .5;
  }

  to {
    opacity: 1;
  }
`;

const O = styled(Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3000;
  width: 100%;
  height: 100%;

  ${(props) =>
    props.transition &&
    css`
      animation: ${appear} 0.2s cubic-bezier(0, 0, 0, 0.99);
    `}

  ${(props) =>
    props.show === false &&
    css`
      display: none;
    `}
`;

const Z = styled(Box)`
    margin: 0 auto;
    width: auto;
    max-width: 90%;
    max-height: 95%;
    z-index: 3001;
    top: 50%;
    transform: translateY(-50%);
    animation: none;

    ${(props) =>
      props.sm &&
      css`
        max-width: 50rem;
      `}

    ${(props) =>
      props.md &&
      css`
        max-width: 75rem;
      `}

    ${(props) =>
      props.show === false &&
      css`
        display: none;
      `}
`;

class Modal extends React.Component {
  componentDidMount() {
    if (this.props.show !== false) document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.body.style.overflow = "auto";
  }

  componentDidUpdate(prevProps) {
    if (this.props.show !== prevProps.show) {
      if (this.props.show === false) document.body.style.overflow = "auto";
      else document.body.style.overflow = "hidden";
    }
  }

  render() {
    return (
      <O
        onClick={(e) =>
          e.currentTarget === e.target &&
          this.props.onClose &&
          this.props.onClose()
        }
        show={this.props.show}
      >
        <Z {...this.props} />
      </O>
    );
  }
}

export default Modal;
