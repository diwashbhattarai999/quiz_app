import React, { useState } from "react";

function SelectField(props) {
  const { label, options} = props;
  const { handleSelect } = props;


  const [value, setValue] = useState("");
  const handleChange = (e) => {
    const text = e.target.value;
    handleSelect(text);
    setValue(text)
  };

  const categoryOptions = options.map(({id,name}) => {
    return <option value={id} key={id} >{name}</option>;
  });


  return (
    <div className="quiz--selectField-container">
      <select required value={value} label={label} onChange={handleChange}>
        <option value=""></option>
        {categoryOptions}
      </select>
      <span>{label}</span>
    </div>
  );
}

export default SelectField;


