import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext/UserContext';

const RequireAuth = ({ children }) => {
    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();

    if (isLoading) {
        return <button className="btn loading">loading</button>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default RequireAuth;