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
                <a href="/signin">Sign In/Sign Up</a>
              </NavLink>
            </NavLinks>
            {/* <SignInUpButton>Sign In/Sign Up</SignInUpButton> */}
          </Nav>
        </HeaderContainer>
        <Router>
          <Routes>
            <Route path="*" element={<SignupForm />} />
            <Route path="/masterpage" element={<MasterProfilePage />} />
            <Route path="/authorize" element={<AuthorizePage />} />
            <Route path="/login" element={<LoginAdmin />} />
            <Route path="/adduser" element={<AdduserPage />} />
            <Route path="/remove/user" element={<RemoveUser />} />
            <Route path="/contract" element={<ContractPage />} />
            <Route path="/status" element={<StatusPage />} />
          </Routes>
        </Router>
      </SnackbarProvider>
    </>
  );
};

export default App;
