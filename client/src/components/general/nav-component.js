import React from "react";

export const NavComponent = props => {
  let state = null;
  switch (props.currentPath) {
    case "/":
      state = "home";
      break;
    case "/auth":
      state = "auth";
      break;
    default:
      state = "user";
      break;
  }
  return (
    <div className="ui secondary container pointing menu ">
      <a
        onClick={props.home}
        className={`item ${state === "home" ? "active" : null}`}
      >
        Home
      </a>
      {props.authed
        ? <div className="right menu">
            <a
              onClick={props.logout}
              className={`item ${state === "auth" ? "active" : null}`}
            >
              Logout
            </a>
            <a
              onClick={props.user}
              className={`item ${state === "user" ? "active" : null}`}
            >
              <i className="user icon" />
            </a>
          </div>
        : <div className="right menu">
            <a
              onClick={props.login}
              className={`item ${state === "auth" ? "active" : null}`}
            >
              Login
            </a>
          </div>}
    </div>
  );
};

export default NavComponent;
