import React from "react";
import PropTypes from "prop-types";
import "@coopdigital/foundations-typography/dist/typography.css";

const variantList = {
  mega: "coop-t-h-mega",
  lead: "coop-t-lead-p",
  regular: "coop-t-regular",
  medium: "coop-t-medium",
  bold: "coop-t-bold",
};

const Text = ({ className, variant, type, href, children, ...props }) => {
  const TagName = type;
  const variantClassName = variantList[variant]
    ? className
      ? `${variantList[variant]} ${className}`
      : variantList[variant]
    : className;

  const tagAttributes = {
    className: variantClassName,
    ...props,
  };

  if (type === "a") {
    const linkHref = href || tagAttributes.href;
    tagAttributes.href = linkHref;
  }

  return <TagName {...tagAttributes}>{children}</TagName>;
};

Text.defaultProps = {
  type: "p",
  variant: "regular",
  className: null,
  href: null,
  children: null,
};

Text.propTypes = {
  className: PropTypes.string,
  variant: PropTypes.oneOf(Object.keys(variantList)),
  type: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6", "p", "a"]),
  href: PropTypes.string,
  children: PropTypes.node,
};

export default Text;
