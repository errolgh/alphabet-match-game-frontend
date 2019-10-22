import React from 'react'
import Choice from './Choice'

class ChoiceContainer extends React.Component {
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

            <button
              className="ui button huge blue submit-button"
              type="submit"
              onClick={(event)=>{this.props.handleSubmit(event)}}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default ChoiceContainer
