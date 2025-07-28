import React from 'react'
import { Link } from 'react-router'

const Navbar = () => {
  return (
    <div>
      <h1>Superhero App</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/superheroes">
              Traditional Superheroes
            </Link>
          </li>
          <li>
            <Link to="/rq-superheroes">
              RQ Superheroes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar