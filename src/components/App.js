import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';

const Application1Module1 = React.lazy(() => import('Application1/Module1'));

const App = () => {
  return (
    <Router>
      <div
        style={{
          minHeight: '100vh',
          width: '100%',
          display: 'flex',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ flexBasis: '200px', backgroundColor: '#bada55' }}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/module1">Module 1</Link>
              </li>
              <li>
                <Link to="/module2">Module 2</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Switch>
          <Route path="/module1">
            <React.Suspense fallback="Loading Module 1">
              <Application1Module1 name="via Container" />
            </React.Suspense>
          </Route>
          <Route path="/module2">TODO</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
