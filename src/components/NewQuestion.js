import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

import { Redirect} from 'react-router-dom'

class NewQuestion extends Component{
    state ={
        text1: '',
        text2: '',
        redirectHome: false
    }
    handleChangeText1 = (e) => {
        const text = e.target.value
        this.setState(()=>({
            text1: text,
        }))
    }
    handleChangeText2 = (e) => {
        const text = e.target.value
        this.setState(()=>({
            text2: text,
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const { text1, text2 } = this.state
        this.props.handleAddQuestion(text1, text2)
        this.setState(() => ({
            text1: '',
            text2: '', 
            redirectHome: true
        }))
    }
    render() {
        const { text1, text2 } = this.state
        return (
            <div>
            <Form onSubmit={this.handleSubmit}>
                <Form.Label>Would you rather ...</Form.Label>
                <Form.Group controlId="option1">
                    <Form.Control value={text1} placeholder="Enter option 1" onChange={this.handleChangeText1} />
                </Form.Group>
                <Form.Label>OR</Form.Label>
                <Form.Group controlId="option2">
                    <Form.Control value={text2} placeholder="Enter option 2" onChange={this.handleChangeText2} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={text1 === '' || text2 ===''}>
                    Submit
                </Button>
            </Form>
            {this.state.redirectHome === true
            ?<Redirect to='/' />
            : null}
            </div>
            
        )
    }
}

function mapStateToProps({authedUser}) {
    return {
        authedUser
    }
}

export default connect(mapStateToProps, {handleAddQuestion})(NewQuestion)