import React from 'react'
import Choice from './Choice'

export default function ChoiceContainer(props){
  return(
    <form className="ui form">
      <div className="ui two column centered grid container">
        {props.choices.map((choice) => {
          return <Choice
          key={choice.id}
          choice={choice}
          updateSelectedChoice={props.updateSelectedChoice}
          />})
        }
        <div>
        {/* the button should be greyed out until a choice is made */}
          <button
          className={`ui button green submit-button huge`}
          onClick={(event)=>{props.handleSubmit(event)}}
          > Submit
          </button>
        </div>
      </div>
    </form>
  )
}
