import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isAuthenticated: boolean;
  redirectPath: string;
  children: React.ReactNode;
  userRole?: string; // optional
  allowedRoles?: string[]; // optional
}

export default function ProtectedRoute({
  isAuthenticated,
  redirectPath,
  children,
  userRole,
  allowedRoles = [],
}: ProtectedRouteProps) {
  const hasAccess =
    isAuthenticated &&
    (allowedRoles.length === 0 ||
      allowedRoles.includes(userRole?.toLowerCase() || ""));

  if (!hasAccess) {
    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
}
