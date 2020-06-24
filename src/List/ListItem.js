import styled, { css } from "styled-components";
import breakpoint from "styled-components-breakpoint";

const ListItem = styled.li`
    display: inline-block;
    position: relative;
    padding: 1.2em 2.2em;
    text-align: center;
    cursor: pointer;

    :hover {
        background-color: ${props =>
          props.hoverBackground
            ? `rgb(${props.hoverBackground})`
            : "rgba(0,0,0,.1)"}
    }

    ::before {
        display: none;
    }
    
    ${props =>
      props.selected &&
      css`
        ::before {
          display: inline-block;
          position: absolute;
          content: "";
          bottom: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background-color: rgb(${props.theme.color.primary});
          border-radius: 0.5rem;
        }
      `}

    ${props =>
      props.alignTop &&
      css`
        vertical-align: top;
      `}

    ${props =>
      props.width &&
      css`
        width: ${props.width};
      `}

    ${breakpoint("xs")`
        padding: .8em .2em;
    `}

    ${breakpoint("sm")`
        padding: .8em .8em;
    `}

    ${breakpoint("md")`
        padding: .8em 1.2em;
    `}

    ${breakpoint("lg")`
        padding: 1.2em 2.2em;
    `}
`;

export default ListItem;

// box-shadow: 0 0.175rem 0.275rem 0 rgba(${props.theme.color.primary},.4);
