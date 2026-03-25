import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const accessToken = true;

  if (!accessToken) {
    return <Navigate to="/login" />;
  }
  return children;
};
