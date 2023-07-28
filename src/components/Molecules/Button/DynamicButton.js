import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor || '#333'};
  color: ${(props) => props.textColor || '#fff'};
  font-weight: bold;
  cursor: pointer;
`;

const DynamicButton = ({ text, backgroundColor, textColor, onClick }) => {
  return (
    <Button
      backgroundColor={backgroundColor}
      textColor={textColor}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default DynamicButton;