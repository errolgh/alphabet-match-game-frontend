import React from 'react'
import Choice from './Choice'

export default class ChoiceContainer extends React.Component {
  render(){
    return(
      <form className="ui form">
        <div className="ui two column centered grid container">
          {this.props.choices.map((choice) => {
            return <Choice
            key={choice.id}
            choice={choice}
            updateSelectedChoice={this.props.updateSelectedChoice}
            />})
          }
          <div>
          {/* the button should be greyed out until a choice is made */}
            <button
            className={`ui button green submit-button huge`}
            type="submit"
            onClick={(event)=>{this.props.handleSubmit(event)}}
            > Submit
            </button>
          </div>
        </div>
      </form>
    )
  }
}
