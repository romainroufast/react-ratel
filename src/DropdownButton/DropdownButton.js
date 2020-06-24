import React from "react";
import Tooltip from "../Tooltip";
import Button from "../Button/Button";

export default ({ placement, title, children, appendTo, ...otherProps }) => {
  return (
    <Tooltip
      appendTo={appendTo || "parent"}
      interactive={true}
      placement={placement || "bottom"}
      trigger="click"
      html={
        <React.Fragment>
          {children || <React.Fragment></React.Fragment>}
        </React.Fragment>
      }
    >
      <Button type="button" onClick={(e) => e.preventDefault()} {...otherProps}>
        {title}
      </Button>
    </Tooltip>
  );
};
