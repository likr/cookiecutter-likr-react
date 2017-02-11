import 'babel-polyfill'
import React from 'react'
import {render} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import {Root} from './pages/root/index'

render((
  <Router history={browserHistory}>
    <Route path='/' component={Root} />
  </Router>
  ), document.getElementById('content'))
