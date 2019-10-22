import React from 'react'

class QuestionLetter extends React.Component {
  render(){
    return(
      <div className="ui centered card">
        {(this.props.currentLetter.character) ? (
          <p id="question-letter">
          {this.props.currentLetter.character}
          </p>
        ) : null}
      </div>
    )
  }
}

export default QuestionLetter
