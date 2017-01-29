const React = require('react')
const ReactDOM = require('react-dom')
const { Route, Router, IndexRoute, browserHistory } = require('react-router')
const Main = require('Main')
const Home = require('Home')
const Schedule = require('Schedule')

require('./styles/app.scss')

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/eldorado/" component={Main}>
      <Route path="programacao" component={Schedule} />
      <IndexRoute component={Home} />
    </Route>
  </Router>,
  document.getElementById('app')
)
