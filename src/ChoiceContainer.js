import React from 'react'
import Choice from './Choice'

export default function ChoiceContainer(props){
  return(
    <form onSubmit={(event)=>{props.handleSubmit(event)}} className="ui form">
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
          type="submit"
          > Submit
          </button>
        </div>
      </div>
    </form>
  )
}
//edited to classic form
