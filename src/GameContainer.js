import React from 'react'
import alphabet_hash from './alphabet_hash'
import QuestionLetter from './QuestionLetter'
import ScoreTracker from './ScoreTracker'
import ChoiceContainer from './ChoiceContainer'


class GameContainer extends React.Component {

  state = {
    alphabetArray: alphabet_hash,
    currentLetter: "",
    choices: [],
    numOfAsked: 0,
    numCorrect: 0,
    seenLetters: [],
  }
  //keep state here... every other child component should receive GameContainer's props

  //make a copy of the array and pop off until array.length = 0

  generateQuestionLetter = () => {
    return this.state.alphabetArray[Math.round(Math.random()*this.state.alphabetArray.length)].character
  }

//game container should manage state for questionLetter, answerContainer, and scoreTracker. so break this component into its separate duties.

//change all these p tags to h tags (css)

  render(){
    return(
      <React.Fragment>
        <ScoreTracker
          numCorrect={this.state.numCorrect}
          numOfAsked={this.state.numOfAsked}
        />
        <QuestionLetter
          generateQuestionLetter={this.generateQuestionLetter}
        />
        <ChoiceContainer/>
      </React.Fragment>
    )
  }
}

export default GameContainer
