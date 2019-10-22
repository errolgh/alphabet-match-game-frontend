import React from 'react'
import alphabet_hash from './alphabet_hash'
import QuestionLetter from './QuestionLetter'
import ScoreTracker from './ScoreTracker'
import ChoiceContainer from './ChoiceContainer'

export default class GameContainer extends React.Component {
  constructor(){
    super()
      this.state = {
        lettersRemaining: alphabet_hash,
        currentLetter: "",
        choices: [],
        selectedChoice: null,
        numOfAsked: 0,
        numCorrect: 0,
      }
  }

  componentDidMount(){
    this.generateChocies()
  }

  generateChocies = () => {
    let correctLetter = this.state.lettersRemaining[Math.round(Math.random()*this.state.lettersRemaining.length)]
    this.setState({currentLetter: correctLetter})

    let choices = []
    let copyOfFilteredLetters = [...this.state.lettersRemaining]

    while (choices.length < 5) {
      let index = Math.round(Math.random()*copyOfFilteredLetters.length)
      let wrongAnswer = copyOfFilteredLetters[index]
      if (!choices.includes(wrongAnswer)) {
          choices.push(wrongAnswer)
          copyOfFilteredLetters.pop(index)
      }
    }
      let randomInt = Math.round(Math.random()*5)
      choices.splice(randomInt, 0, correctLetter)
      this.setState({choices: choices})
  }

  updateSelectedChoice = (event) => {
    event.preventDefault()
    let letterObj = alphabet_hash.find(letter => {
      return letter.implementation === event.target.value
    })
    this.setState({selectedChoice: letterObj})
  }

  filterChoices = (lastLetter) => {
    console.log("filterChoices: ",lastLetter)
    let filteredLetters = this.state.lettersRemaining.filter(letter => letter.id !== lastLetter.id)
    this.setState({
      lettersRemaining: filteredLetters
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    //adds 1 point to correct answers:
    if (this.state.currentLetter === this.state.selectedChoice) {
      this.setState({numCorrect: this.state.numCorrect + 1})
    }
    //removes the last choice
    this.filterChoices(this.state.currentLetter)

    // let nextCurrentLetter = this.state.lettersRemaining[Math.round(Math.random()*this.state.lettersRemaining.length)]
    //   this.setState({currentLetter: nextCurrentLetter})

    this.setState({
      numOfAsked: this.state.numOfAsked + 1,
      selectedChoice: null,
      choices: [],
    })
    this.generateChocies()
  }

  render(){
    return(
      <React.Fragment>
        <ScoreTracker
          numCorrect={this.state.numCorrect}
          numOfAsked={this.state.numOfAsked}
        />
        <h3>What sound does this letter make?</h3>
        <QuestionLetter
          generateQuestionLetter={this.generateQuestionLetter}
          currentLetter={this.state.currentLetter}
        />
        <ChoiceContainer
          updateSelectedChoice={this.updateSelectedChoice}
          handleSubmit={this.handleSubmit}
          choices={this.state.choices}
          lettersRemaining={this.state.lettersRemaining}
        />
      </React.Fragment>
    )
  }
}
