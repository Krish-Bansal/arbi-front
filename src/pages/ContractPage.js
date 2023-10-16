import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextInput, { TextInputLabel } from "../components/Molecules/TextInput";
import Dropdown from "../components/Molecules/Dropdown/Dropdown";
import axios from "axios";
import { BASE_URL } from "../utils/requestMethod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "../components/Molecules/Dropdown/CustomDropDown";
const AppContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
const TextContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const ContractPage = () => {
  const navigate = useNavigate()
  const [contractData, setContractData] = useState([]);
  const [formData, setFormData] = useState({
    selectedSeller: "",
    selectedSellerRepresentative: "",
    selectedSellerEmail: "",
    selectedBuyer: "",
    selectedBuyerEmail: "",
    selectedBuyerRepresentative: "",
    selectedCommodity: "",
    selectedQualityParameters: "",
    selectedRebateSchedule: "",
    selectedVolume: "",
    selectedVolumePer: "",
    selectedVolumePerQuan: "",
    selectedIncoterm: "",
    selectedOrigin: "",
    selectedDestination: "",
    selectedModeofTransport: "",
    selectedDeliveryPeriod: "",
    selectedDeliveryPeriodto: "",
    selectedDeliveryBasis: "",
    selectedPrice: "",
    selectedPricePer: "",
    selectedPaymentTerm: "",
    selectedFreeTime: "",
    selectedFreeTimePer: "",
    selectedDetentionDemurrageCharges: "",
    selectedDetentionDemurrageChargesPer: "",
    selectedOtherTerms: "",
    selectedApplicableRules: "",
    selectedAmendment: "",
    selectedDisputeResolution: "",
    selectedMPIN: "",
  });
  // console.log(formData)
  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDeliveryPeriod: date });
  };
  const handleDateChangeto = (date) => {
    setFormData({ ...formData, selectedDeliveryPeriodto: date });
  };
  // Event handler for form submission
  const handleSubmit = async (e) => {
    const token = localStorage.getItem('auth');


    // Set the Authorization header with the token
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    e.preventDefault();
    const userData = await axios.post(`${BASE_URL}/contract/create`, {
      seller: formData?.selectedSeller,
      sellerRepresentative: formData?.selectedSellerRepresentative,
      sellerEmail: formData?.selectedSellerEmail,
      buyer: formData?.selectedBuyer,
      buyeremail: formData?.selectedBuyerEmail,
      selleremail: formData?.selectedSellerEmail,
      buyerRepresentative: formData?.selectedBuyerRepresentative,
      commodity: formData?.selectedCommodity,
      qualityParameters: formData?.selectedQualityParameters,
      rebateSchedule: formData?.selectedRebateSchedule,
      volume: formData?.selectedVolume,
      volumePerIns: formData?.selectedVolumePer,
      volumeRate: formData?.selectedVolumePerQuan,
      incoterm: formData?.selectedIncoterm,
      origin: formData?.selectedOrigin,
      destination: formData?.selectedDestination,
      modeOfTransport: formData?.selectedModeofTransport,
      deliveryPeriod: formData?.selectedDeliveryPeriod,
      deliveryPeriodto: formData?.selectedDeliveryPeriodto,
      deliveryBasis: formData?.selectedDeliveryBasis,
      price: formData?.selectedPrice,
      pricePerIns: formData?.selectedPricePer,
      paymentTerm: formData?.selectedPaymentTerm,
      freeTime: formData?.selectedFreeTime,
      freeTimePerIns: formData?.selectedFreeTimePer,
      detentionOrDemurrageCharges: formData?.selectedDetentionDemurrageCharges,
      detentionOrDemurrageChargesPerIns:
        formData?.selectedDetentionDemurrageChargesPer,
      otherTerms: formData?.selectedOtherTerms,
      applicableRules: formData?.selectedApplicableRules,
      Amendment: formData?.selectedAmendment,
      disputeResolution: formData?.selectedDisputeResolution,
      MPIN: formData?.selectedMPIN
    }, { headers });
    if (userData) {
      navigate('/status')
    }
  };

  // Event handlers for changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    // console.log("hiiii", event.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function handleChangereq(event) {
    const selectedSeller = event.target.value;
    const { name, value } = event.target;
    // console.log("hiiii", event.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      selectedSellerRepresentative: null
    }));
    // Make a request to the backend
    axios.get(`${BASE_URL}/contract/representative`, {
      params: {
        selectedSeller: selectedSeller
      }
    })
      .then((response) => {
        // Handle the response data as needed
        setAuthOptions(response.data.namesOfUser);
        console.log(response.data.namesOfUser); // or console.log(authOptions) depending on the context
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  function handleChangereq2(event) {
    const selectedSeller = event.target.value;
    const { name, value } = event.target;
    // console.log("hiiii", event.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      selectedBuyerRepresentative: null
    }));
    // Make a request to the backend
    axios.get(`${BASE_URL}/contract/representative2`, {
      params: {
        selectedSeller: selectedSeller
      }
    })
      .then((response) => {
        // Handle the response data as needed
        setbuyOptions(response.data.namesOfUser);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  const handleChangeEmail = async (event) => {
    const selectedValue = event.target.value;
    console.log(selectedValue)
    try {
      const response = await axios.post(`${BASE_URL}/contract/get-email`, { selectedValue });
      // Assuming the response from the backend includes selectedBuyeremail
      const selectedBuyeremailFromBackend = response.data.selectedBuyeremail;

      setFormData({
        ...formData,
        selectedBuyerRepresentative: selectedValue,
        selectedBuyerEmail: selectedBuyeremailFromBackend,
      });
      // const buyeremail = selectedBuyeremailFromBackend
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors here
    }
  };
  const handleChangeEmail2 = async (event) => {
    const selectedValue = event.target.value;
    try {
      const response = await axios.post(`${BASE_URL}/contract/get-email`, { selectedValue });
      // Assuming the response from the backend includes selectedBuyeremail
      const selectedSelleremailFromBackend = response.data.selectedBuyeremail;

      setFormData({
        ...formData,
        selectedSellerRepresentative: selectedValue,
        selectedSellerEmail: selectedSelleremailFromBackend,
      });
      // const buyeremail = selectedBuyeremailFromBackend
    } catch (error) {
      console.error("Error:", error);
      // Handle any errors here
    }
  };

  console.log(formData)
  const [selleroptions, setSellerOptions] = useState([]);
  const [authOptions, setAuthOptions] = useState([]);
  const [buyOptions, setbuyOptions] = useState([]);

  useEffect(() => {
    fetchOptions();
  }, []);
  // useEffect(() => {
  //   fetchAuths();
  // }, []);

  const fetchOptions = async () => {
    const token = localStorage.getItem('auth');
    const headers = {
      Authorization: `Bearer ${token}`,
    };
    try {
      const response = await axios.get(`${BASE_URL}/contract/admin-names`, { headers });
      setSellerOptions(response.data.data);
    } catch (error) {
      console.error('Error fetching options:', error);
    }
  };
  // const fetchAuths = async () => {
  //   const token = localStorage.getItem('auth');
  //   const headers = {
  //     Authorization: `Bearer ${token}`,
  //   };
  //   try {
  //     const response = await axios.get(`${BASE_URL}/contract/auth-names`, { headers });
  //     setAuthOptions(response.data.data);
  //   } catch (error) {
  //     console.error('Error fetching options:', error);
  //   }
  // };
  const [text, setText] = useState('');
  const maxWords = 1000;

  const handleChangeText = (event) => {
    const inputText = event.target.value;
    const words = inputText.trim().split(/\s+/);
    if (words.length <= maxWords) {
      setText(inputText);
    }
  };
  return (
    <AppContainer>
      <Form onSubmit={handleSubmit}>
        <Dropdown
          label="Seller"
          value={formData?.selectedSeller}
          onChange={handleChangereq}
          name="selectedSeller"
          options={selleroptions}
        />
        {formData.selectedSeller && (
          <Dropdown
            label="Seller's Representative"
            options={authOptions}
            value={formData?.selectedSellerRepresentative}
            onChange={handleChangeEmail2}
            name="selectedSellerRepresentative"
          />
        )}
        {/* <TextInput
          label="Buyer's Email"
          value={formData?.selectedBuyerEmail}
          onChange={handleChange}
          name="selectedBuyerEmail"
        /> */}
        <Dropdown
          label="Buyer"
          options={selleroptions}
          value={formData?.selectedBuyer}
          onChange={handleChangereq2}
          name="selectedBuyer"
        />
        {formData.selectedBuyer && (
          <Dropdown
            label="Buyer's Representative"
            options={buyOptions}
            value={formData?.selectedBuyerRepresentative}
            onChange={handleChangeEmail}
            name="selectedBuyerRepresentative"
          />
        )}
        <CustomDropdown
          label="Commodity"
          options={["Arhar Whole(Red Gram)", "Moong Whole(Green Gram)", "Masoor Whole(Lentil)", "Urad Whole(Black Gram)", "Wheat", "Wheat", "Wheat", "Maize/Corn", "Chana (Bengal Gram)", "Bajra(Pearl Millet)", "Barley(Jau)", "Jowar", "Dhan(Paddy)", "Rajma(Kidney Beans)", "Ragi(Finge Millet)", "Lobia (Cowpea)", "Rice", "Mustard Seed", "Soyabean", "Jaggery", "Arhar Pulses", "Masoor Pulses", "Moong Pulse", "Urad Pulse"]}
          value={formData?.selectedCommodity}
          onChange={handleChange}
          name="selectedCommodity"
        />

        <CustomDropdown
          label="Quality Parameters"
          options={["Quality1", "Quality2", "Quality3"]}
          value={formData?.selectedQualityParameters}
          onChange={handleChange}
          name="selectedQualityParameters"
        />
        <Dropdown
          label="Rebate Schedule"
          options={["abc", "bcd", "cdf"]}
          value={formData?.selectedRebateSchedule}
          onChange={handleChange}
          name="selectedRebateSchedule"
        />
        <TextContainer>
          <TextInput
            label="Volume"
            value={formData?.selectedVolume}
            onChange={handleChange}
            name="selectedVolume"
          />
          <Dropdown
            label=""
            options={["Kg", "Ton", "Quintal"]}
            value={formData?.selectedVolumePer}
            onChange={handleChange}
            name="selectedVolumePer"
          />
          <TextInput
            label="+/-"
            value={formData?.selectedVolumePerQuan}
            onChange={handleChange}
            name="selectedVolumePerQuan"
          />
          <TextInputLabel>%</TextInputLabel>
        </TextContainer>
        <Dropdown
          label="Incoterm"
          options={["Ex-work", "FOB", "CPT", "CIP", "DAP"]}
          value={formData?.selectedIncoterm}
          onChange={handleChange}
          name="selectedIncoterm"
        />
        <TextInput
          label="Origin"
          value={formData?.selectedOrigin}
          onChange={handleChange}
          name="selectedOrigin"
        />
        <TextInput
          label="Destination"
          value={formData?.selectedDestination}
          onChange={handleChange}
          name="selectedDestination"
        />
        <Dropdown
          label="Mode of Transport"
          options={["Truck", "Railway"]}
          value={formData?.selectedModeofTransport}
          onChange={handleChange}
          name="selectedModeofTransport"
        />
        <TextContainer>
          <label>Delivery Period</label>
          <label htmlFor="">From</label>
          <DatePicker
            selected={formData?.selectedDeliveryPeriod}
            onChange={handleDateChange}
          />
          <label htmlFor="">to</label>
          <DatePicker
            selected={formData?.selectedDeliveryPeriodto}
            onChange={handleDateChangeto}
          />

        </TextContainer>
        <Dropdown
          label="Delivery Basis"
          options={["Loaded", "Delivered"]}
          value={formData?.selectedDeliveryBasis}
          onChange={handleChange}
          name="selectedDeliveryBasis"
        />
        <TextContainer>
          <TextInput
            label="Price: Rs."
            value={formData?.selectedPrice}
            onChange={handleChange}
            name="selectedPrice"
          />
          <Dropdown
            label="per"
            options={["Kg", "Ton", "Quintal"]}
            value={formData?.selectedPricePer}
            onChange={handleChange}
            name="selectedPricePer"
          />
        </TextContainer>
        <TextInput
          label="Payment Term"
          value={formData?.selectedPaymentTerm}
          onChange={handleChange}
          name="selectedPaymentTerm"
        />
        <TextContainer>
          <TextInput
            label="Free Time: "
            value={formData?.selectedFreeTime}
            onChange={handleChange}
            name="selectedFreeTime"
          />
          <Dropdown
            label=""
            options={["days", "hours"]}
            value={formData?.selectedFreeTimePer}
            onChange={handleChange}
            name="selectedFreeTimePer"
          />
        </TextContainer>
        <TextContainer>
          <TextInput
            label="Detention/Demurrage Charges: Rs."
            value={formData?.selectedDetentionDemurrageCharges}
            onChange={handleChange}
            name="selectedDetentionDemurrageCharges"
          />
          <Dropdown
            label="Per"
            options={["days", "hours"]}
            value={formData?.selectedDetentionDemurrageChargesPer}
            onChange={handleChange}
            name="selectedDetentionDemurrageChargesPer"
          />
        </TextContainer>
        <div>
          <label className="font-bold text-[13px]">Other Terms</label>
          <textarea
            value={text}
            onChange={handleChangeText}
            name="selectedOtherTerms"
            rows={10} // You can adjust the number of rows as needed
            cols={50} // You can adjust the number of columns as needed
          />
          <p>Words remaining: {maxWords - text.split(/\s+/).length}</p>
        </div>
        <TextContainer>
          <Dropdown
            label="Applicable Rules"
            options={["Arbitrade Rules", "rule1", "rule2"]} // Add "Default" as the first option
            value={formData?.selectedApplicableRules || "Arbitrade Rules"} // Set the default value
            onChange={handleChange}
            name="selectedApplicableRules"
          />
          <h3>Amendment</h3>
          <input type="text" disabled />
          {/* <TextInput
            label="Amendment"
          options={["Arbitrade Arbitration", "abc", "bcd", "cdf"]} // Add "Default" as the first option
          value={formData?.selectedAmendment || "Arbitrade Arbitration"} // Set the default value
          onChange={handleChange}
          name="selectedAmendment"
          /> */}
        </TextContainer>

        <TextInput
          label="Dispute Resolution"
          value={formData?.selectedDisputeResolution || "Arbitrade Arbitration"}
          onChange={handleChange}
          name="selectedDisputeResolution"
        />
        <ul>
          <li>
            <strong>Please Input Your MPIN below to digitally sign the contract</strong>

          </li>
        </ul>
        <TextInput
          label="MPIN"
          value={formData?.MPIN}
          onChange={handleChange}
          name="selectedMPIN"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </AppContainer>
  );
};

export default ContractPage;
