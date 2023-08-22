import React, { useState } from 'react';
import { styled } from 'styled-components';

const CustomDropdown = ({ label, options, value, onChange, name }) => {
  const [customOption, setCustomOption] = useState('');

  const handleCustomOptionChange = (event) => {
    setCustomOption(event.target.value);
  };

  const Label = styled.label`
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
  `;

  const Select = styled.select`
    padding: 8px;
    font-size: 14px;
    margin-bottom:10px;
  `;

  const handleAddCustomOption = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    if (customOption && !options.includes(customOption)) {
      const updatedOptions = [...options, customOption];
      onChange({ target: { name, value: customOption } }); // Passing the custom option value to the parent component's handleChange
      setCustomOption('');
    }
  };

  return (
    <div>
      <Label>{label}</Label>
      <Select value={value} onChange={onChange} name={name}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
        {customOption && !options.includes(customOption) && (
          <option value={customOption}>{customOption}</option>
        )}
      </Select>
      <br />
      <input
        type="text"
        value={customOption}
        onChange={handleCustomOptionChange}
        placeholder={`Enter a custom ${label}`}
        className='pl-2'
      />
    </div>
  );
};

export default CustomDropdown;
