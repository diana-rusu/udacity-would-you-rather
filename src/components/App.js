import React from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import Nav from './Nav'
import ViewPoll from './ViewPoll'
import ViewPollResults from './ViewPollResults'
import Leaderboard from './Leaderboard'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NewQuestion from './NewQuestion'

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
          <Route path='/login' exact component={Login} />
          <Route path='/new' component={NewQuestion} />
          <Route path='/logout' component={Logout} />
          <Route path='/viewpoll/:id' component={ViewPoll} />
          <Route path='/viewpollresults/:id' component={ViewPollResults} />
          <Route path='/leaderboard' component={Leaderboard} />
          {/* <Route path='/question/:id' component={QuestionPage} />  */}
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