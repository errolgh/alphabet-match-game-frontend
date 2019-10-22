import React from 'react'
import alphabet_hash from './alphabet_hash'
import QuestionLetter from './QuestionLetter'
import ScoreTracker from './ScoreTracker'
import ChoiceContainer from './ChoiceContainer'

class GameContainer extends React.Component {
  constructor(){
    super()
      this.state = {
        lettersRemaining: alphabet_hash,
        currentLetter: {},
        choices: [],
        selectedChoice: null,
        numOfAsked: 0,
        numCorrect: 0,
      }
  }

  componentDidMount(){
    let correctLetter = this.state.lettersRemaining[Math.round(Math.random()*this.state.lettersRemaining.length)]
    this.setState({currentLetter: correctLetter})
    this.generateChocies(correctLetter)
    console.log("componentDidMount()", correctLetter)
    this.setState({choices: [...this.state.choices, correctLetter]})
  }




  updateSelectedChoice = (event) => {
    event.preventDefault()
    this.setState({selectedChoice: event.target.value})
    console.log("attempting to update choice...", event.target.value)
  }

  generateChocies = (correctLetter) => {
    // event.preventDefault()
    let filteredLetters = this.state.lettersRemaining.filter(letter =>
      letter.character !== correctLetter)

      let choices = []
      choices.push(correctLetter)

      let copyOfFilteredLetters = [... filteredLetters]

      for (let i = 0; i < 5; i++) {
        let index = Math.round(Math.random()*copyOfFilteredLetters.length)
        let wrongAnswer = copyOfFilteredLetters[index]
        choices.push(wrongAnswer)
        copyOfFilteredLetters.pop(index)
      }
      console.log("attempting to generate choices... ", choices)
      console.log("currentLetter is: ", correctLetter)
      this.setState({choices: choices})
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let filteredLetters = this.state.lettersRemaining.filter(letter =>
      letter.character !== this.state.currentLetter.character)
      //createds an array without the previous currentLetter

    let nextCurrentLetter = filteredLetters[Math.round(Math.random()*filteredLetters.length)]
    //generates a new currentLetter

    let choices = []
    choices.push(nextCurrentLetter)
    // an array of choices with the next currentLetter

    let copyOfFilteredLetters = [...filteredLetters]
    // a copy of the array so we can pull new wrongAnswer (5)

    for (let i = 0; i < 5; i++) {
      let index = Math.round(Math.random()*copyOfFilteredLetters.length)
      let wrongAnswer = copyOfFilteredLetters[index]
      choices.push(wrongAnswer)
      copyOfFilteredLetters.pop(index)
    }

    console.log("array of 6 choices: ", choices)

    console.log("attempting to handle submit...", event.target.value)
    this.setState({

    })
  }
  //     numOfAsked: this.prevState.numOfAsked+1,
  //     numCorrect: if (previous state of currentletter === correctLetter) {numCorrect+1},

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
        <ChoiceContainer
          updateSelectedChoice={this.updateSelectedChoice}
          handleSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}

export default GameContainer

// 1. need to add 5 more random letters object to choices array (must be a total of 6 elements)
// 2. check to make sure that none of the letters === correctLetter
// 3. add that letter iteratively to the choices array
// 4. remove correctLetter from lettersRemaining (update with this.setState)
