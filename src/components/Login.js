import React, { Component } from 'react'
import Card  from 'react-bootstrap/Card'
import Button  from 'react-bootstrap/Button'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'
import PropTypes from 'prop-types'
import { getUsers } from '../utils/api'
import { withRouter } from "react-router-dom";

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
        getUsers().then(users => {
            this.setState ({
                users: Object.keys(users['users'])
            })
        });   

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

export default withRouter(connect(null, { setAuthedUser })(Login))