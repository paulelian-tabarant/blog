import * as React from 'react'
import { Link } from '@reach/router'
import { header__ul, header__li, header__link } from './header.module.css'
import { PageProps } from 'gatsby'

export const Header: React.FC<PageProps> = () => {
  return (
    <header>
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
    </header>
  )
}
