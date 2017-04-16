import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider, connect } from 'react-redux'

import createHistory from 'history/createBrowserHistory'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'

import { ConnectedRouter, routerReducer, routerMiddleware, push } from 'react-router-redux'


// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  applyMiddleware(middleware)
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const Home = () => { return (<p>Home</p>);};
const About = () => { return (<p>About</p>);};
const Topics = () => { return (<p>Topics</p>);};

const Layout = (props) => {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/topics">Topics</Link>
      </div>
      <div>
      {props.children}
      </div>
    </div>
  );
};

function mapStateToProps(state, ownProps) {
  return { router: state.router };
}

const LayoutContainer = connect(mapStateToProps)(Layout);

ReactDOM.render(
  <Provider store={store}>
    { /* ConnectedRouter will use the store from Provider automatically */ }
    <ConnectedRouter history={history}>
      <LayoutContainer>
        <Route exact path="/" component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/topics" component={Topics}/>
      </LayoutContainer>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
