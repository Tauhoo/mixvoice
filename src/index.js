import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import 'antd/dist/antd.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'

const pages = [{ url: '/', page: App }]

const root = (
  <Router>
    {pages.map(({ url, page }) => (
      <Route exact>{page}</Route>
    ))}
  </Router>
)

ReactDOM.render(root, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
