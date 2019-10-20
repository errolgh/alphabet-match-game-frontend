import React from 'react'
import alphabet_hash from './alphabet_hash'
import Letter from './Letter'

class GameContainer extends React.Component {

  state = {
    alphabetArray: alphabet_hash,
  }

  generateQuestionLetter = () => {
    return this.state.alphabetArray[Math.round(Math.random()*this.state.alphabetArray.length)].character
  }

  render(){
    return(
      <React.Fragment>
        <p>Choose the correct sound for this letter:</p>
        <Letter
          generateQuestionLetter={this.generateQuestionLetter}
        />
      </React.Fragment>
    )
  }
}

export default GameContainer
