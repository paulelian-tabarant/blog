import * as React from 'react'
import { Link } from '@reach/router'

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/tech">Tech</Link>
        </li>
        <li>
          <Link to="/thoughts">Pensées</Link>
        </li>
      </ul>
    </nav>
  )
}
