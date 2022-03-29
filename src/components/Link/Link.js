import React from "react";

const Link = (props) => {
  const { name, links } = props.route;
  return (
    <li className="ml-18 p-2">
      <a href={links}>{name}</a>
    </li>
  );
};

export default Link;
