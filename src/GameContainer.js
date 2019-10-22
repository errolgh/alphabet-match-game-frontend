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
        submitted: false,
      }
  }

  componentDidMount(){
    let correctLetter = this.state.lettersRemaining[Math.round(Math.random()*this.state.lettersRemaining.length)]
    this.setState({
      currentLetter: correctLetter,
      choices: [...this.state.choices, correctLetter],
      // lettersRemaining: filteredLetters
    })
  }

    // this.setState({
    //   lettersRemaining: filteredLetters,
    //   currentLetter: newCurrentLetter,
    //   choices: null,
    // })

    // if (!prevState.submitted) {
    //   this.setState({
    //     choices: new array of choices,
    //     correctLetter:?,
    //     selectedChoice: null,
    //     numOfAsked: this.prevState.numOfAsked+1,
    //     numCorrect: if (previous state of currentletter === correctLetter) {numCorrect+1},
    //     submitted: false,
    //   })
    // }


  updateSelectedChoice = (event) => {
    event.preventDefault()
    this.setState({selectedChoice: event.target.value})
    console.log("attempting to update choice...", event.target.value)
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let filteredLetters = this.state.lettersRemaining.filter(letter =>
      letter.character !== this.state.currentLetter.character)

    let newCurrentLetter = filteredLetters[Math.round(Math.random()*filteredLetters.length)]

    let choices = []
    choices.push(newCurrentLetter)

    let copyOfFilteredLetters = [...filteredLetters]

    for (let i = 0; i < 5; i++){
      let index = Math.round(Math.random()*copyOfFilteredLetters.length)
      let wrongLetter = copyOfFilteredLetters[index]
      choices.push(wrongLetter)
      copyOfFilteredLetters.pop(index)
    }
    
    console.log("attempting to handle submit...", event.target.value)
    this.setState({

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
