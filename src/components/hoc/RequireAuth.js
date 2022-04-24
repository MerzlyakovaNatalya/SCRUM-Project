import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const user = useSelector((state) => state.users);

    if (user.length < 1) {
        return <Navigate to='/layout/login' state={{from: location}} />
    }

    return children;
}

export {RequireAuth}