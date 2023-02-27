import ListItem from "./ListItem";
import React from "react";

function List(props) {
  console.log("List rendered");

  return (
    <ul>
      {props.users.map((user) => {
        return <ListItem user={user} />;
      })}
    </ul>
  );
}

export default React.memo(List);
