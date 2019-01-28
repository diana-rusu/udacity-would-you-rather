import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tabs, Tab } from 'react-bootstrap';
import Question from './Question'

class Home extends Component {
    render () {
        return (
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
        <Tab eventKey={1} title="Answered Questions">
            <ul>
                {this.props.questionIds.map((id) =>(
                    <li key={id}>
                        {/* <div> Question ID: {id}</div> */}
                        <Question id={id} />
                    </li>
                ))}
            </ul>
        </Tab>
        <Tab eventKey={2} title="Unanswered Questions">
            Tab 2 content
        </Tab>
        </Tabs>
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