import React from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import Nav from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends React.Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }
    render() {
      return (
      <Router>
        <div className='container'>
        <Nav />
        { this.props.loading === true
        ? null
        : <div>
          <Route path='/' exact component={Home} />
          {/* <Route path='/new' component={NewQuestion} />
          <Route path='/question/:id' component={QuestionPage} />  */}
        </div> }
        </div>
      </Router>
        
      )
    }
  }

  function mapStateToProps({authedUser}) {
    return {
      loading: authedUser === null
    }
  }
  
  export default connect(mapStateToProps)(App)