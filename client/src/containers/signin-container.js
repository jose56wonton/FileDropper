import React, { Component } from 'react';
import { connect } from 'react-redux'
import SigninComponent from '../components/signin-component';
import * as actions from '../actions';
class SigninContainer extends Component {
    render() {
        return (
            <SigninComponent />
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {

    }
}


export default connect(mapStateToProps, actions)(SigninContainer)