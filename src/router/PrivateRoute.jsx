import { Navigate } from "react-router-dom";

export const PrivateRoute = ({
  Component,
  fallBackPath,
  isAllowed,
  role,
  requiredRole,
}) => {
  if (!isAllowed || (requiredRole && role !== requiredRole)) {
    return <Navigate to={fallBackPath} replace />;
  }

  return <Component />;
};
