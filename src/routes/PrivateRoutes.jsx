import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

function PrivateRoutes({children}) {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return;
    }
    if (user) {
        return children;
    }
  return <Navigate state={location.pathname} to="/login" />
}

export default PrivateRoutes
