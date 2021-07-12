import { useEffect } from 'react';
import './App.css';

// Dependencies
import { Route, Switch } from 'react-router-dom';

import { useDataLayerValue } from './context/DataLayer';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';

// Pages
import WebinarsPage from './pages/WebinarsPage/WebinarsPage';
import PostWebinarPage from './pages/PostWebinarPage/PostWebinarPage';
import SignInPage from './pages/SignInPage/SignInPage';

function App() {
  const [{ adminUser }, dispatch] = useDataLayerValue();

  useEffect(() => {
    checkForAdminUser();
  }, []);

  const checkForAdminUser = () => {
    const session = sessionStorage.getItem('adminUser');

    if (session) {
      dispatch({
        type: 'SET_ADMIN_USER',
        adminUser: JSON.parse(session),
      });
    }
  };

  return (
    <div className="App">
      <Navbar pastWebinars />

      <div className="container">
        <Switch>
          <Route exact path="/">
            <Header />
            <WebinarsPage />
          </Route>

          <Route exact path="/us">
            <WebinarsPage filterWebinars="Canada" />
          </Route>

          <Route exact path="/admin">
            {adminUser ? <PostWebinarPage /> : <SignInPage />}
          </Route>

          <Route path="/">
            <Header />
            <WebinarsPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
