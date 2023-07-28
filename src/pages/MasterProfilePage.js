import styled from "styled-components";
import DynamicButton from "../components/Molecules/Button/DynamicButton";
import { useNavigate } from "react-router-dom";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;
const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 20%;
  padding-left: 100px;
  gap: 15px;
`;
const MasterProfilePage = () => {
  const navigate = useNavigate()
  const handleClick = async()=>{
    navigate('/adduser')
  }
  const RemoveUserClick = async()=>{
    navigate('/remove/user')
  }
  return (
    <>
      <ButtonContainer>
        <DynamicButton
          text="List of Authorized Users"
          backgroundColor="#ff0000"
          textColor="#ffffff"
        />
        <DynamicButton
          text="Edit Profile"
          backgroundColor="#00ff00"
          textColor="#000000"
        />
        <DynamicButton
          text="Sign Out"
          backgroundColor="#0000ff"
          textColor="#ffffff"
        />
      </ButtonContainer>
      <ButtonColumn>
        <DynamicButton
          text="Add Authorized User"
          backgroundColor="#ff0000"
          textColor="#ffffff"
          onClick={handleClick}
        />
        <DynamicButton
          text="Remove Authorized User"
          backgroundColor="#00ff00"
          textColor="#000000"
          onClick={RemoveUserClick}
        />
        <DynamicButton
          text="Trade Executed"
          backgroundColor="#0000ff"
          textColor="#ffffff"
        />
      </ButtonColumn>
    </>
  );
};

export default MasterProfilePage;
