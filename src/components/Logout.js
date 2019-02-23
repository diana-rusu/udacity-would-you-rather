import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect, withRouter } from "react-router-dom";
import { removeState } from '../actions/authedUser'

class Logout extends Component {
    componentWillMount() {
        this.props.dispatch(removeState());
      }
    render() {
        return (
            <Redirect to="/login" />
            // <div>
            // {this.props.history.push("/login")}
            // </div>
        )
    }

}

export default withRouter(connect()(Logout))