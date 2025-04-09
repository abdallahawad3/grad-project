import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  allowedRoles?: string[];
  redirectPath: string;
  children: React.ReactNode;
}

export default function ProtectedRoute({
  isAuthenticated,
  allowedRoles,
  redirectPath,
  children,
}: ProtectedRouteProps) {
  const userData = JSON.parse(localStorage.getItem("user") || "{}");
  const userRole = userData?.data?.role;

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} />;
  }

  // Redirect to home if role is not allowed
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
}
