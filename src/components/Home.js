import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap';
import Question from './Question'

class Home extends Component {
    state = {
        answered: null,
        unanswered: null
    }
    componentWillMount () {
        let answeredIds = []
        this.props.questionIds.filter((questionID) => {
            let question = this.props.questions[questionID]
            const votesTotal = question.optionOne.votes.concat(question.optionTwo.votes)
            for (let vote in votesTotal) {
                if (votesTotal[vote] === this.props.authedUser) {
                    answeredIds.push(questionID)
                }
            }
            return null
        })
        this.setState(() => ({
            answered: answeredIds, 
            unanswered: this.props.questionIds.filter(f => !answeredIds.includes(f))
        }))
    }
    render () {
        return (
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
            <Tab eventKey={1} title="Unanswered Questions">
                <ul>
                {this.state.unanswered.map((id) =>(
                        <li key={id}>
                            <Question status={'unanswered'} id={id} />
                        </li>
                    ))}
                </ul>
            </Tab>
            <Tab eventKey={2} title="Answered Questions">
                <ul>
                    {this.state.answered.map((id) =>(
                        <li key={id}>
                            <Question status={'answered'} id={id} />
                        </li>
                    ))}
                </ul>
            </Tab>
        </Tabs>
        )
    }
}

function mapStateToProps ({authedUser, questions}) {
    return {
        authedUser,
        questions,
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp) 
    }
}

export default connect(mapStateToProps)(Home)