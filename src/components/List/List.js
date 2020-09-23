import React from "react";
import PropTypes from "prop-types";
import "./list.scss";
import uuid from "uuid";

const List = ({ type, items }) => {
  const typeMap = {
    bullet: "ul",
    numbered: "ol",
  };
  const Tag = typeMap[type];

  return (
    <Tag>
      {items.map(({ content, ...props }, index) => (
        <li key={uuid()} {...props}>
          {content}
        </li>
      ))}
    </Tag>
  );
};

List.defaultProps = {
  type: "bullet",
  items: [],
};

List.propTypes = {
  type: PropTypes.oneOf(["bullet", "numbered"]),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node,
    })
  ),
};

export default List;
