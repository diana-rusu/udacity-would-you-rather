import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Leader from './Leader'

class Leaderboard extends Component {
    render() {
        return (
            <div>
                {Object.values(this.props.users).map((user) => {
                    return ([<Leader user={user} key={user.id} />,<br />])
                })}
                
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

export default withRouter(connect(mapStateToProps)(Leaderboard))