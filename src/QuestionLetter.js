import React from 'react'

class QuestionLetter extends React.Component {
  render(){
    return(
      <div className="ui centered card">
          <p id="question-letter">
          {this.props.currentLetter.character}
          </p>
      </div>
    )
  }
}

export default QuestionLetter
