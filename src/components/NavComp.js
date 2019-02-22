import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { connect } from 'react-redux'

class NavComp extends Component {
    render() {
        return (
            <Navbar bg="light" variant="dark">
                <Nav className="mr-auto">
                <ul>
                    <li>
                    <NavLink to='/' exact activeClassName='active'>
                        Home
                    </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                    <NavLink to='/new'>
                        New Question
                    </NavLink>
                    </li>
                </ul>
                <ul>
                    <li>
                    <NavLink to='/leaderboard'>
                        Leaderboard
                    </NavLink>
                    </li>
                </ul>
                </Nav>
                <Nav className="mr-sm-2">
                {
                    (this.props.authedUser !== null)
                    ? <div> Welcome {this.props.authedUser} | </div>
                    : <div></div>
                }
                <NavLink to='/logout'>
                    Logout
                 </NavLink>
                </Nav>
            </Navbar>
        )
    }
    
}

function mapStateToProps ({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NavComp)