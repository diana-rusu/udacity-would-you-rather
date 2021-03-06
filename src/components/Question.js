import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatQuestionUser, formatDate } from '../utils/helpers'
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom'

class Question extends Component {
    onClick(e, id, status) {
        e.preventDefault();
        if(status === 'answered'){
            this.props.history.push(`/viewpollresults/${id}`);
        }
        else if(status === 'unanswered'){
            this.props.history.push(`/viewpoll/${id}`);
        }
    }
    render() {
        const { question } = this.props
        const {
            name, avatar, timestamp, optionOne, id
        } = question
        return (
            <div className='question'>
                <img src={avatar}
                alt={`Avatar of ${name}`}
                className='avatar' 
                />
                <div className='question-info'>
                    <div>{formatDate(timestamp)}</div>
                    <span>
                        {name} asks:
                    </span>
                    <h3>Would you rather</h3>
                    <div>{optionOne.text}</div>
                    <Button variant="primary" onClick={(e) => this.onClick(e,id, this.props.status)}>View Poll</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, {status, id}) {
    const question = questions[id]
    return {
        authedUser,
        question: question
        ? formatQuestionUser(question, users[question.author], authedUser)
        : null
    }
}

export default withRouter(connect(mapStateToProps)(Question))