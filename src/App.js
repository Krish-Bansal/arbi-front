import {
  Navigate,
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import styled from "styled-components";
import SignupForm from "./pages/SignUp";
import MasterProfilePage from "./pages/MasterProfilePage";
import AuthorizePage from "./pages/AuthorizePage";
import LoginAdmin from "./pages/LoginPage";
import { SnackbarProvider } from "notistack";
import AdduserPage from "./pages/AddUserPage";
import RemoveUser from "./pages/RemoveAuthorizeUser";
import ContractPage from "./pages/ContractPage";
import StatusPage from "./pages/StatusPage";
import EmailVerificationPage from "./pages/EmailVerification";
import ListOfUsers from "./pages/ListOfUsers";
import Contract from "./pages/contract";
import AcceptContractPage from "./pages/acceptContract";
import RejectContractPage from "./pages/rejectContract";
import ChangeContractPage from "./pages/changeContract";
import { OpenRoutes } from "./routing/OpenRoutes";
import { PrivateAuth } from "./routing/PrivateAuth";
import { PrivateAdmin } from "./routing/PrivateAdmin";
import SetMPIN from "./pages/SetMpin";

const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Logo = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
// `;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const NavLink = styled.li`
  margin-left: 10px;

  a {
    text-decoration: none;
    color: #333;
    font-weight: bold;

    &:hover {
      color: #555;
    }
  }
`;

const SignInUpButton = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;
const App = () => {
  return (
    <>
      <SnackbarProvider>
        <HeaderContainer>
          <Nav>
            {/* <OpenRoutes> */}
            <NavLinks>
              <NavLink>
                <a href="/">Home</a>
              </NavLink>
              <NavLink>
                <a href="/about">About Us</a>
              </NavLink>
              <NavLink>
                <a href="/rules">Rules</a>
              </NavLink>
              <NavLink>
                <a href="/contact">Contact Us</a>
              </NavLink>
              <NavLink>
                <a href="/login">Sign In/Sign Up</a>
              </NavLink>
            </NavLinks>
            {/* </OpenRoutes> */}
            {/* <SignInUpButton>Sign In/Sign Up</SignInUpButton> */}
          </Nav>
        </HeaderContainer>
        <Router>
          <Routes>
            <Route path="*" element={<SignupForm />} />
            <Route path="/masterpage" element={<PrivateAdmin><MasterProfilePage /></PrivateAdmin>} />
            <Route path='authorize' element={<PrivateAuth>
              <AuthorizePage />
            </PrivateAuth>} />
            <Route path="/" element={<LoginAdmin />} />
            <Route path="/adduser" element={<PrivateAdmin><AdduserPage /></PrivateAdmin>} />
            <Route path="/remove/user" element={<PrivateAdmin>
              <RemoveUser />
            </PrivateAdmin>} />
            <Route path="/contract" element={<PrivateAuth><ContractPage /></PrivateAuth>} />
            <Route path="/status" element={<StatusPage />} />
            <Route path="/users" element={<ListOfUsers />} />
            <Route path="/user/email-verification" element={<EmailVerificationPage />} />
            <Route path="/contract/:id" element={<Contract />} />
            <Route path="/contract/accept/:id" element={<AcceptContractPage />} />
            <Route path="/contract/reject/:id" element={<RejectContractPage />} />
            <Route path="/contract/change/:id" element={<ChangeContractPage />} />
            <Route path="/set-mpin/:id" element={<SetMPIN />} />
          </Routes>
        </Router>
      </SnackbarProvider >
    </>
  );
};

export default App;
