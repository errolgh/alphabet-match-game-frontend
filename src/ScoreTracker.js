import React from 'react'

class ScoreTracker extends React.Component {
  render(){
    return(
      <React.Fragment>
        <h4>Score: {this.props.numCorrect} out of {this.props.numOfAsked}</h4>
      </React.Fragment>
    )
  }
}

export default ScoreTracker
