import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import { Route, Redirect, BrowserRouter as Router } from 'react-router-dom'

import 'antd/dist/antd.css'

import ButtonPage from './ButtonPage'
import AnimationPage from './AnimationPage'

const pages = [
  { path: '/', exact: true, component: ButtonPage },
  { path: '/animation', exact: true, component: AnimationPage },
  { path: '*', components: () => <Redirect to="/" /> },
]

const root = (
  <Router>
    {pages.map((page, index) => (
      <Route key={index} {...page} />
    ))}
  </Router>
)

ReactDOM.render(root, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
