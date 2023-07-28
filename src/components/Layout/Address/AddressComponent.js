import React from "react";
import styled from "styled-components";
import { states } from "../../../utils/constant";

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
`;

const Label = styled.label`
  font-weight: bold;
  margin-right: 140px;
  /* flex-shrink: 0; */
`;

const TextInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RestOfText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-left: 190px;
  gap: 10px;
`;
const AddressComponent = ({onHandleDataAddress, attchmentData}) => {
  const onHandleChange = async(event)=>{
    onHandleDataAddress(event.target.name, event.target.value)
  }
  return (
    <AddressContainer>
      <Row>
        <Label>Address:</Label>
        <TextInput type="text" placeholder="landmark" name="landmark" value={attchmentData?.landmark} onChange={onHandleChange} />
      </Row>
      <RestOfText>
        <TextInput type="text" placeholder="City" name="city" value={attchmentData?.city} onChange={onHandleChange} />
        <Select name="state" value={attchmentData?.state} onChange={onHandleChange} >
          {states.map((item)=>{
            return <option key={item.key} value={item.value}>{item.key}</option>})
          }
        </Select>
        <TextInput type="text" placeholder="PIN" name="pin" value={attchmentData?.pin} onChange={onHandleChange} />
      </RestOfText>
    </AddressContainer>
  );
};

export default AddressComponent;
