import React from 'react';

import './App.css';

import Title from './Title'
import About from './About'
import GameContainer from './GameContainer'

import { Switch, Route} from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends React.Component {

  handleStartGame = () => {
    console.log("attempting to start game")
    this.props.history.push('/game')
  }

  render(){
    return (
      <React.Fragment>
        <Title/>
        <Switch>
          <Route path='/game' component={GameContainer}/>
          <Route path='/' render={()=>
            <About
              handleStartGame={this.handleStartGame}
            />
          }/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App)
