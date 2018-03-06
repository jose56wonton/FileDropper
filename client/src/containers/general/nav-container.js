import React, { Component } from "react";
import * as actions from "../../actions";
import { connect } from "react-redux";
import { withRouter } from "react-router";
class NavContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formType: true
    };
  }
  home = () => {
    
  }
  logout = () => {
    
  }
  login = () => {
    
  }
  user = () => {
    
  }
  render() {
    const auth = this.props.user.value;
    let right = null ;
    if(this.props.user.value){
      right = <div className="right menu">
      <a className="ui item">Logout</a>
      <a className="item"><i className="user icon" /></a>
    </div>
    }
    else{
      right = <div className="right menu">
       <a className="ui item">Login</a>}
    </div>
    }
    return (
      <div className="container">
        <div className="ui secondary pointing menu">
          <a className="active item">Home</a>
         
          {right}
          
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};


export default connect(mapStateToProps, actions)(withRouter(NavContainer)) ;
