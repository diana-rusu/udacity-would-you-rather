import React, { Component } from 'react'
import Card  from 'react-bootstrap/Card'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Leader extends Component {
    render() {
        const answeredQ = 7
        const createdQ = 3
        return (
            <div className='question'>
                <img src={this.props.user.avatarURL}
                alt={`Avatar of ${this.props.user.author}`}
                className='avatar' 
                />
                <div className='question-info'>
                    <h3>{this.props.user.author}</h3>
                    Answered questions: {answeredQ}
                    <br />
                    Created questions: {createdQ}
                </div>
                <hr />
                Score: {answeredQ + createdQ}
            </div>
        )
    }
}
function mapStateToProps ({authedUser, users, questions}) {
    return {
        authedUser,
        questions,
        users
    }
}

export default withRouter(connect(mapStateToProps)(Leader))