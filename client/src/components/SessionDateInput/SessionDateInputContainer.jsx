import React, { useEffect, useState } from 'react';
import SessionCounter from '../SessionCounter/SessionCounter';
import SessionDateInput from './SessionDateInput';

function SessionDateInputContainer({ handleDatesChange }) {
  const [sessionCount, setSessionCount] = useState(1);
  const [dates, setDates] = useState([]);

  const handleSessionCountChange = (e) => {
    setSessionCount(e.target.value);
  };

  const handleDateChange = (date) => {
    const newArr = dates.filter((d) => d.session !== date.session);
    setDates([...newArr, date]);
  };

  useEffect(() => {
    handleDatesChange(dates);
  }, [dates]);

  return (
    <div className="date-input__container">
      <SessionCounter
        count={sessionCount}
        onChange={handleSessionCountChange}
      />
      {Array.from({ length: sessionCount }, (x, i) => i).map((y, i) => (
        <SessionDateInput
          key={i}
          session={i}
          handleDateChange={handleDateChange}
        />
      ))}
    </div>
  );
}

export default SessionDateInputContainer;
