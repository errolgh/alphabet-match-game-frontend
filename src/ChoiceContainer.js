import React from 'react'
import Choice from './Choice'

export default function ChoiceContainer(props){
  return(
    <form onSubmit={(event)=>{props.handleSubmit(event)}} value="submit" className="ui form">
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


// <form onSubmit={handleSubmit}>
//      <input type="text" value={query} onChange={handleChange} />
//      <input type="submit" value="Search" />
//    </form>
