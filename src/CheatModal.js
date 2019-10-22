import React from 'react'

export default class CheatModal extends React.Component {
  render(){
    return(
      <React.Fragment>
        <div className="ui basic active modal">
          <div className="ui icon header">
            <i className="archive icon"></i>
              Archive Old Messages
          </div>
          <div className="content">
            <p>Your inbox is getting full, would you like us to enable automatic archiving of old messages?</p>
          </div>
          <div className="actions">
            <div className="ui red basic cancel inverted button">
              <i className="remove icon"></i>
                No
            </div>
            <div className="ui green ok inverted button">
              <i className="checkmark icon"></i>
                Yes
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
