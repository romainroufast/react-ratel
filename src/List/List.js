import styled, { css } from "styled-components";
import ListItem from "./ListItem";

const List = styled.ul`
  position: relative;
  list-style: none;
  margin: 0;
  padding: 0;

  ${ListItem} {
    border-radius: ${(props) => props.theme.border.radius};
  }

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.noShadow &&
    css`
      ${ListItem} {
        ::before {
          box-shadow: none !important;
        }
      }
    `}

  ${(props) =>
    props.noBorderRadius &&
    css`
      ${ListItem} {
        ::before {
          border-radius: 0 !important;
        }
      }
    `}
    
  ${(props) =>
    props.stacked &&
    css`
      ${ListItem} {
        display: block;
        width: 100%;
        text-align: left;

        ::before {
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
        }
      }
    `}
`;

export default List;

// box-shadow: -0.175rem 0 0.275rem 0 rgba(${props.theme.color.primary},.195);
