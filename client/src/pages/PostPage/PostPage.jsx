import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import FormInput from '../../components/FormInput/FormInput';
import SessionDateInputContainer from '../../components/SessionDateInput/SessionDateInputContainer';
import './PostPage.css';

function PostPage() {
  const [webinarData, setWebinarData] = useState({
    country: '',
    dates: [],
    description: '',
    host: '',
    img: '',
    language: '',
    models: '',
    name: '',
    registrationURL: '',
    timeZone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setWebinarData({ ...webinarData, [name]: value });
  };

  const handleDatesChange = (dates) => {
    setWebinarData({ ...webinarData, dates: dates });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sortDate = moment(dates[0].day, 'YYYY-MM-DD').toISOString();

    const post = {
      country,
      dates: parseDates(dates),
      description,
      host,
      img,
      language,
      models: parseModels(models),
      name,
      registrationURL,
      timeZone,
      sortDate,
    };

    const config = {
      headers: { 'Access-Control-Allow-Origin': '*' },
    };

    await axios
      .post(
        'https://us-central1-marcone-msa-training-portal.cloudfunctions.net/api/post',
        post,
        config
      )
      .then((res) => alert(res.data))
      .catch((err) => alert(err));
  };

  // Input parse functions
  const parseModels = (models) => {
    return models.split(',').map((el) => el.trim().toUpperCase());
  };

  const parseDates = (dates) => {
    return dates.map((date) => ({
      day: moment(date.day, 'YYYY-MM-DD').format('dddd, MMMM Do, YYYY'),
      time: `${moment(date.startTime, 'h:mm').format('HH:mma')} - ${moment(
        date.endTime,
        'h:mm'
      ).format('HH:mma')}`,
    }));
  };

  const {
    country,
    dates,
    description,
    host,
    img,
    language,
    models,
    name,
    registrationURL,
    timeZone,
  } = webinarData;

  return (
    <div className="form-container">
      <h1>Post webinar</h1>
      <form className="form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          label="Name"
          onChange={handleChange}
        />

        <FormInput
          type="host"
          name="host"
          value={host}
          label="Host"
          onChange={handleChange}
        />

        <FormInput
          type="country"
          name="country"
          value={country}
          label="Country"
          onChange={handleChange}
        />

        <FormInput
          type="language"
          name="language"
          value={language}
          label="Language"
          onChange={handleChange}
        />

        <FormInput
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          label="Description"
          onChange={handleChange}
        />

        <SessionDateInputContainer handleDatesChange={handleDatesChange} />

        <FormInput
          type="timeZone"
          name="timeZone"
          value={timeZone}
          label="Time Zone"
          onChange={handleChange}
        />

        <FormInput
          type="text"
          placeholder="Models"
          name="models"
          value={models}
          label="Models"
          sublabel="Separate model numbers by comma, no spaces"
          onChange={handleChange}
        />
        <FormInput
          type="text"
          placeholder="Registration URL"
          name="registrationURL"
          value={registrationURL}
          label="Registration URL"
          onChange={handleChange}
        />

        <FormInput
          type="text"
          placeholder="IMG"
          name="img"
          value={img}
          label="IMG"
          sublabel="Upload to Firebase Storage and provide a URL"
          onChange={handleChange}
        />

        <button className="form-btn" type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PostPage;
