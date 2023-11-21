import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "./SignUp";
import axios from "axios";
import { BASE_URL } from "../utils/requestMethod";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

// Styled Container component
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
  padding: 20px;
`;

// Styled Input container component
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 5px;
`;
// Styled Input component
const Input = styled.input`
  width: 150px;
  height: 30px;
  padding: 5px;
  margin: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
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

// Main Component
function AdduserPage() {
  const [gstImage, setGstImage] = useState(null);

  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();
  const [formValues, setFormValues] = useState({ nameOfUser: '', aadharNo: '', emailId: '', whatsAppNo: '', nickName: '' })
  const handleChange = async (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Retrieve the token from localStorage
    const token = localStorage.getItem('admin');

    const updatedFormValues = { ...formValues, authorityLetter: gstImage };

    // Set the Authorization header with the token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    try {
      const response = await axios.post(`${BASE_URL}/authorize/create`, updatedFormValues, { headers });
      if (response.data) {
        enqueueSnackbar("Sign up successful! Please check your email.");
        navigate('/masterpage');
      }
    } catch (error) {
      // Handle error here
    }
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file)
    const filePath = await axios.post(`${BASE_URL}/user/file-upload`, formData)
    console.log(filePath)
    // getTheEachFileData(name, filePath)
    setGstImage(filePath.data.filename)
  };
  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <label htmlFor="nameOfUser">Name of User:</label>
        <Input type="text" id="nameOfUser" name="nameOfUser" onChange={handleChange} />
      </InputContainer>

      <InputContainer>
        <label htmlFor="aadharNo">Aadhar No. of Authorized User</label>
        <Input type="text" id="aadharNo" name="aadharNo" onChange={handleChange} />
      </InputContainer>

      <InputContainer>
        <label htmlFor="emailId">Email Id:</label>
        <Input type="email" id="emailId" name="emailId" onChange={handleChange} />
      </InputContainer>

      <InputContainer>
        <label htmlFor="whatsAppNo">Whats app No.</label>
        <Input type="text" id="whatsAppNo" name="whatsAppNo" onChange={handleChange} />
      </InputContainer>

      <InputContainer>
        <label htmlFor="nickName">Nick Name, if any:</label>
        <Input type="text" id="nickName" name="nickName" onChange={handleChange} />
      </InputContainer>
      {/* <InputContainer>
        <label htmlFor="authorityLetter">Authority Letter :</label>
        <ImageUploadContainer>
          <ImageUploadInput
            type="file"
            id="authorityLetter"
            accept="image/*"
            name="authorityLetter"
            onChange={handleImageUpload}
          />
          <ImageUploadLabel htmlFor="authorityLetter">
            Browse
          </ImageUploadLabel>
          <span>{gstImage}</span>
        </ImageUploadContainer>
      </InputContainer> */}
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AdduserPage;
