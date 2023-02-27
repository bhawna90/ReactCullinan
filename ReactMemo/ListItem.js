import React from "react";

function ListItem(props) {
  console.log("ListItem rendered");

  return <li>{props.user}</li>;
}

export default ListItem;
