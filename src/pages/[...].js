import * as React from 'react'
import { Router } from '@reach/router'
import { TechPosts } from '../components/techPosts'
import { ThoughtsPosts } from '../components/ThoughtsPosts'
import { Home } from '../components/Home'
import { Header } from '../components/Header'

const App = () => (
  <>
    <Header />
    <Router>
      <Home path="/" />
      <TechPosts path="/tech" />
      <ThoughtsPosts path="/thoughts" />
    </Router>
  </>
)

export default App
