import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
import WebinarGridContainer from './components/WebinarGridContainer';
import Webinar from './components/Webinar';

function App() {
  useEffect(() => {
    fetchWebinars();
  }, []);

  const fetchWebinars = async () => {
    await axios
      .get(
        'https://us-central1-marcone-msa-training-portal.cloudfunctions.net/api/getWebinars'
      )
      .then((res) => setWebinars(res.data));
  };

  const [webinars, setWebinars] = useState([]);

  return (
    <div className="App">
      <Navbar />

      <div className="container">
        <Header />

        <Route exact path="/">
          <WebinarGridContainer>
            {webinars.map((webinar, i) => (
              <Webinar webinar={webinar} key={i} />
            ))}
          </WebinarGridContainer>
        </Route>

        {/* USA filter route */}
        <Route exact path="/us">
          <WebinarGridContainer>
            {webinars
              .filter((webinar) => webinar.country === 'USA')
              .map((webinar, i) => (
                <Webinar webinar={webinar} key={i} />
              ))}
          </WebinarGridContainer>
        </Route>

        {/* Admin route */}
        <Route exact path="/postWebinar">
          <h1>Post webinar</h1>
        </Route>
      </div>
    </div>
  );
}

export default App;
