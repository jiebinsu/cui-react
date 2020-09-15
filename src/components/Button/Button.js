import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import "./button.scss";

const Button = ({
  className,
  variant,
  type,
  size,
  disabled,
  fullWidth,
  isLoading,
  children,
  ...props
}) => {
  const dynamicClasses = classNames("coop-btn", [
    variant && `coop-btn--${variant}`,
    fullWidth && "coop-btn--full-width",
    isLoading && "coop-btn--loading",
    size === "small" && "coop-btn--small",
  ]);

  const classes = variant === "link" ? "coop-t-link" : dynamicClasses;

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  size: "medium",
  disabled: false,
  fullWidth: false,
  isLoading: false,
  className: null,
  variant: null,
  children: null,
};

Button.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "white", "grey", "link"]),
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  size: PropTypes.oneOf(["small", "medium"]),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

export default Button;
