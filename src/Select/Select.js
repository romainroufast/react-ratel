import React from "react";
import { withTheme } from "styled-components";
import { components } from "react-select";
import Select from "./StyledSelect";
import size from "lodash/size";

const ControlComponent = (props) => <components.Control {...props} />;

class OptimizedSelect extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.value !== this.props.value) return true;
    if (size(nextProps.options) !== size(this.props.options)) return true;
    if (size(nextProps.value) !== size(this.props.value)) return true;
    if (nextProps.theme !== this.props.theme) return true;
    if (
      this.props.simpleValue &&
      this.props.getOptionLabel &&
      nextProps.getOptionLabel !== this.props.getOptionLabel
    )
      return true;
    return false;
  }

  render() {
    return (
      <Select
        {...this.props}
        components={{ ...this.props.components, ControlComponent }}
      />
    );
  }
}

export default withTheme(OptimizedSelect);
