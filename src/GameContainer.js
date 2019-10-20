import React from 'react'
import alphabet_hash from './alphabet_hash'
import QuestionLetter from './QuestionLetter'
import ScoreTracker from './ScoreTracker'
import ChoiceContainer from './ChoiceContainer'


class GameContainer extends React.Component {
  constructor(){
    super()
      this.state = {
        alphabetArray: alphabet_hash,
        lettersRemaining: alphabet_hash,
        currentLetter: {},
        choices: [],
        selectedChoice: null,
        numOfAsked: 0,
        numCorrect: 0,
      }
  }

//this code is so broken rn:
  componentDidMount(){
    //choices must be 6 elements in length and contain the correct answer (currentletter's object)
    let letter = this.state.alphabetArray[Math.round(Math.random()*this.state.alphabetArray.length)]
    let choices = []
    choices.push(letter)
    //select 5 more objects that are not included in choices array and push into choices array if not included
    console.log(this.state.lettersRemaining)

    let wrongletter = this.state.alphabetArray[Math.round(Math.random()*this.state.alphabetArray.length)]
      if (choices.length < 6 && wrongletter !== letter) {
        choices.push(wrongletter)
        let copyOfLettersRemaining = [...this.state.lettersRemaining].filter(leftLetter => {
          return !this.state.choices.includes(letter)
        })
      }
    this.setState({
      currentLetter: letter,
      choices: choices
    })
  }

  render(){
    return(
      <React.Fragment>
        <ScoreTracker
          numCorrect={this.state.numCorrect}
          numOfAsked={this.state.numOfAsked}
        />
        <h3>Choose the correct sound for this letter:</h3>
        <QuestionLetter
          generateQuestionLetter={this.generateQuestionLetter}
          currentLetter={this.state.currentLetter}
        />
        <ChoiceContainer/>
      </React.Fragment>
    )
  }
}

export default GameContainer
