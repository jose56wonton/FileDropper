import React from "react";
import SessionCreatorContainer from '../../containers/session/session-creator-container';
export const UserComponent = props => {
  return (
    <div className="ui container">
      <SessionCreatorContainer />
    </div>
  );
};

export default UserComponent;
