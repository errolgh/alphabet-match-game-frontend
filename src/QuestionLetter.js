import React from 'react'

function QuestionLetter(props) {
  return(
    <div className="ui centered">
        <p id="question-letter">
        {props.currentLetter.character}
        </p>
    </div>
  )
}

export default QuestionLetter
