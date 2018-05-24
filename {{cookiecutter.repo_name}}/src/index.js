import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import {Root} from './pages/root/index'

render((
  <Router>
    <Route path='/' component={Root} />
  </Router>
), document.getElementById('content'))
