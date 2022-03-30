import React from "react";

const Link = (props) => {
  const { name, links } = props.route;
  return (
    <li className="ml-18 p-2 hover:bg-violet-500 hover:rounded hover:text-2xl">
      <a href={links}>{name}</a>
    </li>
  );
};

export default Link;
