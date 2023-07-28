import React from "react";
import styled from "styled-components";

const TextInputContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  gap: 20px;
`;

export const TextInputLabel = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;

const TextInputInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextInput = ({ label, value, onChange, name }) => {
  return (
    <TextInputContainer>
      <TextInputLabel>{label}</TextInputLabel>
      <TextInputInput type="text" value={value} onChange={onChange} name={name} />
    </TextInputContainer>
  );
};

export default TextInput;
