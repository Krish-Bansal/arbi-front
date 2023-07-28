import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextInput, { TextInputLabel } from "../components/Molecules/TextInput";
import Dropdown from "../components/Molecules/Dropdown/Dropdown";
import axios from "axios";
import { BASE_URL } from "../utils/requestMethod";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
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
  const [contractData, setContractData] = useState([]);
  const [formData, setFormData] = useState({
    selectedSeller: "",
    selectedSellerRepresentative: "",
    selectedBuyer: "",
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
  });

  const handleDateChange = (date) => {
    setFormData({ ...formData, selectedDeliveryPeriod: date });
  };
  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const userData = await axios.post(`${BASE_URL}/contract/create`, {
      seller: formData?.selectedSeller,
      sellerRepresentative: formData?.selectedSellerRepresentative,
      buyer: formData?.selectedBuyer,
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
    });
    console.log(userData);
  };

  // Event handlers for changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log("hiiii", event.target);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    axios
      .get(`${BASE_URL}/user/fetch`)
      .then((res) => {
        console.log(res);
        setContractData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AppContainer>
      <Form onSubmit={handleSubmit}>
        <Dropdown
          label="Seller"
          options={["abc", "bcd", "cdf"]}
          value={formData?.selectedSeller}
          onChange={handleChange}
          name="selectedSeller"
        />
        <Dropdown
          label="Seller's Representative"
          options={["abc", "bcd", "cdf"]}
          value={formData?.selectedSellerRepresentative}
          onChange={handleChange}
          name="selectedSellerRepresentative"
        />
        <Dropdown
          label="Buyer"
          options={["abc", "bcd", "cdf"]}
          value={formData?.selectedBuyer}
          onChange={handleChange}
          name="selectedBuyer"
        />
        <Dropdown
          label="Buyer's Representative"
          options={["abc", "bcd"]}
          value={formData?.selectedBuyerRepresentative}
          onChange={handleChange}
          name="selectedBuyerRepresentative"
        />
        <Dropdown
          label="Commodity"
          options={["abc", "bcd", "cdf"]}
          value={formData?.selectedCommodity}
          onChange={handleChange}
          name="selectedCommodity"
        />
        <Dropdown
          label="Quality Parameters"
          options={["abc", "bcd", "cdf"]}
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
          <DatePicker
            selected={formData?.selectedDeliveryPeriod}
            onChange={handleDateChange}
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
        <Dropdown
          label="Other Terms"
          options={["abc", "bcd", "cdf"]}
          value={formData?.selectedOtherTerms}
          onChange={handleChange}
          name="selectedOtherTerms"
        />
        <TextContainer>
          <TextInput
            label="Applicable Rules"
            value={formData?.selectedApplicableRules}
            onChange={handleChange}
            name="selectedApplicableRules"
          />
          <Dropdown
            label="Amendment"
            options={["abc", "bcd", "cdf"]}
            value={formData?.selectedAmendment}
            onChange={handleChange}
            name="selectedAmendment"
          />
        </TextContainer>
        <TextInput
          label="Dispute Resolution"
          value={formData?.selectedDisputeResolution}
          onChange={handleChange}
          name="selectedDisputeResolution"
        />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </AppContainer>
  );
};

export default ContractPage;
