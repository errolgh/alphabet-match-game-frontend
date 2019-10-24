import React from 'react'

export default function QuestionLetter(props) {
  return <div className="ui centered">
          <p id="question-letter">{props.currentLetter.character}</p>
         </div>
}
