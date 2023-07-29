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
  const navigate = useNavigate()
  const { enqueueSnackbar } = useSnackbar();
  const [formValues, setFormValues] = useState({nameOfUser: '', aadharNo: '', emailId:'', whatsAppNo: '', nickName: ''})
  const handleChange = async (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  };
  const handleSubmit = async(e)=>{
    e.preventDefault()
    const data = await axios.post(`${BASE_URL}/authorize/create`, formValues);
    console.log("hi dataaa", data);
    if(data){
      enqueueSnackbar("sign up successfully!, please check your mail")
      navigate('/login')
    }
  }
  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer>
        <label htmlFor="nameOfUser">Name of User:</label>
        <Input type="text" id="nameOfUser" name="nameOfUser" onChange={handleChange} />
      </InputContainer>

      <InputContainer>
        <label htmlFor="aadharNo">Aadhar No. of Authorized User</label>
        <Input type="text" id="aadharNo" name="aadharNo" onChange={handleChange}/>
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
        <Input type="text" id="nickName" name="nickName" onChange={handleChange}/>
      </InputContainer>
      <InputContainer>
      <label htmlFor="authorityLetter">Nick Name, if any :</label>
      <ImageUploadContainer>
        <ImageUploadInput
          type="file"
          id="authorityLetter"
          accept="image/*"
          // name={gstImage}
          // onChange={handleImageUpload}
        />
        <ImageUploadLabel htmlFor="authorityLetter">
          Browse
        </ImageUploadLabel>
        {/* <span>{gstImage}</span> */}
      </ImageUploadContainer>
      </InputContainer>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AdduserPage;
