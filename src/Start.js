import React from 'react'

class Start extends React.Component {
  render(){
    return (
        <React.Fragment>
          <h3>Learn the Ukrainian Alphabet with this phonics training game!</h3>
          <div id="start-button">
            <button
              className="ui button massive green"
              onClick={()=>{this.props.handleStartGame()}}
              >
              Begin
            </button>
          </div>
        </React.Fragment>
    )
  }
}

export default Start
