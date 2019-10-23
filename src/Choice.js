import React from 'react'

class Choice extends React.Component {
  render(){
    return(
      <div className="eight wide column">
        <button
          className="ui fluid massive button"
          onClick={(event)=>{this.props.updateSelectedChoice(event)}}
          value={this.props.choice.implementation}
        >
        {this.props.choice.implementation}
        </button>
      </div>
    )
  }
}

export default Choice
