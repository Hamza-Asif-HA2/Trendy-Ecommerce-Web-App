import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase/firebase"; // Adjust the import path

const PrivateRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user ? children : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
