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
        currentLetter: null,
        choices: [],
        numOfAsked: 0,
        numCorrect: 0,
        lettersRemaining: [],
      }
  }

//maybe i should move generateQuestionLetter call back out of question letter???

  // let gifArray = skyObj.data.map((gif) => {
  //         return gif.images.downsized_large.url
  //       })
  //       let chosenGif = gifArray[Math.round(Math.random()*skyObj.data.length)]
  //       this.setState({
  //         gif: chosenGif

  componentDidMount(){
    this.setState({
      lettersRemaining: [...alphabet_hash],
    })
    // let letter = this.state.alphabetArray[Math.round(Math.random()*this.state.alphabetArray.length)]
    // this.setCurrentLetter(letter)
  }


  // setCurrentLetter = (letter) => {
  //   this.setState({currentLetter: letter})
  // }
  //we need to update current letter once the question is mounted
  // filterSeenLetters = () => { //or perhas just a function that will remove the elements that have been seen already... less computation
  //   //find return values of iterators and find the best one to filter with, then you can use the generateQuestionLetter() to only return letters that do not exist in this array
  //
  //   //make a copy of the array and pop off until array.length = 0... LESS COMPUTATIONALLY EXPENSIVE
  // }
  generateChoices = () => {
    // make a copy of the
    //must contain this.state.currentLetter (find a way to update state and use it to add it to the array that should be exactly 6 elements long)
  }
  // removeBot = (bot) => {
  //     let copyOfCurrentBots = [...this.state.yourCurrentBotArmy].filter(botObj => {
  //       return botObj.id != bot.id
  //     })
  //   this.setState({yourCurrentBotArmy: copyOfCurrentBots})
  // }
  generateQuestionLetter = () => {
    let randomLetterObj = this.state.alphabetArray[Math.round(Math.random()*this.state.alphabetArray.length)]
    let randomLetter = randomLetterObj.character
    //how to update this.state.currentLetter to randomLetterObj
      return randomLetter
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
        />
        <ChoiceContainer/>
      </React.Fragment>
    )
  }
}

export default GameContainer
