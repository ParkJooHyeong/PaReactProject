import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './apis/UserInfo';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Route path="/" exact>
          <h1>Home Page</h1>
          {/* 홈 페이지의 내용을 여기에 작성 */}
        </Route>

        <Route path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  );
};

export default App;
