import React from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render(){
    return(
      <div id="nav-component" className="ui borderless menu inverted">
        <Link to='/about'>
        {/* add conditional for when game is not completed, warn user results will be lost */}
          <button className="item">About</button>
        </Link>
      <div className="right menu">
        <button className="item">Cheat</button>
        <button className="item">Reset</button>
      </div>
      </div>
    )
  }
}
