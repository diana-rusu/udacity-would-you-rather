import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { getInitialUsers, handleInitialData } from '../actions/shared'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import NavComp from './NavComp'
import ViewPoll from './ViewPoll'
import ViewPollResults from './ViewPollResults'
import Leaderboard from './Leaderboard'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import NewQuestion from './NewQuestion'

class App extends React.Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }
    render() {
      return (
      <Router>
        <div className='container'>
        <NavComp />
        <br />
        {this.props.loading === true
        ? 
        <div>
          <Route path='/login' component={Login} />
        </div>
        : <div>
          <PrivateRoute path='/' exact component={Home} /> 
          <Route path='/login' component={Login} />
          <PrivateRoute path='/new' component={NewQuestion} />
          <PrivateRoute  path='/logout' component={Logout} />
          <PrivateRoute path='/viewpoll/:id' component={ViewPoll} />
          <PrivateRoute path='/viewpollresults/:id' component={ViewPollResults} />
          <PrivateRoute path='/leaderboard' component={Leaderboard} />
        </div> 
        }
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