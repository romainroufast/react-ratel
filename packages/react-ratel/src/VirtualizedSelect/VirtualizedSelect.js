import React from "react";
import { List } from "react-virtualized";
import { components } from "react-select";
import styled from "styled-components";
import size from "lodash/size";
import Select from "../Select";

const VirtualizedRow = styled.div`
  position: relative;
  display: inline-block;
  width: 100% !important;
  overflow: hidden;
`;

const ROW_HEIGHT = 30;
const MAX_ROWS = 9;

const VirtualizedMenuList = ({ children }) => {
  const _count = size(children);
  return (
    <List
      style={{ width: "100%", position: "relative" }}
      width={1000}
      height={ROW_HEIGHT * (_count < MAX_ROWS ? _count : MAX_ROWS)}
      rowCount={_count}
      rowHeight={ROW_HEIGHT}
      rowRenderer={({ key, index, isScrolling, isVisible, style }) => (
        <VirtualizedRow key={key} style={style}>
          {children[index]}
        </VirtualizedRow>
      )}
    />
  );
};

const MenuList = (props) => {
  return (
    <components.MenuList {...props}>
      <VirtualizedMenuList>{props.children}</VirtualizedMenuList>
    </components.MenuList>
  );
};

const VirtualizedSelect = ({ components, ...props }) => (
  <Select
    {...props}
    components={{ MenuList, ...(components || {}) }}
    maxMenuHeight={200000}
  />
);
// const VirtualizedSelect = ({components, ...props}) => <OptimizedSelect {...props} components={{ MenuList }} maxMenuHeight={200000} />

export default VirtualizedSelect;
