import { Navigate } from "react-router-dom";

export const PrivateAdmin = ({ children }) => {
  const tokenData = localStorage.getItem("admin");

  if (tokenData !== null) {
    try {
      const getTokenFromLocalStorage = (tokenData);
      return getTokenFromLocalStorage?.admin === undefined ? children : (<Navigate to='/' replace={true} />);
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
