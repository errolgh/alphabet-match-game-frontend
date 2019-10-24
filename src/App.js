import React from 'react';

import './App.css';

import Nav from './Nav'
import Title from './Title'
import About from './About'
import GameContainer from './GameContainer'
import Footer from './Footer'

import { Switch, Route} from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends React.Component {

  handleStartGame = () => {
    this.props.history.push('/game')
  }

  render(){
    return (
      <React.Fragment>
        <Nav/>
        <Title/>
        <Switch>
          <Route path='/game' component={GameContainer}/>
          <Route path='/' render={()=>
            <About
              handleStartGame={this.handleStartGame}
            />
          }/>
        </Switch>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default withRouter(App)
