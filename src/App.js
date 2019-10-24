import React from 'react';

import './App.css';

import Nav from './Nav'
import Title from './Title'
import Start from './Start'
import QuizContainer from './QuizContainer'

import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class App extends React.Component {

  handleStartGame = () => {
    console.clear()
    this.props.history.push('/quiz')
  }

  resetQuiz = () => {
    document.location.reload()
  }

  render(){
    return (
      <React.Fragment>
        <Nav
          resetQuiz={this.resetQuiz}
        />
        <Title/>
        <Switch>
          <Route path='/quiz' component={QuizContainer}/>
          <Route exact={true} render={()=>
            <Start
              handleStartGame={this.handleStartGame}
            />
          }/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App)
