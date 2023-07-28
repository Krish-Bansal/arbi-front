import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  padding: 10px;
  background-color: #ccc;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  padding: 0;
  margin: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  list-style: none;
  z-index: 1;
`;

const DropdownMenuItem = styled.li`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

const DynamicDropdown = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <DropdownButton onClick={handleDropdownToggle}>
        {selectedOption ? selectedOption.label : 'Select an option'}
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          {options.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => handleOptionSelect(option)}
            >
              {option.label}
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
};

export default DynamicDropdown;