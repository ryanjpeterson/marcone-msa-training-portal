import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

// Components
import Navbar from './components/Navbar';
import Header from './components/Header';
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
        <div className="webinar-grid" id="webinar-grid">
          {webinars.map((webinar, i) => (
            <Webinar webinar={webinar} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
