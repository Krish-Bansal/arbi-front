import React, { useState } from 'react';
import styled from 'styled-components';
import axios from "axios";
import { BASE_URL } from '../../../utils/requestMethod';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Text = styled.p`
  margin-right: 10px;
`;

const TextInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 10px;
`;

const ImageUploadContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageUploadInput = styled.input`
  display: none;
`;

const ImageUploadLabel = styled.label`
  padding: 10px;
  background-color: #e9e9e9;
  border-radius: 4px;
  cursor: pointer;
`;

const GSTComponent = ({ labelText, placeholderText, name,  getTheEachFileData , getTheNormalData}) => {
  const [gstNumber, setGSTNumber] = useState({});
  const [gstImage, setGstImage] = useState(null);

  const handleGstNumberChange = (event) => {
    setGSTNumber({[event.target.name]:event.target.value});
    getTheNormalData(name, event.target.value)
  };

  const handleImageUpload = async(event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file)
    const filePath = await axios.post(`${BASE_URL}/user/file-upload`, formData)
    console.log(filePath)
    getTheEachFileData(name, filePath)
    setGstImage(filePath.data.filename)
  };

  return (
    <Container>
      <Text>{labelText}:</Text>
      <TextInput
        type="text"
        placeholder={placeholderText}
        name={name}
        value={gstNumber[name]}
        onChange={handleGstNumberChange}
      />
      <ImageUploadContainer>
        <ImageUploadInput
          type="file"
          id={name}
          accept="image/*"
          name={gstImage}
          onChange={handleImageUpload}
        />
        <ImageUploadLabel htmlFor={name}>
          Upload
        </ImageUploadLabel>
        <span>{gstImage}</span>
      </ImageUploadContainer>
    </Container>
  );
};

export default GSTComponent;
