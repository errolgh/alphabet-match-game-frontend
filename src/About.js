import React from 'react'

class About extends React.Component {
  render(){
    return (
        <React.Fragment>
          <p>Learn the Ukrainian Alphabet with this game!</p>
          <div id="start-button">
            <button
              className="ui button massive blue"
              onClick={()=>{this.props.handleStartGame()}}
              >
              Start!
            </button>
          </div>
          <footer>Created by Errol Watson</footer>
        </React.Fragment>
    )
  }
}

export default About
