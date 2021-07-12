import React, { Fragment, useState } from 'react';
import FormInput from '../../components/FormInput';
import './PostWebinarPage.css';

function PostWebinarPage() {
  const [webinarData, setWebinarData] = useState({
    timeZone: '',
    names: '',
  });

  const [models, setModels] = useState([]);

  const handleModelInput = (e) => {
    console.log(e.target.value.replace(' ', '').split(','));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      models,
    });
  };

  return (
    <div>
      Admin Post Webinar Page
      {/* <h1>Post webinar</h1>
      <form className="post-webinar__container" onSubmit={handleSubmit}>
        <FormInput
          type="type"
          placeholder="Models (Separate by comma)"
          name="models"
          onChange={handleModelInput}
          value={models}
        />
        <FormInput type="type" placeholder="timeZone" name="timeZone" />
        <FormInput type="type" placeholder="dates" name="dates" />
        <FormInput type="type" placeholder="name" name="name" />
        <FormInput type="type" placeholder="country" name="country" />
        <FormInput type="type" placeholder="description" name="description" />
        <FormInput type="type" placeholder="host" name="host" />
        <FormInput type="type" placeholder="img" name="img" />
        <FormInput
          type="type"
          placeholder="registrationURL"
          name="registrationURL"
        />
        <button type="submit">Submit</button>
      </form> */}
    </div>
  );
}

export default PostWebinarPage;
