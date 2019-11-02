import React from 'react'
import alphabet_hash from './alphabet_hash'
import QuestionLetter from './QuestionLetter'
import ScoreTracker from './ScoreTracker'
import ChoiceContainer from './ChoiceContainer'
// import CheatModal from './CheatModal'

export default class QuizContainer extends React.Component {
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
    this.generateChoices()
  }



  generateChoices = () => {
    //generating a new random letter
    let newIndex = Math.round(Math.random()*this.state.lettersRemaining.length - 1)
    let answerLetter = this.state.lettersRemaining[newIndex]
    this.setState({currentLetter: answerLetter})

    //array for choice selection
    let choicesArray = []
    let copyOfRemainingLetters = [...this.state.lettersRemaining]

    //splice random letters from entire alphabet, so long as they are not repeating, or the correct answer letter
    for (let i = 0; choicesArray.length < 5; i++){
      let index = Math.floor(Math.random()*alphabet_hash.length)
      console.log("index: ", index)
      let wrongLetter = alphabet_hash[index]

      if (choicesArray.includes(wrongLetter) || wrongLetter === answerLetter) {
        copyOfRemainingLetters.pop(wrongLetter)
      } else {
        choicesArray.push(wrongLetter)
        copyOfRemainingLetters.pop(wrongLetter)
      }
    }
    //splice in the correct letter at a random index in the choices array
    let randomInt = Math.round(Math.random()*5)
    choicesArray.splice(randomInt, 0, answerLetter)
    this.setState({choices: choicesArray})
    this.removeLastLetter(answerLetter)  //updates letters remaining
  }

  updateSelectedChoice = (event) => {
    event.preventDefault()
    let letterObj = alphabet_hash.find(letter =>  letter.implementation === event.target.value)
    this.setState({
      selectedChoice: letterObj,
    })
  }

  removeLastLetter = (lastLetter) => {
    let filteredLetters = this.state.lettersRemaining.filter(letter => letter.id !== lastLetter.id)
    this.setState({lettersRemaining: filteredLetters})
  }

  addPoint = () => {
    if (this.state.currentLetter === this.state.selectedChoice) {
      this.setState({numCorrect: this.state.numCorrect + 1})
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.addPoint()
    this.setState({
      numOfAsked: this.state.numOfAsked + 1,
      selectedChoice: null,
      choices: [],
      currentLetter: null,
    })
    this.componentDidMount()
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
          currentLetter={this.state.currentLetter}
        />
        {this.state.choices.length < 6 ? null : (
        <ChoiceContainer
          updateSelectedChoice={this.updateSelectedChoice}
          handleSubmit={this.handleSubmit}
          choices={this.state.choices}
        />)}
      </React.Fragment>
    )
  }
}
