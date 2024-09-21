import React, { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const token = localStorage.getItem('token');

    if (!token) {
        // Redirect to login if no token is present
        return <Navigate to="/login" />;
    }

    return <>{children}</>; // Render the children if token exists
};

export default ProtectedRoute;
