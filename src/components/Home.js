import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render () {
        console.log(this.props)
        return (
            <div>
                Home
            </div>
        )
    }
}

function mapStateToProps ({questions}) {
    return {
        questionIds: Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp) 
    }
}

export default connect(mapStateToProps)(Home)