
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/store_auth";

import React from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

