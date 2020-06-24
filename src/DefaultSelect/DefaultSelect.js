import React from "react";
import { withTheme } from "styled-components";
import { components } from "react-select";
import Select from "../Select/StyledSelect";

const ControlComponent = (props) => <components.Control {...props} />;

class DefaultSelect extends React.Component {
  render() {
    return (
      <Select
        {...this.props}
        components={{ ...this.props.components, ControlComponent }}
      />
    );
  }
}

export default withTheme(DefaultSelect);
