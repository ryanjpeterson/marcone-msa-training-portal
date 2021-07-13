import React, { useState, useEffect } from 'react';

function SessionDateInput({ session, handleDateChange }) {
  const [webinarDate, setWebinarDate] = useState({
    day: '',
    startTime: '',
    endTime: '',
    session: undefined,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const s = e.target.attributes.session.value;
    setWebinarDate({ ...webinarDate, [name]: value, session: s });
  };

  useEffect(() => {
    if (!Object.values(webinarDate).includes('')) {
      handleDateChange(webinarDate);
    }
  }, [webinarDate]);

  return (
    <div className="date-input__session">
      <div className="date-input__field">
        <label className="form-input__sublabel">Day:</label>
        <input
          type="date"
          name="day"
          onChange={handleChange}
          session={session}
        />
      </div>

      <div className="date-input__field">
        <label className="form-input__sublabel">Start Time:</label>
        <input
          type="time"
          name="startTime"
          onChange={handleChange}
          session={session}
        />
      </div>

      <div className="date-input__field">
        <label className="form-input__sublabel">End Time:</label>
        <input
          type="time"
          name="endTime"
          onChange={handleChange}
          session={session}
        />
      </div>
    </div>
  );
}

export default SessionDateInput;
