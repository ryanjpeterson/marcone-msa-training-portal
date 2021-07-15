import { Redirect, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import axios from 'axios';

// Components
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute';

// Pages
import WebinarsPage from './pages/WebinarsPage/WebinarsPage';
import LoginPage from './pages/LoginPage/LoginPage';
import PostPage from './pages/PostPage/PostPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Navbar pastWebinars />

        <div className="container">
          <Switch>
            <Route exact path="/">
              <Header />
              <WebinarsPage />
            </Route>

            <Route path="/us">
              <WebinarsPage filterWebinars="Canada" />
            </Route>

            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/post" component={PostPage} />

            <Redirect to="/" />
          </Switch>
        </div>
      </AuthProvider>
    </div>
  );
}

export default App;
