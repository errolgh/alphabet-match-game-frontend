import React from 'react'

class ChoiceContainer extends React.Component {
  render(){
    return(
      <form className="ui form">
        <div className="ui two column centered grid container">
        
          <div className="eight wide column">
            <button
              className="ui fluid button massive"
              onClick={(event)=>{this.props.updateSelectedChoice(event)}}
              value="choice"
            >Choice
            </button>
          </div>

          <div className="eight wide column">
            <button
              className="ui fluid button massive"
              onClick={(event)=>{this.props.updateSelectedChoice(event)}}
              value="choice"
            >Choice
            </button>
          </div>
          <div className="eight wide column">
            <button
              className="ui fluid button massive"
              onClick={(event)=>{this.props.updateSelectedChoice(event)}}
              value="choice"
            >Choice
            </button>
          </div>
          <div className="eight wide column">
            <button
              className="ui fluid button massive"
              onClick={(event)=>{this.props.updateSelectedChoice(event)}}
              value="choice"
            >Choice
            </button>
          </div>
          <div className="eight wide column">
            <button
              className="ui fluid button massive"
              onClick={(event)=>{this.props.updateSelectedChoice(event)}}
              value="choice"
            >Choice
            </button>
          </div>
          <div className="eight wide column">
            <button
              className="ui fluid button massive"
              onClick={(event)=>{this.props.updateSelectedChoice(event)}}
              value="choice"
            >Choice
            </button>
          </div>
          <div>
            <button
              className="ui button huge blue"
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
