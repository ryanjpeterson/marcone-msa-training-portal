import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase/firebase.utils';
import { useDataLayerValue } from '../../context/DataLayer';

// Components
import WebinarGridContainer from '../../components/Webinar/WebinarGridContainer';
import Webinar from '../../components/Webinar/Webinar';
import './WebinarsPage.css';

function WebinarsPage({ filterWebinars }) {
  const [{ webinars }, dispatch] = useDataLayerValue();
  const [loading, setLoading] = useState(true);

  const fetchWebinars = async () => {
    const session = sessionStorage.getItem('webinars');
    if (session) {
      dispatchWebinars(JSON.parse(session));
    } else {
      const data = [];

      await firestore
        .collection('webinars')
        .get()
        .then((querySnapshot) =>
          querySnapshot.forEach((doc) => data.push(doc.data()))
        )
        .catch((err) => console.log(err));

      sessionStorage.setItem('webinars', JSON.stringify(data));
      dispatchWebinars(data);
    }

    setLoading(false);
  };

  const dispatchWebinars = (data) => {
    dispatch({
      type: 'SET_WEBINARS',
      webinars: data,
    });
  };

  useEffect(() => {
    fetchWebinars();
  }, []);

  return (
    <WebinarGridContainer>
      {loading ? (
        <p>Loading</p>
      ) : (
        webinars
          .filter((webinar) => webinar.country !== filterWebinars)
          .map((webinar, i) => <Webinar webinar={webinar} key={i} />)
      )}
    </WebinarGridContainer>
  );
}

export default WebinarsPage;
