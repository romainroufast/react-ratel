/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import Input from "../Input/Input";

const MaxRange = styled(Input)`
  position: absolute;
  top: 20px;
  background: transparent;

  :focus {
    background: transparent;
  }

  ::-webkit-slider-runnable-track {
    background: transparent;
  }

  ::-moz-range-track {
    background: transparent;
  }

  ::-ms-fill-upper {
    background: transparent;
  }

  :focus::-ms-fill-lower {
    background: transparent;
  }

  ::-webkit-slider-thumb {
    position: relative;
    margin-top: -27px;
  }

  ::-moz-range-thumb {
    position: relative;
    margin-top: -27px;
  }

  ::-ms-thumb {
    position: relative;
    margin-top: -27px;
  }
  // position:relative;
  // z-index: 1;
`;

const MinRange = styled(Input)`
  top: 0;
  background: transparent !important;
  :focus {
    background: transparent;
  }
`;

const RangeWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: top;
`;

class Range extends React.Component {
  state = {
    min: this.props.min !== undefined ? this.props.min : 0,
    max: this.props.max !== undefined ? this.props.max : 100,
  };

  change = this.change.bind(this);

  change(key, val) {
    const parsedVal = parseFloat(val);
    if (key === "min" && parsedVal >= this.state.max) return;
    if (key === "max" && parsedVal <= this.state.min) return;

    this.setState({ [key]: parsedVal });
    this.props.onChange &&
      this.props.onChange({ min: this.state.min, max: this.state.max });
  }

  render() {
    const { onChange, ...otherProps } = this.props;

    return (
      <RangeWrapper>
        {/* Slider max */}
        <MaxRange
          onChange={(e) => this.change("max", e.currentTarget.value)}
          value={this.state.max}
          type="range"
          {...otherProps}
        />

        {/* Slider min */}
        <MinRange
          onChange={(e) => this.change("min", e.currentTarget.value)}
          value={this.state.min}
          type="range"
          {...otherProps}
        />
      </RangeWrapper>
    );
  }
}

export default Range;
