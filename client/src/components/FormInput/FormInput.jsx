import './FormInput.css';

function FormInput({
  type,
  placeholder,
  label,
  sublabel,
  onChange,
  name,
  value,
}) {
  const defaultInput = (
    <input
      className="form-input"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
      required
    />
  );

  // JSX input templates
  const hostInput = (
    <select className="form-input" onChange={onChange} name={name}>
      <option value="" defaultValue hidden>
        Select Host
      </option>
      <option className="form-select" value="Rick Kuemin">
        Rick Kuemin
      </option>
      <option className="form-select" value="George Schick">
        George Schick
      </option>
      <option className="form-select" value="Donald Côté">
        Donald Côté
      </option>
    </select>
  );

  const countryInput = (
    <select className="form-input" onChange={onChange} name={name}>
      <option defaultValue hidden>
        Select Country
      </option>
      <option value="USA">USA</option>
      <option value="Canada">Canada</option>
    </select>
  );

  const languageInput = (
    <select className="form-input" onChange={onChange} name={name}>
      <option defaultValue hidden>
        Select Language
      </option>
      <option value="ENG">English</option>
      <option value="FRE">French</option>
    </select>
  );

  const timeZoneInput = (
    <select className="form-input" onChange={onChange} name={name}>
      <option defaultValue hidden>
        Select Time Zone
      </option>
      <option value="EST">EST</option>
      <option value="PST">PST</option>
    </select>
  );

  const renderInput = (type) => {
    switch (type) {
      case 'host':
        return hostInput;

      case 'country':
        return countryInput;

      case 'language':
        return languageInput;

      case 'timeZone':
        return timeZoneInput;

      default:
        return defaultInput;
    }
  };

  return (
    <div className="form-input__container">
      <div className="form-input__label-container">
        {label && <label className="form-input__label">{label}</label>}
        {sublabel && <span className="form-input__sublabel">{sublabel}</span>}
      </div>
      {renderInput(type)}
    </div>
  );
}

export default FormInput;
