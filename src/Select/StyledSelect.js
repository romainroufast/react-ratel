import React from "react";
import styled, { css } from "styled-components";
import Select, { components } from "react-select";
import Close from "../Icon/Close";
import { darken, lighten } from "polished";

const ClearIndicator = (props) => {
  const {
    children = <Close size={20} style={{ cursor: "pointer" }} />,
    getStyles,
    innerProps: { ref, ...restInnerProps },
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles("clearIndicator", props)}
    >
      <div style={{ padding: "0px 5px" }}>{children}</div>
    </div>
  );
};

const StyledControl = styled(components.Control)`
  ${(props) =>
    props.theme &&
    css`
      background-color: rgb(
        ${props.theme.colors.form.backgroundColor}
      ) !important;
      color: rgb(${props.theme.colors.form.color}) !important;
      :focus {
        background-color: ${darken(
          "0.01",
          `rgb(${props.theme.colors.form.backgroundColor})`
        )} !important;
      }
    `}
`;

const StyledSingleValue = styled(components.SingleValue)`
  ${(props) =>
    props.theme &&
    css`
      color: rgb(${props.theme.colors.form.color}) !important;
    `}
`;

export const getCustomSelectStyles = (props) => {
  const { styles, theme } = props;
  const { control, valueContainer, menuList, ...otherStyles } = styles || {};

  return {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? "none !important" : "none !important",
      boxShadow: "none !important",
      boxSizing: "border-box",
      outline: state.isFocused ? 0 : 1,
      borderRadius: theme.border.radius,
      padding: props.lg ? ".5em" : "0em",
      fontSize: props.lg ? "14px" : "11px",
      height: props.lg ? theme.form.inputLgHeight : theme.form.inputHeight,
      minHeight: props.lg ? theme.form.inputLgHeight : theme.form.inputHeight,
      color: `rgb(${theme.form.color})`,
      ...(control || {}),
    }),
    valueContainer: (base, state) => ({
      ...base,
      padding: props.lg ? "4px 8px" : "0 .9em",
      maxHeight: props.lg ? "37px" : "35px",
      overflow: "auto",
      position: "relative",
      color: `rgb(${theme.form.color})`,
      ...(valueContainer || {}),
    }),
    menuList: (base, state) => ({
      ...base,
      maxHeight: props.lg ? "300px" : "300px",
      ...(menuList || {}),
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: darken("0.1", `rgb(${theme.form.backgroundColor})`),
      color: `rgb(${theme.form.color})`,
    }),
    multiValueLabel: (base) => ({
      ...base,
      backgroundColor: darken("0.1", `rgb(${theme.form.backgroundColor})`),
      color: `rgb(${theme.form.color})`,
    }),
    multiValueRemove: (base) => ({
      ...base,
      backgroundColor: darken("0.2", `rgb(${theme.form.backgroundColor})`),
      color: `rgb(${theme.form.color})`,
    }),
    singleValue: (base) => ({
      ...base,
      color: `rgb(${theme.form.color})`,
    }),
    placeholder: (base) => ({
      ...base,
      color: darken("0.25", `rgb(${theme.form.backgroundColor})`),
    }),
    clearIndicator: (base) => ({
      ...base,
      color: lighten("0.1", `rgb(${theme.form.color})`),
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: darken("0.1", `rgb(${theme.form.backgroundColor})`),
    }),
    noOptionMessage: (base) => ({
      ...base,
      color: darken("0.1", `rgb(${theme.form.backgroundColor})`),
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: darken("0.1", `rgb(${theme.form.backgroundColor})`),
      color: darken("0.1", `rgb(${theme.form.backgroundColor})`),
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: `rgb(${theme.form.backgroundColor})`,
    }),
    option: (base, state) => ({
      ...base,
      color: `rgb(${theme.form.color})`,
      backgroundColor:
        state.isFocused || state.isSelected
          ? darken("0.1", `rgb(${theme.form.backgroundColor})`)
          : lighten("0.1", `rgb(${props.theme.form.backgroundColor})`),
    }),
    input: (base) => ({
      ...base,
      color: `rgb(${theme.form.color})`,
    }),
    ...(otherStyles || {}),
  };
};

const _Select = (props) => {
  const {
    getOptionLabel,
    getOptionValue,
    simpleValue,
    value,
    components,
    theme,
    ...otherProps
  } = props;

  return (
    <Select
      {...otherProps}
      components={{
        ClearIndicator,
        Control: StyledControl,
        ...(components || {}),
      }}
      value={simpleValue && !props.isMulti ? [value] : value}
      getOptionLabel={(o) =>
        simpleValue && !getOptionLabel ? o : getOptionLabel(o)
      }
      getOptionValue={(o) =>
        simpleValue && !getOptionValue ? o : getOptionValue(o)
      }
      styles={getCustomSelectStyles(props)}
      theme={(th) => ({
        ...th,
        colors: {
          ...th.colors,
          ...theme.color,
          form: theme.form,
        },
      })}
    />
  );
};

export default _Select;
