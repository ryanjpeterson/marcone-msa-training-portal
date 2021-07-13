import React from 'react';

function SessionCounter({ count, onChange }) {
  return (
    <div className="date-input__header">
      <label className="form-input__label">Dates:</label>
      <div className="date-input__sessions">
        <label>Number of Sessions:</label>
        <input
          type="number"
          min="1"
          max="4"
          value={count}
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default SessionCounter;
