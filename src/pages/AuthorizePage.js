import styled from "styled-components";
import DynamicButton from "../components/Molecules/Button/DynamicButton";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
`;
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
const AuthorizePage = () => {
  const handleLogout = () => {
    localStorage.clear()
  }
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/contract')
  }
  const handleClick1 = () => {
    navigate('/pending-contract')
  }
  const handleClick2 = () => {
    navigate('/executed-contract')
  }
  return (
    <>
      <ButtonContainer>
        <DynamicButton
          text="Generate a Contract"
          backgroundColor="#808080"
          textColor="#ffffff"
          onClick={handleClick}
        />
        <DynamicButton
          text="Edit Profile"
          backgroundColor="#00ff00"
          textColor="#000000"
        />
        <DynamicButton
          text="log Out"
          backgroundColor="#0000ff"
          textColor="#ffffff"
          onClick={handleLogout}
        />
      </ButtonContainer>
      <ButtonColumn>
        <DynamicButton
          onClick={handleClick1}
          text="Contract Pending for Approval"
          backgroundColor="#808080"
          textColor="#ffffff"
        />
        <DynamicButton
          onClick={handleClick2}
          text="Executed Contract"
          backgroundColor="#808080"
          textColor="#ffffff"
        />
        <DynamicButton
          text="Propose Amendment to Trade Rules"
          backgroundColor="#808080"
          textColor="#ffffff"
        />
        <DynamicButton
          text="Amendment to Trade Rules for Approval"
          backgroundColor="#808080"
          textColor="#ffffff"
        />
        <DynamicButton
          text="Executed Amendment to Trade Rules"
          backgroundColor="#808080"
          textColor="#ffffff"
        />
      </ButtonColumn>
    </>
  );
};

export default AuthorizePage;
