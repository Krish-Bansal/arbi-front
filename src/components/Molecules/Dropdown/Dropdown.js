import React from 'react';
import styled, { css } from 'styled-components';

const DropdownContainer = styled.div`
  display: flex;
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
  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

const Option = styled.option``;

const Dropdown = ({ label, options, value, onChange, name, disabled }) => {
  return (
    <DropdownContainer>
      <Label>{label}</Label>
      <Select value={value} onChange={onChange} name={name} disabled={disabled}>
        <option value="">Select an option</option>
        {options && options.length > 0 ? (
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No sellers available
          </option>
        )}
      </Select>
    </DropdownContainer>
  );
};

export default Dropdown;
