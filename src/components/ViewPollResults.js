import React, { Component } from 'react'
import Card  from 'react-bootstrap/Card'
import ProgressBar  from 'react-bootstrap/ProgressBar'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class ViewPollResults extends Component {
    render() {
        const {
            author, avatarURL, optionOne, optionTwo
        } = this.props.questions[this.props.match.params.id]
        const option1VotesLength = optionOne.votes.length;
        const option2VotesLength = optionTwo.votes.length;
        const now1 = (100 * option1VotesLength) / (option1VotesLength + option2VotesLength)
        const now2 = (100 * option2VotesLength) / (option1VotesLength + option2VotesLength);
        const progressInstance1 = <ProgressBar now={now1} label={`${now1}%`} />;
        const progressInstance2 = <ProgressBar now={now2} label={`${now2}%`} />;
        return (
            <div className='question'>
            <img src={avatarURL}
            alt={`Avatar of ${author}`}
            className='avatar' 
            />
            <div className='question-info'>
                <span>
                    Asked by {author}
                </span>
                <h3>Results:</h3>
                <Card bg="success" text="white" style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>Would you rather {optionOne.text}</Card.Title>
                    {progressInstance1}

                    </Card.Body>
                </Card>
                <br />
                <Card bg="light" style={{ width: '18rem' }}>
                    <Card.Body>
                    <Card.Title>Would you rather {optionTwo.text}</Card.Title>
                    {progressInstance2}
                    </Card.Body>
                </Card>
            </div>
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

export default withRouter(connect(mapStateToProps)(ViewPollResults))