import * as React from 'react'
import { Link } from '@reach/router'

export const Heading = () => {
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
          <Link to="/pensees">Pensées</Link>
        </li>
      </ul>
    </nav>
  )
}
