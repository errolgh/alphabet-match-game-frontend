import React from 'react'
import alphabet_hash from './alphabet_hash'
import QuestionLetter from './QuestionLetter'
import ScoreTracker from './ScoreTracker'
import ChoiceContainer from './ChoiceContainer'
// import CheatModal from './CheatModal'

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
        //choiceSelected: false,
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

     for (let i = 0; choices.length < 5; i++) {
      let index = Math.round(Math.random()*copyOfFilteredLetters.length)
      let wrongAnswer = copyOfFilteredLetters[index]
      if (!choices.includes(wrongAnswer) && correctLetter !== wrongAnswer) {
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
    // console.log(event)
    // console.log(letterObj)
    this.setState({selectedChoice: letterObj})
  }

  removeLastLetter = (lastLetter) => {
    let filteredLetters = this.state.lettersRemaining.filter(letter => letter.id !== lastLetter.id)
    this.setState({
      lettersRemaining: filteredLetters
    })
    console.log("removeLastLetter: ",lastLetter)
    console.log("lettersRemaining: ", filteredLetters)
  }

  addPoint = () => {
    if (this.state.currentLetter === this.state.selectedChoice) {
      this.setState({numCorrect: this.state.numCorrect + 1})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.addPoint()
    this.removeLastLetter(this.state.currentLetter)
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
      {/* <CheatModal/> */}
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
// let nextCurrentLetter = this.state.lettersRemaining[Math.round(Math.random()*this.state.lettersRemaining.length)]
//   this.setState({currentLetter: nextCurrentLetter})
