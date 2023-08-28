import { Navigate } from "react-router-dom";

export const PrivateAuth = ({ children }) => {
  const tokenData = localStorage.getItem("auth");

  if (tokenData !== null) {
    try {
      const getTokenFromLocalStorage = (tokenData);
      return getTokenFromLocalStorage?.auth === undefined ? children : (<Navigate to='/' replace={true} />);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      // Handle the error, e.g., redirect to login page
      return <Navigate to='/' replace={true} />;
    }
  } else {
    // Handle null tokenData, e.g., redirect to login page
    return <Navigate to='/' replace={true} />;
  }
};
