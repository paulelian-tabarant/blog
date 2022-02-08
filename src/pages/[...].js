import { Heading } from '../components/header'
import { Router } from '@reach/router'
import { Accueil } from '../components/accueil'
import { TechPosts } from '../components/techPosts'
import { PenséesPosts } from '../components/penseesPosts'
import * as React from 'react'

const App = () => (
  <>
    <Heading />
    <Router>
      <Accueil path="/" />
      <TechPosts path="/tech" />
      <PenséesPosts path="/pensees" />
    </Router>
  </>
)

export default App
