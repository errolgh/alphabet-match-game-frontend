import React from 'react'

class Letter extends React.Component {
  render(){
    return(
      <div className="ui centered card">
          <p id="question-letter">
            {this.props.generateQuestionLetter()}
          </p>
      </div>
    )
  }
}

export default Letter
