import React, { Component } from 'react'
// import Form from 'react-bootstrap/Form'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component{
    state ={
        text1: '',
        text2: ''
    }
    handleChange = (e) => {
        const text = e.target.value
        this.setState(()=>({
            text1: text
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { text1, text2 } = this.state
        const { dispatch } = this.props
        dispatch(handleAddQuestion(text1))
        console.log('New Question: ', text1)
        this.setState(() => ({
            text1: '',
            text2: ''
        }))
    }
    render() {
        const { text1, text2 } = this.state
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="option1">
                    <Form.Label>Option 1</Form.Label>
                    <Form.Control value={text1} placeholder="Enter option 1" onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="option2">
                    <Form.Label>Option 2</Form.Label>
                    <Form.Control value={text2} placeholder="Enter option 2" onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={text1 === ''}>
                    Submit
                </Button>
            </Form>
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)