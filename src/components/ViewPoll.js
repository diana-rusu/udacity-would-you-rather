import React, { Component } from 'react'
import Card  from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import Form  from 'react-bootstrap/Form'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { formatQuestionUser, formatDate } from '../utils/helpers'

class ViewPoll extends Component {
    state = {
        selectedOption: ''
    }
    onClick(e, question) {
        e.preventDefault();
        const option = this.state.selectedOption
        question[option].votes.push(this.props.authedUser)
        this.props.history.push(`/viewpollresults/${this.props.match.params.id}`);
    }
    toggleCheckboxValue(e) {
        console.log('selected option', e.target.value)
        this.setState({
            selectedOption: e.target.value
        })
    }
    render() {
        const question = this.props.questions[this.props.match.params.id]
        const {
            author, avatarURL, timestamp, optionOne, optionTwo, id
        } = this.props.questions[this.props.match.params.id]
        console.log('ID', this.props.questions[this.props.match.params.id])
        return (
            <div className='question'>
            <img src={avatarURL}
            alt={`Avatar of ${author}`}
            className='avatar' 
            />
            <div className='question-info'>
                <div>{formatDate(timestamp)}</div>
                <span>
                    {author} asks:
                </span>
                <h3>Would you rather</h3>
                <label><input type="radio" value="optionOne" name="options" onChange={(e) => this.toggleCheckboxValue(e)} /> {optionOne.text}</label>
                <label><input type="radio" value="optionTwo" name="options" onChange={(e) => this.toggleCheckboxValue(e)} /> {optionTwo.text} </label>

                <hr />
                <Button variant="primary" onClick={(e) => this.onClick(e, question)}>Submit</Button>
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

export default withRouter(connect(mapStateToProps)(ViewPoll))