import React, { Component } from 'react'
import { connect } from 'react-redux'

import { formatQuestionUser, formatDate } from '../utils/helpers'
import Button from 'react-bootstrap/Button'

class Question extends Component {
    
    render() {
        console.log('PROPS', this.props)
        const { question } = this.props
        const {
            name, avatar, timestamp, optionOne, optionTwo, id
        } = question
        console.log('AVATAR:', question)
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
                    <Button>View Poll</Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser, users, questions}, {id}) {
    const question = questions[id]
    return {
        authedUser,
        question: question
        ? formatQuestionUser(question, users[question.author], authedUser)
        : null
    }
}

export default connect(mapStateToProps)(Question)