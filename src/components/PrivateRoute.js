import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
const PrivateRoute = ({component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        props.authUser !== null
        ? <Component {...props} />
        : <Redirect to={{
            pathname: "/login",
            state: { from: props.location }
          }} />
    )}/>
)

function mapStateToProps ({authUser}) {
    return {
        authUser
    }
}

export default withRouter(connect(mapStateToProps)(PrivateRoute))