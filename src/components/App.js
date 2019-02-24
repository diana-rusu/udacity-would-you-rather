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
import Handle404 from './Handle404'
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
        {localStorage.getItem("udacity-would-token") === null
        ? 
        <Fragment>
          <Switch>
          <Route path='/login' component={Login} />
          {window.location.pathname !== '/login'
          ?
          <Fragment>
           <Redirect to={{
            pathname: "/login",
            state: { from: this.props.location }
          }} />
          </Fragment>
          : null}
          </Switch>
        </Fragment>
        : 
        localStorage.getItem("udacity-would-token") !== this.props.authedUser
        ? 
        <Fragment>
          <Switch>
          <Route path='/login' component={Login} />
          {window.location.pathname !== '/login'
          ?
          <Fragment>
           <Redirect to={{
            pathname: "/login",
            state: { from: this.props.location }
          }} />
          </Fragment>
          : null}
          </Switch>
        </Fragment>
        :
        <Fragment>
            <NavComp />
            <br />
            <Switch>
            <PrivateRoute path='/' exact component={Home} /> 
            <Route path='/login' component={Login} />
            <PrivateRoute path='/new' exact component={NewQuestion} />
            <PrivateRoute  path='/logout' exact component={Logout} />
            <PrivateRoute path='/viewpoll/:id' exact component={ViewPoll} />
            <PrivateRoute path='/viewpollresults/:id' exact component={ViewPollResults} />
            <PrivateRoute path='/leaderboard' exact component={Leaderboard} />
            <Route component={Handle404} />
            </Switch>
          </Fragment> 
        }
        </div>

      </Router>
        
      )
    }
  }

  function mapStateToProps({authedUser}) {
    return {
      authedUser
    }
  }
  
  export default connect(mapStateToProps)(App)