import React from "react";

export const UserComponent = props => {
  return (
    <div className="ui secondary vertical pointing menu">
      <a className="active item">Home</a>
      <a className="item">Messages</a>
      <a className="item">Friends</a>
    </div>
  );
};

export default UserComponent;
