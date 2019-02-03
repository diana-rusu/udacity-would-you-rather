import React, { Component } from 'react'
import Card  from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import Dropdown  from 'react-bootstrap/Dropdown'
import { DropdownButton } from 'react-bootstrap'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import PropTypes from 'prop-types'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            errors: {},
            isLoading: false
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    

    onClick(e) {
        e.preventDefault();
        this.setState({errors: {}, isLoading: true});
        this.props.setAuthedUser(this.state.id)
        this.props.history.push("/");
    }
    onHandleChange(e) {
        // this.setState({[e.target.name]: e.target.value});
        this.setState({id: e.target.innerText});
        console.log("Set the new state", e.target.innerText)
    }
    render() {
        const { id, errors, isLoading } = this.state;
        console.log('You selected:', this.state.id)
        return (
            <Card className="text-center">
                <Card.Header>Would you rather ... </Card.Header>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Card.Text>
                    You can login by selecting user
                    </Card.Text>
                    <DropdownButton id="dropdown-item-button" title="Select user">
                    <Dropdown.Item as="button" onClick={this.onHandleChange}>johndoe</Dropdown.Item>
                    </DropdownButton>
                    <hr />
                    <Button variant="primary" onClick={this.onClick}>Login</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
            </Card>
        )
    }
}
Login.propTypes = {
    setAuthedUser: PropTypes.func.isRequired
}

Login.contextTypes = {
    router: PropTypes.object.isRequired
}
export default connect(null, { setAuthedUser })(Login)