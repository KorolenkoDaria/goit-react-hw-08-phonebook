import { useSelector } from "react-redux";

import { Navigate } from "react-router-dom";

import { selectIsLoggedIn, selectisRefreshing } from "../redux/auth/authSelecotrs";


const PrivateRoute = ({ children, redirectTo = "/" }) => {
    const isLogged = useSelector(selectIsLoggedIn);
    const isRefresh = useSelector(selectisRefreshing);
    const shouldRedirect = !isLogged && !isRefresh;

    return shouldRedirect ? (
        <Navigate to={redirectTo} replace />
    ) : (
        children
    );
}

export default PrivateRoute;