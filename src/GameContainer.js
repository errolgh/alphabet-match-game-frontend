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
    // an array of choices (length = 6) (including the correct one is generated)
    let correctLetter = this.state.lettersRemaining[Math.round(Math.random()*this.state.lettersRemaining.length)]
    this.setState({currentLetter: correctLetter})
    // state for choices is updated on line below
    this.generateChocies(correctLetter)
  }

  generateChocies = (correctLetter) => {
    // if (this.state.currentLetter) {
    //   let nextLetter = this.state.lettersRemaining[Math.round(Math.random()*this.state.lettersRemaining.length)]
    //   this.setState({currentLetter: nextLetter})
    //   this.setState({currentLetter: nextLetter})
    // }

    let filteredLetters = this.state.lettersRemaining.filter(letter =>
      letter.id !== correctLetter.id)

      let choices = []
      // choices.push(correctLetter)

      let copyOfFilteredLetters = [...filteredLetters]

      while (choices.length < 5) {
        //generates a random index every loop, adds it to the choices array, checks to make sure the letter doesnt already exist in our copyOfFilteredLetters array then removes it from that array
        let index = Math.round(Math.random()*copyOfFilteredLetters.length)
        let wrongAnswer = copyOfFilteredLetters[index]
        if (!choices.includes(wrongAnswer)) {
          choices.push(wrongAnswer)
          copyOfFilteredLetters.pop(index)
        } else {
          //??
          continue
          //break
          //yield
          //continue
          // (leave empty)
        }
      }


      // adds correctLetter at a random index in the choices array
      choices.splice(Math.round(Math.random()*copyOfFilteredLetters.length), 0, correctLetter)
      this.setState({
        choices: choices,
        lettersRemaining: filteredLetters
      })
  }

  updateSelectedChoice = (event) => {
    event.preventDefault()
    let letterObj = alphabet_hash.find(letter => {
      return letter.implementation === event.target.value
    })
    this.setState({selectedChoice: letterObj})
    console.log("updateSelectedChoice() letterObj: ",letterObj)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log("we are in handleSubmit")

    if (this.state.currentLetter === this.state.selectedChoice) {
      this.setState({numCorrect: this.state.numCorrect + 1})
    }
    this.setState({
      numOfAsked: this.state.numOfAsked + 1,
      currentLetter: {},
  })
  this.generateChocies(this.state.currentLetter)



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

export default GameContainer
