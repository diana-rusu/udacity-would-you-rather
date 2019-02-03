import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom";
import { removeState } from '../actions/authedUser'

class Logout extends Component {
    componentWillMount() {
        this.props.dispatch(removeState());
      }
    render() {
        return (
            <Redirect to="/login" />
        )
    }

}

export default connect()(Logout)