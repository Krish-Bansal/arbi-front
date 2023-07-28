import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const Select = styled.select`
  padding: 8px;
  font-size: 14px;
`;

const Option = styled.option``;

const Dropdown = ({ label, options, value, onChange, name }) => {
  return (
    <DropdownContainer>
      <Label>{label}</Label>
      <Select value={value} onChange={onChange} name={name}>
        {options.map((option) => (
          <Option key={option} value={option}>
            {option}
          </Option>
        ))}
      </Select>
    </DropdownContainer>
  );
};

export default Dropdown;
