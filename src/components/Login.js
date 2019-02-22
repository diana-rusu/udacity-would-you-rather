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
            isLoading: false, 
            users: []
        }
        this.onHandleChange = this.onHandleChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    componentDidMount() {   
        this.setState({
            users: Object.keys(this.props.users)
        })

    }
    

    onClick(e) {
        e.preventDefault();
        this.setState({errors: {}, isLoading: true});
        this.props.setAuthedUser(this.state.id)
        this.props.history.push("/");
    }
    onHandleChange(e) {
        this.setState({id: e.target.value});
    }
    render() {
        const { id, errors, isLoading } = this.state;
        let defaultUserValue = [<option key="default">select user...</option>]
        let optionUsers = this.state.users.map((user) =>
                <option key={user}>{user}</option>
            );
        console.log('Userssss:', defaultUserValue.concat(optionUsers))
        
        return (
            <Card className="text-center">
                <Card.Header>Would you rather ... </Card.Header>
                <Card.Body>
                    <Card.Title>Login</Card.Title>
                    <Card.Text>
                    You can login by selecting user
                    </Card.Text>
                    <select onChange={this.onHandleChange}>
                        {defaultUserValue.concat(optionUsers)}
                    </select>
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

function mapStateToProps({users}) {
    return {
        users
    }
}
export default connect(mapStateToProps, { setAuthedUser })(Login)