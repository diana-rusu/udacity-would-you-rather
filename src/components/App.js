import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'
import NavComp from './NavComp'
import ViewPoll from './ViewPoll'
import ViewPollResults from './ViewPollResults'
import Leaderboard from './Leaderboard'
import PrivateRoute from './PrivateRoute'
import { BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom'
import NewQuestion from './NewQuestion'

class App extends React.Component {
    state = {
      isRedirected: false
    }
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }
    render() {
      return (
      <Router>
        <div className="container">
        {this.props.loading === true
        ? 
        <Fragment>
          <Switch>
          <Route path='/login' component={Login} />
          {window.location.pathname !== '/login'
          ?
          <Fragment>
           <Redirect to="/login" />
          </Fragment>
          : null}
          </Switch>
        </Fragment>
        : <div>
            <NavComp />
            <br />
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