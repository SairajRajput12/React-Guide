import React from 'react'
import './navbar.css'
export default function Navbar() {
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-dark">
  
  <a className="navbar-brand text-warning" href="#">To Do App</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link text-warning" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-warning" href="#">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-warning" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Options
        </a>
        <div className="dropdown-menu text-warning" aria-labelledby="navbarDropdown">
          <a className="dropdown-item text-warning" href="#">Create task</a>
          <a className="dropdown-item text-warning" href="#">Delete task</a>
          <a className="dropdown-item text-warning" href="#">Show  task</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

    </ul>
  </div>
</nav>
  )
}
