import { useSelector } from "react-redux";

import { selectIsLoggedIn } from "../redux/auth/authSelecotrs";

import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
    const isLogged = useSelector(selectIsLoggedIn);

    return isLogged ? (
        <Navigate to={redirectTo} replace />
    ) : (
        children
    );
}

export default RestrictedRoute;