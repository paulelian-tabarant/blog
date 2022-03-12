import * as React from 'react'
import { Link } from '@reach/router'
import * as style from './header.module.css'

export const Header = () => {
  const { header__ul, header__li, header__link } = style
  return (
    <nav>
      <ul className={header__ul}>
        <li className={header__li}>
          <Link className={header__link} to="/">
            Accueil
          </Link>
        </li>
        <li className={header__li}>
          <Link className={header__link} to="/tech">
            Tech
          </Link>
        </li>
        <li className={header__li}>
          <Link className={header__link} to="/thoughts">
            Pensées
          </Link>
        </li>
      </ul>
    </nav>
  )
}
