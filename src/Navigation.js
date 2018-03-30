import React from 'react'
import { NavLink } from "react-router-dom"

export default () => (
  <ul>
    <li><NavLink exact to='/'>Home</NavLink></li>
    <li><NavLink to='/counter'>Counter</NavLink></li>
    <li><NavLink to='/tree-view'>Tree View</NavLink></li>
  </ul>
)