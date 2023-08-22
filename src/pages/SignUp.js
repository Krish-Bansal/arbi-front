import React, { useState } from "react";
import styled from "styled-components";
import AddressComponent from "../components/Layout/Address/AddressComponent";
import GSTComponent from "../components/Molecules/TextWithImage/TextWithImage";
import { registerData, typeEntity } from "../utils/constant";
import axios from "axios";
import { useSnackbar } from "notistack";
import { BASE_URL } from "../utils/requestMethod";
import { useNavigate } from "react-router-dom";
const FormContainer = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 20px;
`;

const FormRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const FormSubDiv = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: self-end; */
  /* gap: ; */
`;
const Label = styled.label`
  flex-basis: 200px;
  margin-right: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const Checkbox = styled.input`
  margin-right: 5px;
`;
const TextInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  background-color: black;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
`;

const SignupForm = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  // Function to handle checkbox change
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const [attchmentData, setAttachmentData] = useState({
    pan: "",
    entity: "",
    gst: "",
    register: "",
    nameOfEntity: "",
    typeOfEntity: "",
    landmark: "",
    city: "",
    state: "",
    pin: "",
    mobileNumber: "",
    whatsAppNumber: "",
    email: "",
    userId: "",
    password: "",
    retypePassword: "",
  });
  const [attchment, setAttachment] = useState({ pan: "", entity: "", gst: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("all Data", attchmentData, attchment);
    if (!isChecked) enqueueSnackbar("please accept the terms & conditions!");
    if (attchmentData?.password !== attchmentData?.retypePassword) {
      enqueueSnackbar("password doesn't match with retype password!");
    } else {
      console.log(attchmentData)
      const data = await axios.post(`${BASE_URL}/user/create`, {
        registerAs: attchmentData?.register,
        nameOfEntity: attchmentData?.nameOfEntity,
        typeOfEntity: attchmentData?.typeOfEntity,
        address: {
          landmark: attchmentData?.landmark,
          city: attchmentData?.city,
          state: attchmentData?.state,
          pin: attchmentData?.pin,
        },
        mobileNumber: attchmentData?.mobileNumber,
        whatsAppNumber: attchmentData?.whatsAppNumber,
        email: attchmentData?.email,
        gstin: attchmentData?.gst,
        gstinFile: attchment?.gst,
        pan: attchmentData?.pan,
        panFile: attchment?.pan,
        entityRegistrationNo: attchmentData?.entity,
        entityRegistrationFile: attchment?.entity,
        userId: attchmentData?.userId,
        password: attchmentData?.password,
      });
      if (data) {
        navigate("/login");
      }
    }
  };

  const handleOptionSelect = (event) => {
    setAttachmentData({ ...attchmentData, typeOfEntity: event.target.value });
    console.log("Selected option:", event);
  };

  const onGetData = async (name, datafile) => {
    setAttachment({ ...attchment, [name]: datafile.data.filename });
  };

  const onGetNormaData = async (name, data) => {
    setAttachmentData({ ...attchmentData, [name]: data });
  };

  const handleSetUpChange = async (event) => {
    setAttachmentData({
      ...attchmentData,
      [event.target.name]: event.target.value,
    });
  };

  const onHandleAddressChange = (name, data) => {
    setAttachmentData({ ...attchmentData, [name]: data });
  };
  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <Label>Register As:</Label>
          <Select
            value={attchmentData?.register}
            onChange={(event) =>
              setAttachmentData({
                ...attchmentData,
                register: event.target.value,
              })
            }
          >
            {registerData.map((item) => {
              return (
                <option key={item.key} value={item.value}>
                  {item.key}
                </option>
              );
            })}
          </Select>{" "}
        </FormRow>

        <FormRow>
          <Label>Name of the Entity:</Label>
          <Input
            type="text"
            name="nameOfEntity"
            value={attchmentData?.nameOfEntity}
            onChange={handleSetUpChange}
          />
        </FormRow>
        <FormRow>
          <Label>Type of the Entity:</Label>
          <Select
            value={attchmentData?.typeOfEntity}
            onChange={handleOptionSelect}
            name="typeOfEntity"
          >
            {typeEntity.map((item) => {
              return (
                <option key={item.key} value={item.value}>
                  {item.key}
                </option>
              );
            })}
          </Select>
        </FormRow>
        <FormRow>
          <AddressComponent
            onHandleDataAddress={onHandleAddressChange}
            attchmentData={attchmentData}
          />
        </FormRow>
        <FormSubDiv>
          <FormRow>
            <Label>Mobile Number:</Label>
            <TextInput
              type="text"
              placeholder="10 digit"
              name="mobileNumber"
              value={attchmentData?.mobileNumber}
              onChange={handleSetUpChange}
            />
          </FormRow>
          <FormRow>
            <Label>What's Number:</Label>
            <TextInput
              type="text"
              placeholder="10 digit"
              name="whatsAppNumber"
              value={attchmentData?.whatsAppNumber}
              onChange={handleSetUpChange}
            />
          </FormRow>
        </FormSubDiv>
        <FormRow>
          <Label>Email:</Label>
          <TextInput
            type="email"
            placeholder="type your email"
            name="email"
            value={attchmentData?.email}
            onChange={handleSetUpChange}
          />
        </FormRow>
        <GSTComponent
          labelText="GSTIN"
          placeholderText="Enter GSTIN Number"
          name="gst"
          getTheNormalData={onGetNormaData}
          getTheEachFileData={onGetData}
        />
        <GSTComponent
          labelText="PAN"
          placeholderText="Enter PAN Number"
          name="pan"
          getTheNormalData={onGetNormaData}
          getTheEachFileData={onGetData}
        />
        <GSTComponent
          labelText="Entity Legal Entity Registration No"
          placeholderText=""
          name="entity"
          getTheEachFileData={onGetData}
          getTheNormalData={onGetNormaData}
        />
        <FormRow>
          <Label>Create User Id:</Label>
          <TextInput
            type="text"
            placeholder="type the unique character"
            name="userId"
            value={attchmentData?.userId}
            onChange={handleSetUpChange}
          />
        </FormRow>
        <FormRow>
          <Label>Create Password:</Label>
          <TextInput
            type="password"
            placeholder=" 8 characters comes with alphabet and numbers"
            name="password"
            value={attchmentData?.password}
            onChange={handleSetUpChange}
          />
        </FormRow>
        <FormRow>
          <Label>Retype Password:</Label>
          <TextInput
            type="password"
            placeholder="match with create password"
            name="retypePassword"
            value={attchmentData?.retypePassword}
            onChange={handleSetUpChange}
          />
        </FormRow>
        <FormRow>
          <CheckboxLabel>
            <Checkbox
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            We hereby acknowledge that we have read the website policy terms and
            conditions of ARBITrade India available at [link to the website
            terms and conditions] and we agree to be bound by it
          </CheckboxLabel>
        </FormRow>

        <FormRow>
          <Button type="submit">Submit</Button>
        </FormRow>
      </form>
    </FormContainer>
  );
};

export default SignupForm;
