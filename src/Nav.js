import React from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends React.Component {
  render(){
    return(
      <div id="nav-component" class="ui borderless menu inverted">
        <Link to='/about'>
        {/* add conditional for when game is not completed, warn user results will be lost */}
          <a className="item">About</a>
        </Link>
      <div className="right menu">
        <a className="item">Cheat</a>
        <a className="item">Reset</a>
      </div>
      </div>
    )
  }
}
