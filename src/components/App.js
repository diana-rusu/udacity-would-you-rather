import React from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Home from './Home'

class App extends React.Component {
    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }
    render() {
      return (
        <div>
          <Home />
        </div>
      )
    }
  }
  
  export default connect()(App)